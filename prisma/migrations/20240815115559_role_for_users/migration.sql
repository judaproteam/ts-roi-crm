/*
  Warnings:

  - You are about to drop the column `userId` on the `Qr` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `pic` on the `User` table. All the data in the column will be lost.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `setupUser` to the `Qr` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('INSTALLER', 'PRJ_MNGR', 'ADMIN');

-- DropForeignKey
ALTER TABLE "Qr" DROP CONSTRAINT "Qr_userId_fkey";

-- AlterTable
ALTER TABLE "Qr" DROP COLUMN "userId",
ADD COLUMN     "setupUser" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
DROP COLUMN "pic",
ADD COLUMN     "gglName" TEXT,
ADD COLUMN     "gglSub" TEXT,
ADD COLUMN     "passcode" TEXT,
ADD COLUMN     "picture" TEXT,
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'INSTALLER',
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
