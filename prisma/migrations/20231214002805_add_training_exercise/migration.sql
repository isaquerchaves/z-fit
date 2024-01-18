/*
  Warnings:

  - You are about to drop the column `exerciseId` on the `Training` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Training" DROP CONSTRAINT "Training_exerciseId_fkey";

-- AlterTable
ALTER TABLE "Training" DROP COLUMN "exerciseId";

-- CreateTable
CREATE TABLE "TrainingExercise" (
    "id" TEXT NOT NULL,
    "trainingId" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,

    CONSTRAINT "TrainingExercise_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TrainingExercise" ADD CONSTRAINT "TrainingExercise_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Training"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingExercise" ADD CONSTRAINT "TrainingExercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
