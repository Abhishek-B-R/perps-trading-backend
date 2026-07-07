import { Router } from "express";
import {
  cancelOrder,
  createOnRamp,
  createOrder,
  getClosedPositions,
  getDepth,
  getEquity,
  getFills,
  getMarkPrice,
  getOpenPositions,
  getOrder,
  openOrders,
} from "../controllers/exchange.js";
import { requireAuth } from "../utils/auth.js";
import { asyncHandler } from "../utils/async-handler.js";

export const exchangeRouter = Router();

exchangeRouter.post("/onramp", requireAuth, asyncHandler(createOnRamp));
exchangeRouter.post("/order", requireAuth, asyncHandler(createOrder));
exchangeRouter.delete(
  "/order/:orderId",
  requireAuth,
  asyncHandler(cancelOrder),
);
exchangeRouter.get("/equity/available", requireAuth, asyncHandler(getEquity));
exchangeRouter.get(
  "/positions/open/:marketId",
  requireAuth,
  asyncHandler(getOpenPositions),
);
exchangeRouter.get(
  "/positions/closed/:marketId",
  requireAuth,
  asyncHandler(getClosedPositions),
);
exchangeRouter.get(
  "/orders/open/:marketId",
  requireAuth,
  asyncHandler(openOrders),
);
exchangeRouter.get("/orders/:orderId", requireAuth, asyncHandler(getOrder));
exchangeRouter.get("/fills", requireAuth, asyncHandler(getFills));
exchangeRouter.get("/depth/:marketId", requireAuth, asyncHandler(getDepth));
exchangeRouter.get(
  "/price/:marketId",
  requireAuth,
  asyncHandler(getMarkPrice),
);
