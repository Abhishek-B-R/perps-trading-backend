import { z } from "zod";

export const marketIdParamSchema = z.object({
  marketId: z.string().trim().min(1, "marketId is required"),
});

export const orderIdParamSchema = z.object({
  orderId: z.string().trim().min(1, "orderId is required"),
});

export const priceParamSchema = z.object({
  price: z.number(),
});

export const orderBodySchema = z.discriminatedUnion("orderType", [
  z.object({
    orderType: z.literal("limit"),
    positionType: z.enum(["long", "short"]),
    equity: z.number().positive("orders needs positive equity"),
    market: z.string().trim().min(1, "market name is required"),
    price: z.number().positive("orders require a positive price"),
    qty: z.number().positive("qty must be a positive number"),
  }),
  z.object({
    orderType: z.literal("market"),
    positionType: z.enum(["long", "short"]),
    equity: z.number().positive("orders needs positive equity"),
    market: z.string().trim().min(1, "market name is required"),
    qty: z.number().positive("qty must be a positive number"),
    slippage: z.number().positive("slippage percentage is required"),
  }),
]);
