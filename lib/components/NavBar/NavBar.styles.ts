import { makeStyles } from "@mui/styles";
import { themeValues } from "../../constants/ThemeConstants";

export const useNavBarStyles = makeStyles((theme) => ({
  navBarRoot: {
    paddingLeft: "2vw",
    paddingTop: "6vh",
    paddingBottom: "10vh",
    width: "8vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& >*": {
      userSelect: "none",
    },
  },
  logo: {
    padding: themeValues.spacing(2),
    background: themeValues.gradient.cineplayBoxes,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: themeValues.spacing(4),
  },
  logoImg: {
    objectFit: "cover",
    borderRadius: themeValues.border.borderRadiusVeryHigh,
  },
  centerMenuWrap: {
    marginTop: themeValues.spacing(15),
    gap: themeValues.spacing(2),
    display: "flex",
    justifySelf: "center",
    flexDirection: "column",
  },
  sideMenuItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: themeValues.border.borderRadiusVeryHigh,
    padding: "1vh",
  },
  currentSideMenu: {
    background: themeValues.gradient.cineplayBoxes,
    boxShadow: themeValues.shadow.boxShadowHeavy,
    padding: themeValues.spacing(2),
  },
}));
