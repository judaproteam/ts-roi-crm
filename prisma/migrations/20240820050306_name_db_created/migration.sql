-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" TEXT GENERATED ALWAYS AS ("firstName" || ' ' || "lastName") STORED;
