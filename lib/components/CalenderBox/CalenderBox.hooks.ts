import { useState } from "react";
import dayjs from "dayjs";

interface CalendarDay {
  date: number;
  isToday: boolean;
}

export const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const currentMonth = currentDate.format("MMMM");
  const currentYear = currentDate.format("YYYY");
  
  const firstDayOfMonth = currentDate.startOf("month").day();
  const daysInMonth = Array.from({ length: currentDate.daysInMonth() }, (_, i) => ({
    date: i + 1,
    isToday: currentDate.date() === i + 1,
  }));

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  return {
    currentMonth,
    currentYear,
    daysInMonth,
    firstDayOfMonth,
    handlePrevMonth,
    handleNextMonth,
  };
};
