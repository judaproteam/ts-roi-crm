/*
  Warnings:

  - You are about to drop the column `tasks` on the `GrpTask` table. All the data in the column will be lost.
  - You are about to drop the `Tasks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tasks" DROP CONSTRAINT "Tasks_qrId_fkey";

-- AlterTable
ALTER TABLE "GrpTask" DROP COLUMN "tasks";

-- DropTable
DROP TABLE "Tasks";

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "dis" TEXT NOT NULL,
    "ordr" INTEGER NOT NULL,
    "pic" BOOLEAN,
    "vid" BOOLEAN,
    "mngr" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "grpTaskId" INTEGER,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QrTask" (
    "id" SERIAL NOT NULL,
    "qrId" INTEGER NOT NULL,
    "taskId" INTEGER NOT NULL,
    "pic" TEXT,
    "vid" TEXT,
    "waitMngr" BOOLEAN,
    "prblm" TEXT,
    "prblmImg" TEXT,
    "prblmVid" TEXT,
    "cmplt" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QrTask_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "QrTask_taskId_key" ON "QrTask"("taskId");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_grpTaskId_fkey" FOREIGN KEY ("grpTaskId") REFERENCES "GrpTask"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QrTask" ADD CONSTRAINT "QrTask_qrId_fkey" FOREIGN KEY ("qrId") REFERENCES "Qr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
