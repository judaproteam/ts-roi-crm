/*
  Warnings:

  - You are about to drop the column `ordr` on the `MainTask` table. All the data in the column will be lost.
  - You are about to drop the column `nm` on the `Part` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name,prjId]` on the table `Part` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `order` to the `MainTask` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Part` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Part_nm_prjId_key";

-- AlterTable
ALTER TABLE "MainTask" DROP COLUMN "ordr",
ADD COLUMN     "order" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Part" DROP COLUMN "nm",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "mngrApproved" SET DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "Part_name_prjId_key" ON "Part"("name", "prjId");
