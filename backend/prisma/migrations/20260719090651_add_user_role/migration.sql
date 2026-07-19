-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('MANAGER', 'CANDIDATE');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'CANDIDATE';
