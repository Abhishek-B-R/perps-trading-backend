import type { Request, Response } from "express";
import {
  marketIdParamSchema,
  orderBodySchema,
  orderIdParamSchema,
  priceParamSchema,
} from "../types/exchange-schema.js";
import { sendToEngine } from "../utils/redis-client.js";
import { sendValidationError } from "../utils/validation.js";

function getUserId(req: Request): string {
  if (!req.userId) throw new Error("Missing authenticated user");
  return req.userId;
}

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
      : {
          error: engineResponse.error,
        },
  );
}

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
      : {
          error: engineResponse.error,
        },
  );
}

export async function getEquity(req: Request, res: Response): Promise<void> {
  const engineResponse = await sendToEngine("get_equity", {
    userId: getUserId(req),
  });
  res.status(engineResponse.ok ? 200 : 400).json(
    engineResponse.ok
      ? engineResponse.data
      : {
          error: engineResponse.error,
        },
  );
}

export async function getOpenPositions(
  req: Request,
  res: Response,
): Promise<void> {
  const marketId = marketIdParamSchema.safeParse(req.params);
  const engineResponse = await sendToEngine("get_open_positions", {
    userId: getUserId(req),
    marketId,
  });

  res.status(engineResponse.ok ? 200 : 400).json(
    engineResponse.ok
      ? engineResponse.data
      : {
          error: engineResponse.error,
        },
  );
}

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
      : {
          error: engineResponse.error,
        },
  );
}

export async function getOrder(req: Request, res: Response): Promise<void> {
  const parsedParams = marketIdParamSchema.safeParse(req.params);
  if (!parsedParams.success) {
    sendValidationError(res, parsedParams.error);
    return;
  }

  const { marketId } = parsedParams.data;
  const engineResponse = await sendToEngine("get_order", {
    userId: getUserId(req),
    marketId,
  });

  res.status(engineResponse.ok ? 200 : 404).json(
    engineResponse.ok
      ? engineResponse.data
      : {
          error: engineResponse.error,
        },
  );
}

export async function getFills(req: Request, res: Response): Promise<void> {
  const engineResponse = await sendToEngine("get_fills", {
    userId: getUserId(req),
  });

  res.status(engineResponse.ok ? 200 : 404).json(
    engineResponse.ok
      ? engineResponse.data
      : {
          error: engineResponse.error,
        },
  );
}

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
      : {
          error: engineResponse.error,
        },
  );
}

export async function openOrders(req: Request, res: Response): Promise<void> {
  const parsedParams = marketIdParamSchema.safeParse(req.params);
  if (!parsedParams.success) {
    sendValidationError(res, parsedParams.error);
    return;
  }

  const { marketId } = parsedParams.data;
  const engineResponse = await sendToEngine("get_open_order", {
    userId: getUserId(req),
    marketId,
  });

  res.status(engineResponse.ok ? 200 : 400).json(
    engineResponse.ok
      ? engineResponse.data
      : {
          error: engineResponse.error,
        },
  );
}
