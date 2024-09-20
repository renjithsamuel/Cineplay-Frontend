import React from "react";
import {
  Box,
  IconButton,
  Typography,
  Divider,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";
import { useCalendar } from "./CalenderBox.hooks";
import { MdArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useCalendarStyles } from "./CalenderBox.styles";
import { MonthYearDropdown } from "../MonthYearDropDown/MonthYearDropDown";
import { themeValues } from "../../constants/ThemeConstants";
import clsx from "clsx";

export const Calendar = () => {
  const {
    currentMonthInt,
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
    currentWeek,
  } = useCalendar();

  const classes = useCalendarStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  const handleDropdownClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMonthChange = (newMonth: number) => {
    setMonthAndYear(newMonth, currentYear);
    handleClose();
  };

  const handleYearChange = (newYear: number) => {
    setMonthAndYear(currentMonthInt, newYear);
    handleClose();
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Box className={classes.calendarContainer}>
      <Box className={classes.header}>
        <Box display="flex" alignItems="center">
          <Box
            sx={{ fontSize: "15px" }}
          >{`${currentMonth} ${currentYear}`}</Box>
          <IconButton onClick={handleDropdownClick}>
            <IoMdArrowDropdown className={classes.icon} />
          </IconButton>
        </Box>

        <Box className={classes.arrowsBox}>
          <IconButton onClick={handlePrev} className={classes.arrowOutline}>
            <MdArrowBackIos className={clsx(classes.icon, classes.scaleDown)} />
          </IconButton>

          <IconButton onClick={handleNext} className={classes.arrowOutline}>
            <MdOutlineArrowForwardIos
              className={clsx(classes.icon, classes.scaleDown)}
            />
          </IconButton>
        </Box>

        {/* <IconButton onClick={toggleView}>
          {isMonthView ? (
            <IoMdArrowDropup className={classes.icon} />
          ) : (
            <IoMdArrowDropdown className={classes.icon} />
          )}
        </IconButton> */}
      </Box>

      <Divider
        sx={{
          marginY: themeValues.spacing(1),
          bgcolor: themeValues.color.color4,
          opacity: "50%",
        }}
      />

      <Box className={classes.daysOfWeek}>
        {daysOfWeek.map((day, index) => (
          <Box
            key={index}
            // variant="subtitle2"
            sx={{
              fontWeight: "600",
              color:
                index == daysOfWeek.length - 1 || index == 0
                  ? "#FC8812"
                  : "white",
            }}
          >
            {day}
          </Box>
        ))}
      </Box>

      <Box className={classes.datesGrid}>
        {Array.from({
          length: isMonthView || currentWeek == 0 ? firstDayOfMonth : 0,
        }).map((_, index) => (
          <Box key={index} />
        ))}

        {displayedDays.map((day, index) => (
          <IconButton
            key={index}
            className={`${classes.dateBox} ${
              selectedDate === day.date ? classes.selectedDate : ""
            }`}
            onClick={() => handleDateClick(day.date)}
          >
            {day.date}
          </IconButton>
        ))}
      </Box>

      {/* Dropdown for Month and Year Selection */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiList-root": {
            background: themeValues.gradient.cineplayBoxes, // Your desired background color
          },
        }}
      >
        <MonthYearDropdown
          currentMonthInt={currentMonthInt}
          currentYear={currentYear}
          months={months}
          years={years}
          onMonthChange={(newMonth) => {
            setMonthAndYear(newMonth, currentYear);
            // handleClose();
          }}
          onYearChange={(newYear) => {
            setMonthAndYear(currentMonthInt, newYear);
            // handleClose();
          }}
        />
      </Menu>
    </Box>
  );
};
