/*
  Warnings:

  - You are about to drop the column `grpTask` on the `MainTask` table. All the data in the column will be lost.
  - Added the required column `grpTaskId` to the `MainTask` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prjId` to the `MainTask` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MainTask" DROP COLUMN "grpTask",
ADD COLUMN     "grpTaskId" INTEGER NOT NULL,
ADD COLUMN     "prjId" INTEGER NOT NULL;
