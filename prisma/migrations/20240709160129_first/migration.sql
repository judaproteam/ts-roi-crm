-- CreateTable
CREATE TABLE "Parts" (
    "id" SERIAL NOT NULL,
    "nm" TEXT NOT NULL,
    "dis" TEXT NOT NULL,
    "qntt" INTEGER NOT NULL,
    "grpId" INTEGER,
    "prjId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Parts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tasks" (
    "id" SERIAL NOT NULL,
    "ttl" TEXT NOT NULL,
    "dis" TEXT NOT NULL,
    "pic" BOOLEAN,
    "vid" BOOLEAN,
    "mngr" BOOLEAN,
    "ordr" INTEGER NOT NULL,
    "grpId" INTEGER,
    "prjId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);
