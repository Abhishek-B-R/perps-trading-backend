import { Router } from "express";
import { createMarket } from "../controllers/admin";
import { asyncHandler } from "../utils/async-handler";

export const adminRouter = Router();

adminRouter.post("/admin/market", asyncHandler(createMarket));
