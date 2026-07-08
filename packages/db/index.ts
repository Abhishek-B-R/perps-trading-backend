import { env } from "env";
import { PrismaClient } from "./prisma/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: env.databaseUrl,
});

export const prisma = new PrismaClient({
  adapter,
});

export * from "./prisma/generated/client";
