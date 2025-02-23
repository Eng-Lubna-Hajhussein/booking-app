import React from "react";
import { Dayjs } from "dayjs";
import { generateDate } from "@/util/calendar";
import cn from "@/util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { arabicMonths, days } from "@/constants/constants";

interface CalendarProps {
  setToday: React.Dispatch<React.SetStateAction<Dayjs>>;
  today: Dayjs;
  selectedDate: Dayjs;
  handleDateChange: (date: Dayjs) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  setToday,
  today,
  selectedDate,
  handleDateChange,
}) => {
  return (
    <div className="p-4 px-8 bg-lightGray rounded-xl">
      <h1 className="text-black text-md font-bold block text-right rtl mt-2">
        الأيام المتاحة
      </h1>
      <h4 className="text-black text-md block text-right rtl mt-2 mb-8">
        مدة الجلسة 60 دقيقة محددة سابقاً من قبل المستشار{" "}
      </h4>
      <div className="flex sm:divide-x justify-center mx-auto items-center sm:flex-row flex-col gap-4">
        <div className="w-100 h-150">
          <div className="flex justify-between items-center">
            <GrFormPrevious
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => setToday(today.subtract(1, "month"))}
            />
            <h1 className="select-none font-semibold">
              {arabicMonths[today.month()]} {today.year()}
            </h1>
            <GrFormNext
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => setToday(today.add(1, "month"))}
            />
          </div>
          <div className="grid grid-cols-7">
            {days.map((day) => (
              <h1
                key={day}
                className="text-xxs md:text-sm text-center w-18 h-14 md:w-14 grid place-content-center text-gray-500 select-none"
              >
                {day}
              </h1>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth }, index) => (
                <div
                  key={index}
                  className="p-2 text-center h-14 grid place-content-center text-sm"
                >
                  <h1
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      selectedDate.isSame(date, "day")
                        ? "bg-lightBlue text-white hover:bg-lightBlue"
                        : "hover:bg-white",
                      "h:14 w-8 md:h-12 md:w-14 rounded-md grid place-content-center transition-all cursor-pointer select-none"
                    )}
                    onClick={() => handleDateChange(date)}
                  >
                    {date.date()}
                  </h1>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
