import React from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ar";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { TIME_SLOT_TEXTS } from "@/constants/constants";

dayjs.extend(advancedFormat);
dayjs.locale("ar");

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Dayjs;
  selectedTimeSlot: string;
  handleBookSession: (timeSlot: string) => Promise<void>;
  bookingMessage: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  selectedDate,
  selectedTimeSlot,
  handleBookSession,
  bookingMessage,
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
            {bookingMessage ? (
              <h2 className="text-green-500 text-xl font-bold text-center">
                {bookingMessage}
              </h2>
            ) : (
              <>
                <h2 className="text-xl font-bold text-center">
                  جلستك ستكون يوم {selectedDate.format("dddd, D MMMM YYYY")}
                </h2>
                <h3 className="text-lg text-center">
                  {TIME_SLOT_TEXTS[selectedTimeSlot] || selectedTimeSlot}
                </h3>
              </>
            )}
            <div className="mt-6 flex justify-between">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={onClose}
              >
                {bookingMessage ? "اغلاق" : "الغاء"}
              </button>
              {!bookingMessage && (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  onClick={() => handleBookSession(selectedTimeSlot)}
                >
                  تأكيد
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmModal;
