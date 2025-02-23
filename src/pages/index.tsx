import dayjs, { Dayjs } from "dayjs";
import React, { useState, useEffect } from "react";
import ConfirmModal from "@/components/booking/ConfirmModal";
import Calendar from "@/components/booking/Calendar";
import AvailableTimes from "@/components/booking/AvailableTimes";
import ConsultantProfile from "@/components/booking/ConsultantProfile";
import { TIME_SLOTS } from "@/constants/constants";
import Navbar from "@/components/ui/Navbar";

const Home: React.FC = () => {
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [bookingMessage, setBookingMessage] = useState<string>("");
  const currentDate: Dayjs = dayjs();
  const [today, setToday] = useState<Dayjs>(currentDate);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(currentDate);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (availableSlots?.length) {
      setSelectedTimeSlot(availableSlots[0]);
    } else {
      setSelectedTimeSlot("");
    }
  }, [availableSlots]);

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      const formattedDate = today.format("YYYY-MM-DD");
      const response = await fetch("/api/sessions/getAvailable", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date: formattedDate }),
      });

      if (response.ok) {
        const slots = await response.json();
        setAvailableSlots(slots);
      } else {
        setAvailableSlots(TIME_SLOTS);
      }
    };

    fetchAvailableSlots();
  }, [today]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setBookingMessage("");
  };

  const handleDateChange = async (date: Dayjs) => {
    const formattedDate = date.format("YYYY-MM-DD");
    setSelectedDate(date);

    const response = await fetch("/api/sessions/getAvailable", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date: formattedDate }),
    });

    if (response.ok) {
      const slots = await response.json();
      setAvailableSlots(slots);
    } else {
      setAvailableSlots(TIME_SLOTS);
    }
  };

  const handleBookSession = async (timeSlot: string) => {
    const response = await fetch("/api/sessions/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date: selectedDate, timeSlot }),
    });

    if (response.ok) {
      setBookingMessage("تم حجز الجلسة بنجاح");
      setAvailableSlots(availableSlots.filter((slot) => slot !== timeSlot));
    } else {
      const errorData = await response.json();
      setBookingMessage(errorData.error);
    }
  };

  return (
    <div className="container mx-auto p-8 px-18">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full items-start">
        <div className="md:col-span-5 ">
          <Calendar
            setToday={setToday}
            today={today}
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
          />
          <AvailableTimes
            availableSlots={availableSlots}
            selectedTimeSlot={selectedTimeSlot}
            setSelectedTimeSlot={setSelectedTimeSlot}
            handleOpenModal={handleOpenModal}
          />
        </div>
        <ConsultantProfile />
        <ConfirmModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          selectedDate={selectedDate}
          selectedTimeSlot={selectedTimeSlot}
          handleBookSession={handleBookSession}
          bookingMessage={bookingMessage}
        />
      </div>
    </div>
  );
};

export default Home;
