import { makeStyles } from "@mui/styles";
import { themeValues } from "../../constants/ThemeConstants";

export const useLeaderboardStyles = makeStyles((theme) => ({
  leaderboardContainer: {
    padding: "16px",
    color: "#ffffff",
    width: themeValues.spacing(45),
    marginTop: themeValues.spacing(1),
  },
  leaderboardLabels: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leaderboardIconAndLabel: {
    display: "flex",
    gap: themeValues.spacing(1),
    alignItems: "center",
    // justifyContent: "center",
  },
  leaderboardDropDownButtonWrap: {
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dropDownIconButton: {
    display: "flex",
    gap: 1,
    color: themeValues.color.lightGray,
    opacity: "80%",
    fontSize: themeValues.font.fontSizeMedium,
  },
  leaderboardItems: {},
  viewAllButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: theme.spacing(2),
    gap: theme.spacing(1),
  },
  viewAllButtonText: {
    border: `1px solid ${theme.palette.grey[500]}`,
    padding: theme.spacing(0.5, 0.8),
    borderRadius: themeValues.border.borderRadiusVeryHigh,
    backgroundColor: "transparent",
    color: theme.palette.grey[700],
    // fontSize: theme.typography.body1.fontSize,
    fontSize: themeValues.font.fontSizeSmall,
  },
  line: {
    flex: 1,
    height: "1px",
    opacity: "50%",
    backgroundColor: theme.palette.grey[400],
  },
}));
