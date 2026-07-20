/*
  Warnings:

  - The `status` column on the `Application` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `recommendation` to the `AIScore` table without a default value. This is not possible if the table is not empty.
  - Added the required column `strengths` to the `AIScore` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weaknesses` to the `AIScore` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('PENDING', 'AI_PROCESSING', 'INTERVIEW_SCHEDULED', 'INTERVIEW_COMPLETED', 'REJECTED', 'HIRED');

-- AlterTable
ALTER TABLE "AIScore" ADD COLUMN     "recommendation" TEXT NOT NULL,
ADD COLUMN     "strengths" JSONB NOT NULL,
ADD COLUMN     "weaknesses" JSONB NOT NULL,
ALTER COLUMN "interviewScore" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Application" DROP COLUMN "status",
ADD COLUMN     "status" "ApplicationStatus" NOT NULL DEFAULT 'PENDING';
