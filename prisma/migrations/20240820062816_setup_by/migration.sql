/*
  Warnings:

  - You are about to drop the column `setupUser` on the `Qr` table. All the data in the column will be lost.
  - Added the required column `setupBy` to the `Qr` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Qr" DROP COLUMN "setupUser",
ADD COLUMN     "setupBy" INTEGER NOT NULL;
