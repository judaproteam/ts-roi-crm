/*
  Warnings:

  - You are about to drop the column `dis` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the column `grpId` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the column `mngr` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the column `ordr` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the column `prjId` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the column `ttl` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the `Parts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Qrs` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cmplt` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prblm` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prblmImg` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prblmVid` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qrId` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taskId` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `waitMngr` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Made the column `pic` on table `Tasks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `vid` on table `Tasks` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Qrs" DROP CONSTRAINT "Qrs_partId_fkey";

-- DropForeignKey
ALTER TABLE "Qrs" DROP CONSTRAINT "Qrs_taskId_fkey";

-- AlterTable
ALTER TABLE "Tasks" DROP COLUMN "dis",
DROP COLUMN "grpId",
DROP COLUMN "mngr",
DROP COLUMN "ordr",
DROP COLUMN "prjId",
DROP COLUMN "ttl",
ADD COLUMN     "cmplt" BOOLEAN NOT NULL,
ADD COLUMN     "prblm" TEXT NOT NULL,
ADD COLUMN     "prblmImg" TEXT NOT NULL,
ADD COLUMN     "prblmVid" TEXT NOT NULL,
ADD COLUMN     "qrId" INTEGER NOT NULL,
ADD COLUMN     "taskId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "waitMngr" BOOLEAN NOT NULL,
ALTER COLUMN "pic" SET NOT NULL,
ALTER COLUMN "pic" SET DATA TYPE TEXT,
ALTER COLUMN "vid" SET NOT NULL,
ALTER COLUMN "vid" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Parts";

-- DropTable
DROP TABLE "Qrs";

-- CreateTable
CREATE TABLE "Part" (
    "id" SERIAL NOT NULL,
    "nm" TEXT NOT NULL,
    "dis" TEXT NOT NULL,
    "qntt" INTEGER NOT NULL,
    "grpId" INTEGER,
    "prjId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Part_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GrpTask" (
    "id" SERIAL NOT NULL,
    "tasks" JSONB NOT NULL,
    "grpId" INTEGER,
    "prjId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GrpTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Qr" (
    "id" SERIAL NOT NULL,
    "qrNum" INTEGER NOT NULL,
    "partId" INTEGER,
    "loc" JSONB,
    "crntTask" INTEGER NOT NULL DEFAULT 0,
    "grpTaskId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Qr_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Part_nm_prjId_key" ON "Part"("nm", "prjId");

-- AddForeignKey
ALTER TABLE "Qr" ADD CONSTRAINT "Qr_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Qr" ADD CONSTRAINT "Qr_grpTaskId_fkey" FOREIGN KEY ("grpTaskId") REFERENCES "GrpTask"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_qrId_fkey" FOREIGN KEY ("qrId") REFERENCES "Qr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
