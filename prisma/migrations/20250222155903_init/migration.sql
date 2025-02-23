/*
  Warnings:

  - You are about to drop the column `sessionId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[date,timeSlot]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `date` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeSlot` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_sessionId_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "sessionId",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "timeSlot" TEXT NOT NULL;

-- DropTable
DROP TABLE "Session";

-- CreateIndex
CREATE UNIQUE INDEX "Booking_date_timeSlot_key" ON "Booking"("date", "timeSlot");
