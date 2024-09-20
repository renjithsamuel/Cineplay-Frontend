import { themeValues } from "@/cineplay/lib/constants/ThemeConstants";
import { makeStyles } from "@mui/styles";
import { MdBorderColor } from "react-icons/md";

export const useMovieRightSectionStyles = makeStyles((theme) => ({
  movieRightSectionRoot: {
    width: "30vw",
    marginTop: theme.spacing(7),
    gap: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  streakArenaAndProfile: {
    display: "flex",
    justifyContent: "space-evenly",
    // backgroundColor:'red',
    width: "100%",
  },
  streak: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  streakCount: {
    fontSize: themeValues.font.fontSizeMedium,
    fontWeight: themeValues.font.fontWeightLightThick,
  },
  streakFireImage: {},
  arena: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    gap: themeValues.spacing(1),
    "--clr-font-main": "hsla(28, 100%, 15%, 1)", // Darker shade for text
    "--btn-bg-1": "hsla(28, 100%, 55%, 1)", // Brighter shade of orange
    "--btn-bg-2": "hsla(28, 100%, 45%, 1)", // Medium shade of orange
    "--btn-bg-color": "hsla(28, 100%, 95%, 1)", // Lighter text color
    "--radii": "0.5em",
    cursor: "pointer",
    padding: "0.9em 1.4em",
    minWidth: "120px",
    minHeight: "44px",
    fontSize: "1rem",
    fontFamily: '"Segoe UI", system-ui, sans-serif',
    fontWeight: 500,
    transition: "0.8s",
    backgroundSize: "280% auto",
    backgroundImage:
      "linear-gradient(325deg, var(--btn-bg-2) 0%, var(--btn-bg-1) 55%, var(--btn-bg-2) 90%)",
    border: "none",
    borderRadius: "var(--radii)",
    color: "var(--btn-bg-color)",
    boxShadow:
      "0px 0px 20px rgba(252, 136, 18, 0.5), 0px 5px 5px -1px rgba(230, 124, 16, 0.25), inset 4px 4px 8px rgba(230, 124, 16, 0.5), inset -4px -4px 8px rgba(207, 112, 15, 0.35)",
    "&:hover": {
      backgroundPosition: "right top",
    },
    "&:focus, &:focus-visible, &:active": {
      outline: "none",
      boxShadow: "0 0 0 3px var(--btn-bg-color), 0 0 0 6px var(--btn-bg-2)",
    },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "linear",
    },
  },

  // arena: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   gap: themeValues.spacing(1),
  //   backgroundColor: "#FF8911",
  //   color: "white",
  //   borderRadius: themeValues.border.borderRadiusHigh,
  //   padding: themeValues.spacing(1),
  //   paddingLeft: themeValues.spacing(2),
  //   paddingRight: themeValues.spacing(2),
  //   position: "relative",
  //   "&:hover": {
  //     boxShadow: themeValues.shadow.boxShadowAttatched,
  //     cursor: "pointer",
  //   },
  // },
  stars1: {
    position: "absolute",
    left: themeValues.spacing(-0.5),
    top: themeValues.spacing(-0.7),
  },
  stars2: {
    position: "absolute",
    right: themeValues.spacing(-0.2),
    bottom: themeValues.spacing(-0.3),
  },
  profile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      boxShadow: themeValues.shadow.boxShadowAttatched,
      cursor: "pointer",
    },
  },
  answerInp: {
    // backgroundColor: "red",
    // "& *": {
    //   color: "white",
    //   MdBorderColor: "white",
    // },
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: themeValues.spacing(5),
  },
  answerInpBox: {
    position: "relative",
    border: "1.5px solid var(--white)",
    borderRadius: themeValues.border.borderRadiusVeryHigh,
    outline: "none",
    backgroundColor: "#232323",
    color: themeValues.color.textGray,
    width: "100%",
    fontFamily: "'Poppins', sans-serif",
    fontSize: themeValues.font.fontSizeMedium,
    // padding: themeValues.spacing(2),
    paddingTop: themeValues.spacing(2.5),
    paddingBottom: themeValues.spacing(2.5),
    paddingRight: themeValues.spacing(5),
    paddingLeft: themeValues.spacing(2.5),
    "&::-webkit-input-placeholder": {
      fontSize: themeValues.font.fontSizeMedium,
      color: themeValues.color.textGray,
      opacity: 0.7,
    },
  },
}));
