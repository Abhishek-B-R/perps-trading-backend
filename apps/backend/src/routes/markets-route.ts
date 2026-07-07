import { Router } from "express";
import { getCandles, getDepthBySymbol, getMarkPriceBySymbol, getTicker, listMarkets } from "../controllers/markets.js";
import { asyncHandler } from "../utils/async-handler.js";

export const marketsRouter = Router();

marketsRouter.get("/markets", asyncHandler(listMarkets));
marketsRouter.get("/markets/:symbol/candles", asyncHandler(getCandles));
marketsRouter.get("/markets/:symbol/ticker", asyncHandler(getTicker));
marketsRouter.get("/markets/:symbol/depth", asyncHandler(getDepthBySymbol));
marketsRouter.get("/markets/:symbol/price", asyncHandler(getMarkPriceBySymbol));
