import cors from "cors";
import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import { appRouter } from "./src/routes/index.js";
import { env } from "./src/utils/env.js";
import {
  connectRedis,
  listenForEngineResponse,
  pingRedis,
} from "./src/utils/redis-client.js";

await connectRedis();
void listenForEngineResponse();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", async (req, res) => {
  await pingRedis();
  res.json({
    ok: "true",
  });
});

app.use(appRouter);

app.listen(env.port, () => {
  console.log("Backend running on post " + env.port);
});
