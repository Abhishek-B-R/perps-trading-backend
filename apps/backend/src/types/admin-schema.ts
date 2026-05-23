import { z } from "zod";

export const createMarketSchema = z.object({
  symbol: z.string().trim().min(1, "symbol is required"),
  imageUrl: z.string(),
});
