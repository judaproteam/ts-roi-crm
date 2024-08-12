/*
  Warnings:

  - You are about to drop the column `dis` on the `MainTask` table. All the data in the column will be lost.
  - You are about to drop the column `dis` on the `Part` table. All the data in the column will be lost.
  - Added the required column `desc` to the `MainTask` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc` to the `Part` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MainTask" DROP COLUMN "dis",
ADD COLUMN     "desc" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Part" DROP COLUMN "dis",
ADD COLUMN     "desc" TEXT NOT NULL;
