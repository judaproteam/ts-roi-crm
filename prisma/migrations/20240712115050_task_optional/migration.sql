-- DropForeignKey
ALTER TABLE "Part" DROP CONSTRAINT "Part_grpTaskId_fkey";

-- AlterTable
ALTER TABLE "Part" ALTER COLUMN "grpTaskId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Part" ADD CONSTRAINT "Part_grpTaskId_fkey" FOREIGN KEY ("grpTaskId") REFERENCES "GrpTask"("id") ON DELETE SET NULL ON UPDATE CASCADE;
