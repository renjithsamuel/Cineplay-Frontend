import { makeStyles } from "@mui/styles";
import { themeValues } from "../../constants/ThemeConstants";

export const useCalendarStyles = makeStyles((theme) => ({
  calendarContainer: {
    padding: "16px",
    width: themeValues.spacing(45),
    // backgroundColor: "#232323",
    background: themeValues.gradient.cineplayBoxes,
    color: "#ffffff",
    borderRadius: themeValues.border.borderRadiusVeryHigh,
    marginTop: themeValues.spacing(3),
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  daysOfWeek: {
    marginTop: themeValues.spacing(3),
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "12px",
    textAlign: "center",
    marginBottom: "8px",
    fontSize: "small !important",
  },
  arrowsBox: {
    display: "flex",
    gap: themeValues.spacing(1),
  },
  datesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "12px",
  },
  dateBox: {
    height: themeValues.spacing(4),
    width: themeValues.spacing(4),
    padding: "8px",
    textAlign: "center",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: themeValues.color.hover, // Your desired greyish shade
    },
    "&:active": {
      backgroundColor: themeValues.color.hover, // Ensure it stays grey on click
    },
    fontSize: themeValues.font.fontSizeSmall,
  },
  selectedDate: {
    backgroundColor: "white",
    color: "black",
  },
  icon: {
    color: themeValues.color.textGray,
    alignSelf: "center",
    justifySelf: "center",

    // backgroundColor : 'wheat',
  },
  scaleDown: {
    scale: 0.6,
  },
  arrowOutline: {
    // margin: themeValues.spacing(1),
    borderRadius: "50%",
    backgroundColor: themeValues.color.black,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: themeValues.color.hover, // Your desired greyish shade
    },
    "&:active": {
      backgroundColor: themeValues.color.hover, // Ensure it stays grey on click
    },
  },
}));
