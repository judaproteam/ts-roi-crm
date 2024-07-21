/*
  Warnings:

  - You are about to drop the column `grpId` on the `Part` table. All the data in the column will be lost.
  - You are about to drop the column `grpTaskId` on the `Part` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Qr` table. All the data in the column will be lost.
  - You are about to drop the column `crntTask` on the `Qr` table. All the data in the column will be lost.
  - You are about to drop the column `grpTaskId` on the `Qr` table. All the data in the column will be lost.
  - You are about to drop the column `loc` on the `Qr` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Qr` table. All the data in the column will be lost.
  - You are about to drop the column `dis` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `grpTaskId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `mngr` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `ordr` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the `GrpTask` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `QrTask` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `partId` on table `Qr` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `mainTaskId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Part" DROP CONSTRAINT "Part_grpTaskId_fkey";

-- DropForeignKey
ALTER TABLE "Qr" DROP CONSTRAINT "Qr_grpTaskId_fkey";

-- DropForeignKey
ALTER TABLE "Qr" DROP CONSTRAINT "Qr_partId_fkey";

-- DropForeignKey
ALTER TABLE "QrTask" DROP CONSTRAINT "QrTask_qrId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_grpTaskId_fkey";

-- AlterTable
ALTER TABLE "Part" DROP COLUMN "grpId",
DROP COLUMN "grpTaskId",
ADD COLUMN     "grpTask" INTEGER;

-- AlterTable
ALTER TABLE "Qr" DROP COLUMN "createdAt",
DROP COLUMN "crntTask",
DROP COLUMN "grpTaskId",
DROP COLUMN "loc",
DROP COLUMN "updatedAt",
ALTER COLUMN "partId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "dis",
DROP COLUMN "grpTaskId",
DROP COLUMN "mngr",
DROP COLUMN "ordr",
DROP COLUMN "title",
ADD COLUMN     "mainTaskId" INTEGER NOT NULL,
ADD COLUMN     "mngrApproved" BOOLEAN,
ADD COLUMN     "qrId" INTEGER,
ALTER COLUMN "pic" SET DATA TYPE TEXT,
ALTER COLUMN "vid" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "GrpTask";

-- DropTable
DROP TABLE "QrTask";

-- CreateTable
CREATE TABLE "MainTask" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "dis" TEXT NOT NULL,
    "grpTask" INTEGER NOT NULL,
    "ordr" INTEGER,
    "pic" BOOLEAN,
    "vid" BOOLEAN,
    "mngr" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MainTask_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_mainTaskId_fkey" FOREIGN KEY ("mainTaskId") REFERENCES "MainTask"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_qrId_fkey" FOREIGN KEY ("qrId") REFERENCES "Qr"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Qr" ADD CONSTRAINT "Qr_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
