/*
  Warnings:

  - A unique constraint covering the columns `[qrNum,prjId]` on the table `Qr` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `aptNum` to the `Qr` table without a default value. This is not possible if the table is not empty.
  - Added the required column `floor` to the `Qr` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locInApt` to the `Qr` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prjId` to the `Qr` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Qr` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Qr" ADD COLUMN     "aptNum" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "crntTask" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "floor" INTEGER NOT NULL,
ADD COLUMN     "locInApt" TEXT NOT NULL,
ADD COLUMN     "prjId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE INDEX "Qr_qrNum_prjId_idx" ON "Qr"("qrNum", "prjId");

-- CreateIndex
CREATE UNIQUE INDEX "Qr_qrNum_prjId_key" ON "Qr"("qrNum", "prjId");
