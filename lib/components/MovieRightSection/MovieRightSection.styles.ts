import { themeValues } from "@/cineplay/lib/constants/ThemeConstants";
import { makeStyles } from "@mui/styles";
import { MdBorderColor } from "react-icons/md";

export const useMovieRightSectionStyles = makeStyles((theme) => ({
  movieRightSectionRoot: {
    width: "30vw",
    marginTop: theme.spacing(10),
    gap: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

  },
  streakArenaAndProfile: {
    display: "flex",
    justifyContent: "space-evenly",
    // backgroundColor:'red',
    width:'100%',
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
    gap: themeValues.spacing(1),
    backgroundColor: "#FF8911",
    color: "white",
    borderRadius: themeValues.border.borderRadius,
    padding: themeValues.spacing(1),
    paddingLeft: themeValues.spacing(2),
    paddingRight: themeValues.spacing(2),
    position: "relative",
    "&:hover": {
      boxShadow: themeValues.shadow.boxShadowAttatched,
      cursor: "pointer",
    },
  },
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
    width:'80%',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  // answerInpBox: {
  //   position: "relative",
  //   border: "1.5px solid var(--white)",
  //   borderRadius: "0.25rem",
  //   outline: "none",
  //   backgroundColor: "#232323",
  //   color: themeValues.color.textGray,
  //   width:'80%',
  //   padding: themeValues.spacing(2),
  //   paddingRight: themeValues.spacing(5),
  //   "&::-webkit-input-placeholder": {
  //     color: themeValues.color.textGray,
  //     opacity: 1,
  //   },
  // },
}));
