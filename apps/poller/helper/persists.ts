import { prisma } from "db";
import type { CreateFill, CreateOrder, EventType } from "../types/streams";

export async function persistOrder(event: EventType) {
  const parsedPayload = event.payload as unknown as CreateOrder;
  const market = await prisma.markets.findFirst({
    where: {
      marketSlug: parsedPayload.market,
    },
  });
  if (!market) {
    throw new Error("no such market registered yet");
  }

  await prisma.orders.create({
    data: {
      id: parsedPayload.orderId,
      userID: "", //update later
      type: parsedPayload.type === "long" ? "LONG" : "SHORT",
      orderType: parsedPayload.orderType === "market" ? "MARKET" : "LIMIT",
      marketId: market.id,
      price: parsedPayload.price.toString() ?? "0",
      equity: parsedPayload.margin.toString(), // update later
      slippage: parsedPayload.slippage ?? 0,
      qty: parsedPayload.qty.toString(),
      status: "Open",
      initialMargin: "", //update later
    },
  });
}

export async function persistFill(event: EventType) {
  const parsedPayload = event.payload as unknown as CreateFill;
  const market = await prisma.markets.findFirst({
    where: {
      marketSlug: parsedPayload.market,
    },
  });
  if (!market) {
    throw new Error("no such market registered yet");
  }

  await prisma.fills.create({
    data: {
      maker: parsedPayload.maker,
      taker: parsedPayload.taker,
      marketId: market.id,
      price: parsedPayload.price.toString(),
      qty: parsedPayload.qty.toString(),
      makerOrderId: parsedPayload.makerOrderId,
      takerOrderId: parsedPayload.takerOrderId,
    },
  });
}
export async function persistCancelledOrder(event: EventType) {
  const orderId = event.payload.orderId as string;
  if (!orderId) {
    throw new Error("orderid not found");
  }
  
  await prisma.orders.update({
    data: {
      status: "Cancelled",
    },
    where: {
      id: orderId,
    },
  });
}
