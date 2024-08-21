import React from "react";
import { Box, IconButton, Typography, Divider } from "@mui/material";
import { useCalendar } from "./CalenderBox.hooks";
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export const Calendar = () => {
  const {
    currentMonth,
    currentYear,
    daysInMonth,
    firstDayOfMonth,
    handlePrevMonth,
    handleNextMonth,
  } = useCalendar();

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <Box sx={{ padding: "16px", width: "300px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Month and Year Selector */}
        <Typography variant="h6">{`${currentMonth} ${currentYear}`}</Typography>

        {/* Navigation Buttons */}
        <Box>
          <IconButton onClick={handlePrevMonth}>
            <MdArrowBackIos />
          </IconButton>
          <IconButton onClick={handleNextMonth}>
            <MdOutlineArrowForwardIos />
          </IconButton>
        </Box>
      </Box>

      <Divider sx={{ marginY: "8px" }} />

      {/* Days of Week */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {daysOfWeek.map((day) => (
          <Typography key={day} variant="body2">
            {day}
          </Typography>
        ))}
      </Box>

      {/* Dates Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "4px",
          marginTop: "8px",
        }}
      >
        {/* Empty slots for days before the first of the month */}
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <Box key={index} />
        ))}

        {/* Days in the current month */}
        {daysInMonth.map((day, index) => (
          <Box
            key={index}
            sx={{
              padding: "8px",
              textAlign: "center",
              borderRadius: "4px",
              backgroundColor: day.isToday ? "lightblue" : "transparent",
            }}
          >
            {day.date}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
