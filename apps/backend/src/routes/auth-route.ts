import { Router } from "express";
import { signin, signup } from "../controllers/auth.ts";
import { asyncHandler } from "../utils/async-handler.ts";

export const authRouter = Router();

authRouter.post("/signup", asyncHandler(signup));
authRouter.post("/signin", asyncHandler(signin));
