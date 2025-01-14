import { useEffect, useState } from "react";
import { MonthsArray } from "../../constants/Months";
import { useGameContext } from "../../context/GameContext";
import dayjs from "dayjs";
import { QueryKeys } from "../../constants/Querykeys";
import { useQueryClient } from "react-query";

interface Day {
  date: number;
  isToday: boolean;
  fullDate: Date;
}

interface UseCalendarHook {
  currentMonthInt: number;
  currentWeek: number;
  currentMonth: string;
  currentYear: number;
  daysInMonth: Day[];
  firstDayOfMonth: number;
  displayedDays: Day[];
  handlePrev: () => void;
  handleNext: () => void;
  setMonthAndYear: (newMonth: number, newYear: number) => void;
  toggleView: () => void;
  isMonthView: boolean;
  selectedDate: number | null;
  handleDateClick: (date: number) => void;
  years: number[];
}

export const useCalendar = (): UseCalendarHook => {
  const queryClient = useQueryClient();
  const {movieId, setMovieId, game} = useGameContext();
  

  let date = dayjs(movieId).toDate(); 
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [isMonthView, setIsMonthView] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [currentWeek, setCurrentWeek] = useState(0);

  const daysInMonth = getDaysInMonth(month, year);
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const handlePrev = () => {
    if (isMonthView) {
      if (month === 0) {
        setMonth(11);
        setYear(year - 1);
      } else {
        setMonth(month - 1);
      }
    } else {
      setCurrentWeek((prev) => Math.max(0, prev - 1));
    }
  };

  const handleNext = () => {
    if (isMonthView) {
      if (month === 11) {
        setMonth(0);
        setYear(year + 1);
      } else {
        setMonth(month + 1);
      }
    } else {
      const maxWeeks = Math.ceil((daysInMonth.length + firstDayOfMonth) / 7);
      setCurrentWeek((prev) => Math.min(maxWeeks - 1, prev + 1));
    }
  };

  const setMonthAndYear = (newMonth: number, newYear: number) => {
    setMonth(newMonth);
    setYear(newYear);
    setCurrentWeek(0); // Reset week to first week of the month
  };

  const toggleView = () => {
    setIsMonthView((prev) => !prev);
    setCurrentWeek(0); // Reset week index when toggling view
  };

  const handleDateClick = (date: number) => {
    if(!!date) {
      setMovieId(dayjs(new Date(year, month, date)).format("YYYY-MM-DD"));
      queryClient.invalidateQueries(QueryKeys.GET_GAME);
      console.log("calendar : movieId", movieId);
      console.log("calendar: game: ", game);
      setSelectedDate(date);
    }
  };

  const currentMonth = getMonthName(month);
  const currentYear = year;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getStartOfWeek = (weekIndex: number): number => {
    const startOfWeek = weekIndex * 7 - firstDayOfMonth;
    return startOfWeek >= 0 ? startOfWeek : 0;
  };

  const getEndOfWeek = (startOfWeek: number): number => {
    const startDate = daysInMonth[startOfWeek].fullDate;
    const dayOfWeek = startDate.getDay();
    const daysUntilSaturday = 6 - dayOfWeek;
    const endOfWeek = startOfWeek + daysUntilSaturday;
    const endOfMonth = daysInMonth.length - 1; // Last index in the days array

    return endOfWeek > endOfMonth ? endOfMonth : endOfWeek;
  };

  const displayedDays = isMonthView
    ? daysInMonth
    : daysInMonth.slice(
        getStartOfWeek(currentWeek),
        getEndOfWeek(getStartOfWeek(currentWeek)) + 1, // End index is exclusive, so add 1
      );

  const years = Array.from({ length: 50 }, (_, i) => currentYear - 25 + i);

  return {
    currentMonthInt: month,
    currentWeek,
    currentMonth,
    currentYear,
    daysInMonth,
    firstDayOfMonth,
    displayedDays,
    handlePrev,
    handleNext,
    setMonthAndYear,
    toggleView,
    isMonthView,
    selectedDate,
    handleDateClick,
    years,
  };
};

const getDaysInMonth = (month: number, year: number): Day[] => {
  return Array.from(
    { length: new Date(year, month + 1, 0).getDate() },
    (_, i) => {
      const fullDate = new Date(year, month, i + 1);
      return {
        date: i + 1,
        isToday:
          i + 1 === new Date().getDate() &&
          month === new Date().getMonth() &&
          year === new Date().getFullYear(),
        fullDate: fullDate, // Set the full date
      };
    },
  );
};

const getMonthName = (month: number) => {
  return MonthsArray[month];
};
