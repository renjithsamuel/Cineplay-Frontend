import { makeStyles } from "@mui/styles";
import { themeValues } from "../../constants/ThemeConstants";

export const useLeaderboardListItemStyles = makeStyles((theme) => ({
  leaderboardListItemContainer: {
    // padding: "16px",
    color: "#ffffff",
    width: "100%",
    marginTop: themeValues.spacing(0.8),
    cursor: "pointer",
    borderRadius: themeValues.border.borderRadiusHigh,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(1.5, 1.8),
  },
}));
