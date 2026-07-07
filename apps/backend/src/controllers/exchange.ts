import type { Request, Response } from "express";
import {
  marketIdParamSchema,
  orderBodySchema,
  orderIdParamSchema,
  priceParamSchema,
} from "../types/exchange-schema.js";
import { sendToEngine } from "../utils/redis-client.js";
import { sendValidationError } from "../utils/validation.js";
import { prisma } from "db";

function getUserId(req: Request): string {
  if (!req.userId) throw new Error("Missing authenticated user");
  return req.userId;
}

/** Deposit collateral into the engine for the authenticated user. */
export async function createOnRamp(req: Request, res: Response): Promise<void> {
  const userId = getUserId(req);
  const parsedBody = priceParamSchema.safeParse(req.body);
  if (!parsedBody.success) {
    sendValidationError(res, parsedBody.error);
    return;
  }

  const { price } = parsedBody.data;
  const engineResponse = await sendToEngine("create_onramp", {
    userId,
    price,
  });

  res.status(engineResponse.ok ? 200 : 400).json(
    engineResponse.ok
      ? engineResponse.data
      : { error: engineResponse.error },
  );
}

/** Place a limit or market order via the matching engine. */
export async function createOrder(req: Request, res: Response): Promise<void> {
  const userId = getUserId(req);

  const parsedBody = orderBodySchema.safeParse(req.body);
  if (!parsedBody.success) {
    sendValidationError(res, parsedBody.error);
    return;
  }

  const { orderType, positionType, equity, market, qty } = parsedBody.data;
  const price = orderType === "limit" ? parsedBody.data.price : null;
  const slippage = orderType === "market" ? parsedBody.data.slippage : null;
  const engineResponse = await sendToEngine("create_order", {
    userId,
    orderType,
    positionType,
    equity,
    market,
    price,
    qty,
    slippage,
  });

  res.status(engineResponse.ok ? 200 : 400).json(
    engineResponse.ok
      ? engineResponse.data
      : { error: engineResponse.error },
  );
}

/** Cancel an open order by ID. */
export async function cancelOrder(req: Request, res: Response): Promise<void> {
  const parsedParams = orderIdParamSchema.safeParse(req.params);
  if (!parsedParams.success) {
    sendValidationError(res, parsedParams.error);
    return;
  }

  const { orderId } = parsedParams.data;
  const engineResponse = await sendToEngine("cancel_order", {
    userId: getUserId(req),
    orderId,
  });

  res.status(engineResponse.ok ? 200 : 400).json(
    engineResponse.ok
      ? engineResponse.data
      : { error: engineResponse.error },
  );
}

/** Return available, locked, and total collateral from the engine. */
export async function getEquity(req: Request, res: Response): Promise<void> {
  const engineResponse = await sendToEngine("get_equity", {
    userId: getUserId(req),
  });
  res.status(engineResponse.ok ? 200 : 400).json(
    engineResponse.ok
      ? engineResponse.data
      : { error: engineResponse.error },
  );
}

/** Return open positions for a market (marketId is the DB UUID). */
export async function getOpenPositions(
  req: Request,
  res: Response,
): Promise<void> {
  const parsedParams = marketIdParamSchema.safeParse(req.params);
  if (!parsedParams.success) {
    sendValidationError(res, parsedParams.error);
    return;
  }

  const { marketId } = parsedParams.data;
  const engineResponse = await sendToEngine("get_open_positions", {
    userId: getUserId(req),
    marketId,
  });

  res.status(engineResponse.ok ? 200 : 400).json(
    engineResponse.ok
      ? engineResponse.data
      : { error: engineResponse.error },
  );
}

/** Return closed positions for a market. */
export async function getClosedPositions(
  req: Request,
  res: Response,
): Promise<void> {
  const parsedParams = marketIdParamSchema.safeParse(req.params);
  if (!parsedParams.success) {
    sendValidationError(res, parsedParams.error);
    return;
  }

  const { marketId } = parsedParams.data;
  const engineResponse = await sendToEngine("get_closed_positions", {
    userId: getUserId(req),
    marketId,
  });

  res.status(engineResponse.ok ? 200 : 400).json(
    engineResponse.ok
      ? engineResponse.data
      : { error: engineResponse.error },
  );
}

/** Fetch a single order from Postgres by ID. */
export async function getOrder(req: Request, res: Response): Promise<void> {
  const parsedParams = orderIdParamSchema.safeParse(req.params);
  if (!parsedParams.success) {
    sendValidationError(res, parsedParams.error);
    return;
  }

  const { orderId } = parsedParams.data;
  try {
    const order = await prisma.orders.findFirst({
      where: { id: orderId, userID: getUserId(req) },
    });
    if (!order) {
      res.status(404).json({ error: "order not found" });
      return;
    }
    res.status(200).json(order);
  } catch (e) {
    res.status(400).json({ error: String(e) });
  }
}

/** Return fill history for the authenticated user. */
export async function getFills(req: Request, res: Response): Promise<void> {
  const userId = getUserId(req);
  try {
    const fills = await prisma.fills.findMany({
      where: { OR: [{ maker: userId }, { taker: userId }] },
      orderBy: { createdAt: "desc" },
      take: 100,
    });
    res.status(200).json(fills);
  } catch (e) {
    res.status(400).json({ error: String(e) });
  }
}

/** Return open orders for a market from Postgres. */
export async function openOrders(req: Request, res: Response): Promise<void> {
  const parsedParams = marketIdParamSchema.safeParse(req.params);
  if (!parsedParams.success) {
    sendValidationError(res, parsedParams.error);
    return;
  }

  const { marketId } = parsedParams.data;
  try {
    const orders = await prisma.orders.findMany({
      where: {
        marketId,
        userID: getUserId(req),
        status: "Open",
      },
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json(orders);
  } catch (e) {
    res.status(400).json({ error: String(e) });
  }
}

/** Return order book depth for a market from the engine (auth). */
export async function getDepth(req: Request, res: Response): Promise<void> {
  const parsedParams = marketIdParamSchema.safeParse(req.params);
  if (!parsedParams.success) {
    sendValidationError(res, parsedParams.error);
    return;
  }

  const { marketId } = parsedParams.data;
  const engineResponse = await sendToEngine("get_depth", { marketId });

  res.status(engineResponse.ok ? 200 : 400).json(
    engineResponse.ok
      ? engineResponse.data
      : { error: engineResponse.error },
  );
}

/** Return mark price for a market from the engine (auth). */
export async function getMarkPrice(
  req: Request,
  res: Response,
): Promise<void> {
  const parsedParams = marketIdParamSchema.safeParse(req.params);
  if (!parsedParams.success) {
    sendValidationError(res, parsedParams.error);
    return;
  }

  const { marketId } = parsedParams.data;
  const engineResponse = await sendToEngine("get_mark_price", { marketId });

  res.status(engineResponse.ok ? 200 : 400).json(
    engineResponse.ok
      ? engineResponse.data
      : { error: engineResponse.error },
  );
}
