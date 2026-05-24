/*
  Warnings:

  - A unique constraint covering the columns `[marketSlug]` on the table `Markets` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `equity` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Fills" ALTER COLUMN "price" SET DATA TYPE TEXT,
ALTER COLUMN "qty" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "equity" TEXT NOT NULL,
ALTER COLUMN "price" SET DATA TYPE TEXT,
ALTER COLUMN "qty" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Markets_marketSlug_key" ON "Markets"("marketSlug");
