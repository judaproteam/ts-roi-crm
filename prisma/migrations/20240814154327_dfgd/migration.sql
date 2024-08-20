/*
  Warnings:

  - Made the column `userId` on table `Qr` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Qr" DROP CONSTRAINT "Qr_userId_fkey";

-- AlterTable
ALTER TABLE "Qr" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Qr" ADD CONSTRAINT "Qr_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
