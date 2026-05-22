import { Router } from "express";
import { authRouter } from "./auth-route.ts";
import { exchangeRouter } from "./exchange-route.ts";

export const appRouter = Router();

appRouter.use(authRouter);
appRouter.use(exchangeRouter);
