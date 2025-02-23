import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/server/db/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { date, timeSlot } = req.body;
    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);

    const existingBooking = await prisma.booking.findFirst({
      where: {
        date: selectedDate,
        timeSlot,
      },
    });

    if (existingBooking) {
      return res.status(400).json({ error: "Session already booked" });
    }

    const booking = await prisma.booking.create({
      data: {
        date: selectedDate,
        timeSlot,
      },
    });

    return res.status(200).json(booking);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
