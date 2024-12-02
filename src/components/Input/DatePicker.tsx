import { useState } from "react";

import LeftArrow from "../../assets/icons/left-arrow.svg?react";
import RightArrow from "../../assets/icons/right-arrow.svg?react";

const DatePicker = () => {
  const today = new Date();
  const formatDate = (date: Date) =>
    `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [showCalendar, setShowCalendar] = useState<"start" | "end" | null>(
    null
  );
  const [calendarDate, setCalendarDate] = useState(today);
  const [dateDifference, setDateDifference] = useState(0);

  const handleDateClick = (target: "start" | "end") => {
    setShowCalendar((prev) => (prev === target ? null : target));
    setCalendarDate(target === "start" ? startDate : endDate);
  };

  const selectDate = (date: Date) => {
    if (showCalendar === "start") {
      const newEndDate = new Date(date);
      newEndDate.setDate(date.getDate() + dateDifference);

      setStartDate(date);
      setEndDate(newEndDate >= date ? newEndDate : date);
    } else if (showCalendar === "end") {
      setEndDate(date);
      setDateDifference(
        (date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      );
    }
  };

  const renderCalendar = (target: "start" | "end") => {
    const selectedDate = target === "start" ? startDate : endDate;
    const daysInMonth = new Date(
      calendarDate.getFullYear(),
      calendarDate.getMonth() + 1,
      0
    ).getDate();

    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
      <div className="bg-white p-4">
        <div className="flex justify-between mb-2 font-semibold">
          <div className="flex items-center gap-1">
            {`${calendarDate.getFullYear()}년 ${calendarDate.getMonth() + 1}월`}
          </div>
          <div className="flex gap-4">
            <button
              className="text-sub disabled:text-gray-light"
              onClick={() => changeMonth(-1)}
              disabled={
                calendarDate.getFullYear() === today.getFullYear() &&
                calendarDate.getMonth() === today.getMonth()
              }
            >
              <LeftArrow />
            </button>
            <button className="text-sub" onClick={() => changeMonth(1)}>
              <RightArrow />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 px-4 py-1.5 text-center">
          {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
            <div
              key={day}
              className="w-10 h-10 p-2 flex items-center justify-center text-gray-dark"
            >
              {day}
            </div>
          ))}
          {daysArray.map((day) => {
            const date = new Date(
              calendarDate.getFullYear(),
              calendarDate.getMonth(),
              day
            );
            const isTodayOrAfter =
              date >= today ||
              (date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear());

            const isToday =
              date.getDate() === today.getDate() &&
              date.getMonth() === today.getMonth() &&
              date.getFullYear() === today.getFullYear();

            return (
              <button
                key={day}
                onClick={() => selectDate(date)}
                disabled={!isTodayOrAfter}
                className={`w-10 h-10 p-2 flex items-center justify-center ${
                  date.getTime() === selectedDate.getTime()
                    ? "bg-sub bg-opacity-30 text-primary font-bold rounded-full"
                    : isToday
                      ? "text-sub font-semibold"
                      : isTodayOrAfter
                        ? ""
                        : "text-gray-light cursor-not-allowed"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const changeMonth = (offset: number) => {
    const newDate = new Date(calendarDate);
    newDate.setMonth(calendarDate.getMonth() + offset);
    setCalendarDate(newDate);
  };

  return (
    <div className="px-1.5">
      <label className="block font-semibold mb-2">일정</label>
      <div className="bg-background rounded-md">
        <div
          className="flex items-center justify-between px-4 py-2"
          onClick={() => handleDateClick("start")}
        >
          <div>시작</div>
          <div className="bg-white text-black-60 rounded-sm px-3 py-1 cursor-pointer">
            {formatDate(startDate)}
          </div>
        </div>
        {showCalendar === "start" && <div>{renderCalendar("start")}</div>}

        <div className="border-t-1.25 border-white"></div>

        <div
          className="flex items-center justify-between px-4 py-2"
          onClick={() => handleDateClick("end")}
        >
          <div>종료</div>
          <div className="bg-white text-black-60 rounded-sm px-3 py-1 cursor-pointer">
            {formatDate(endDate)}
          </div>
        </div>
        {showCalendar === "end" && <div>{renderCalendar("end")}</div>}
      </div>
    </div>
  );
};

export default DatePicker;
