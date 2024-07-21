/*
  Warnings:

  - Added the required column `grpTaskId` to the `Part` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Part" ADD COLUMN     "grpTaskId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Part" ADD CONSTRAINT "Part_grpTaskId_fkey" FOREIGN KEY ("grpTaskId") REFERENCES "GrpTask"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
