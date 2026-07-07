import { Router } from "express";
import { authRouter } from "./auth-route.ts";
import { exchangeRouter } from "./exchange-route.ts";
import { adminRouter } from "./admin-route.ts";
import { marketsRouter } from "./markets-route.ts";

export const appRouter = Router();

appRouter.use(authRouter);
appRouter.use(exchangeRouter);
appRouter.use(marketsRouter);
appRouter.use(adminRouter);
