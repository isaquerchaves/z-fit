-- CreateTable
CREATE TABLE "Muscle" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "imageUrl" TEXT[],

    CONSTRAINT "Muscle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "difficulty" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "image" TEXT[],
    "slug" TEXT NOT NULL,
    "muscle_id" TEXT NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_muscle_id_fkey" FOREIGN KEY ("muscle_id") REFERENCES "Muscle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
