/*
  Warnings:

  - You are about to drop the column `passcode` on the `User` table. All the data in the column will be lost.
  - Added the required column `companyId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "passcode",
ADD COLUMN     "companyId" INTEGER NOT NULL,
ADD COLUMN     "otp" TEXT,
ALTER COLUMN "email" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
