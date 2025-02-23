import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/server/db/prisma";

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { date } = req.body;
    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);

    const bookedBookings = await prisma.booking.findMany({
      where: {
        date: selectedDate,
      },
      select: {
        timeSlot: true,
      },
    });

    const bookedTimeSlots = bookedBookings.map((booking) => booking.timeSlot);

    const availableSlots = TIME_SLOTS.filter(
      (slot) => !bookedTimeSlots.includes(slot)
    );

    return res.status(200).json(availableSlots);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
