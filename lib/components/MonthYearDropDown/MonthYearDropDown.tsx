import React from "react";
import { Box, Select, MenuItem } from "@mui/material";
import { themeValues } from "../../constants/ThemeConstants";

interface MonthYearDropdownProps {
  currentMonthInt: number;
  currentYear: number;
  months: string[];
  years: number[];
  onMonthChange: (newMonth: number) => void;
  onYearChange: (newYear: number) => void;
}

export const MonthYearDropdown: React.FC<MonthYearDropdownProps> = ({
  currentMonthInt,
  currentYear,
  months,
  years,
  onMonthChange,
  onYearChange,
}) => {
  return (
    <Box display="flex" gap={1} paddingX={1}>
      {/* Month Dropdown */}
      <Select
        value={currentMonthInt}
        onChange={(e) => onMonthChange(e.target.value as number)}
        displayEmpty
        variant="outlined"
        sx={{
          color: "white",
          opacity: "70%",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Border color
            opacity: "70%",
          },
          ".MuiSvgIcon-root": {
            color: "white", // Dropdown icon color
            opacity: "70%",
          },
        }}
      >
        {months.map((month, index) => (
          <MenuItem key={index} value={index}>
            {month}
          </MenuItem>
        ))}
      </Select>

      {/* Year Dropdown */}
      <Select
        value={currentYear}
        onChange={(e) => onYearChange(e.target.value as number)}
        displayEmpty
        variant="outlined"
        sx={{
          color: "white",
          opacity: "70%",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Border color
            opacity: "70%",
          },
          ".MuiSvgIcon-root": {
            color: "white", // Dropdown icon color
            opacity: "70%",
          },
        }}
      >
        {years.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};
