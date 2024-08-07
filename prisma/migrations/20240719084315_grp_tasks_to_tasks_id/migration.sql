/*
  Warnings:

  - You are about to drop the column `grpTaskId` on the `MainTask` table. All the data in the column will be lost.
  - You are about to drop the column `grpTask` on the `Part` table. All the data in the column will be lost.
  - Added the required column `tasksId` to the `MainTask` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MainTask" DROP COLUMN "grpTaskId",
ADD COLUMN     "tasksId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Part" DROP COLUMN "grpTask",
ADD COLUMN     "tasksId" INTEGER;
