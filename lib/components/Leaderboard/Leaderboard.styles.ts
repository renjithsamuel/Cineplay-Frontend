import { makeStyles } from "@mui/styles";
import { themeValues } from "../../constants/ThemeConstants";

export const useLeaderboardStyles = makeStyles((theme) => ({
  leaderboardContainer: {
    padding: "16px",
    width: themeValues.spacing(45),
    // backgroundColor: "#232323",
    background: themeValues.gradient.cineplayBoxes,
    color: "#ffffff",
    borderRadius: themeValues.border.borderRadiusVeryHigh,
    marginTop: themeValues.spacing(3),
  },
}));
