import React from "react";

interface AvailableTimesProps {
  availableSlots: string[];
  selectedTimeSlot: string;
  setSelectedTimeSlot: (slot: string) => void;
  handleOpenModal: () => void;
}

const AvailableTimes: React.FC<AvailableTimesProps> = ({
  availableSlots,
  selectedTimeSlot,
  setSelectedTimeSlot,
  handleOpenModal,
}) => {
  return (
    <div className="p-4 my-7 bg-lightGray rounded-xl">
      <div className="mb-1">
        <h1 className="text-black text-md font-bold block text-right rtl mt-1 mx-8">
          الأوقات المتاحة
        </h1>
        <h4 className="text-black text-md block text-right rtl m-2 mx-8 mb-8">
          سيتم الحجز بتوقيت بلدك الحالي
        </h4>
        {availableSlots.length === 0 ? (
          <h4 className="text-red-500 text-md block text-right rtl m-2 mx-8 mb-8">
            لا يوجد اوقات متاحة
          </h4>
        ) : (
          <div className="grid grid-cols-3 gap-4 px-4  text-right" dir="rtl">
            {availableSlots.map((slot) => (
              <div
                className={`bg-white rounded-lg p-3 text-center cursor-pointer ${
                  selectedTimeSlot === slot
                    ? "border-darkBlue border-2"
                    : "border border-medGray"
                }`}
                dir="ltr"
                onClick={() => setSelectedTimeSlot(slot)}
                key={slot}
              >
                {slot}
              </div>
            ))}
          </div>
        )}
        <div className="w-full mt-8 px-4">
          <button
            disabled={availableSlots.length === 0}
            className="w-full bg-darkBlue text-white py-2 rounded-md"
            onClick={handleOpenModal}
          >
            حجز جلسة
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailableTimes;
