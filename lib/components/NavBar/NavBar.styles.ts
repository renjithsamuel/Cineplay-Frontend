import { makeStyles } from "@mui/styles";
import { themeValues } from "../../constants/ThemeConstants";

export const useNavBarStyles = makeStyles((theme) => ({
  navBarRoot: {
    width: "10vw",
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
    backgroundColor: "#2D2D2D",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: themeValues.spacing(4),
  },
  logoImg: {
    objectFit: "cover",
    borderRadius: themeValues.border.borderRadiusHigh,
  },
  centerMenuWrap: {
    marginTop: themeValues.spacing(15),
    gap: themeValues.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  sideMenuItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: themeValues.border.borderRadiusHigh,
    padding: "1vh",
  },
  currentSideMenu: {
    background: "linear-gradient(to bottom, #2D2D2D 100%, #1D1D1D 100%)",
    boxShadow: themeValues.shadow.boxShadowHeavy,
  },
}));
