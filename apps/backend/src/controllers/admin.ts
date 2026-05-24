import { prisma } from "db";
import { createMarketSchema } from "../types/admin-schema";
import { sendValidationError } from "../utils/validation";
import type { Request, Response } from "express";
import { env } from "env";

export async function createMarket(req: Request, res: Response) {
  const token = req.headers.token;
  if (token !== env.adminSecret) {
    res.status(403).json({});
    return;
  }

  const parsedBody = createMarketSchema.safeParse(req.body);
  console.log(parsedBody);
  if (!parsedBody.success) {
    sendValidationError(res, parsedBody.error);
    return;
  }

  const { symbol, imageUrl } = parsedBody.data;
  if (!symbol) {
    throw new Error("symbol is required");
  }

  try {
    const x = await prisma.markets.findFirst({
      where: {
        marketSlug: symbol,
      },
    });

    if (x?.id) {
      throw new Error("this market already exists");
    }
    const data = await prisma.markets.create({
      data: {
        imageUrl,
        marketSlug: symbol,
      },
    });

    res.status(201).json({
      id: data.id,
      message: "market created",
    });
  } catch (e) {
    throw new Error("couldn't add market");
  }
}
