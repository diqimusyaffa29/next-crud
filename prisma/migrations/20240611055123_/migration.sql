-- CreateTable
CREATE TABLE "Athlete" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "cabor" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "ktp" TEXT NOT NULL,
    "kta" TEXT NOT NULL,
    "ttl" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "achievement" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Athlete_pkey" PRIMARY KEY ("id")
);
