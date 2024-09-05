import { Box } from "@mui/material";
import { useLeaderboard } from "./Leaderboard.hooks";
import { useLeaderboardStyles } from "./Leaderboard.styles";

export const Leaderboard = () => {
  const {} = useLeaderboard();

  const classes = useLeaderboardStyles();

  return <Box className={classes.leaderboardContainer}>
      
  </Box>;
};
