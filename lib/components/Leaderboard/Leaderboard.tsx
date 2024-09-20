import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useLeaderboard } from "./Leaderboard.hooks";
import { useLeaderboardStyles } from "./Leaderboard.styles";
import { FaCrown } from "react-icons/fa";
import { themeValues } from "../../constants/ThemeConstants";
import { FaAngleDown } from "react-icons/fa6";
import { LeaderboardType } from "../../constants/GlobalConstants";
import { mockLeaderboardItems } from "../../entity/LeaderboardItem/Leaderboard.mock";
import { LeaderboardListItem } from "../LeaderboardListItem/LeaderboardListItem";

export const Leaderboard = () => {
  const {
    currentSelectedUser,
    open,
    handleClick,
    anchorEl,
    handleClose,
    currentLeaderboardType,
    handleLeaderboardTypeChange,
    handleSelectUser,
  } = useLeaderboard();

  const classes = useLeaderboardStyles();

  return (
    <Box className={classes.leaderboardContainer}>
      {/* Leaderboard icon label and dropdown for daily */}
      <Box className={classes.leaderboardLabels}>
        <Box className={classes.leaderboardIconAndLabel}>
          {/* leaderboard image */}
          <FaCrown
            color={themeValues.color.cineplayOrange}
            size={themeValues.spacing(2.8)}
          />
          {/* Leaderboard typography */}
          <Typography variant="h6">Leaderboard</Typography>
        </Box>
        {/* leaderboard dropdown */}
        <Box className={classes.leaderboardDropDownButtonWrap}>
          <Typography variant="body1"> {currentLeaderboardType}</Typography>
          <IconButton
            onClick={handleClick}
            className={classes.dropDownIconButton}
          >
            <FaAngleDown />
          </IconButton>
        </Box>
      </Box>
      {/* map leaderboard items */}
      <Box className={classes.leaderboardItems}>
        {mockLeaderboardItems.map((leaderboardItem, index) => (
          <Box
            key={leaderboardItem.userID}
            onClick={() => handleSelectUser(leaderboardItem.userID)}
          >
            <LeaderboardListItem
              name={leaderboardItem.name}
              points={leaderboardItem.points}
              rank={leaderboardItem.rank}
              selected={currentSelectedUser === leaderboardItem.userID}
            />
          </Box>
        ))}
      </Box>
      {/*  view all button */}
      <Box className={classes.viewAllButton}>
        <Box className={classes.line} />
        <Button className={classes.viewAllButtonText}>{"View All"}</Button>
        <Box className={classes.line} />
      </Box>

      {/* menu for dropdown */}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleLeaderboardTypeChange(LeaderboardType.Daily);
            handleClose();
          }}
        >
          {LeaderboardType.Daily}{" "}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleLeaderboardTypeChange(LeaderboardType.Monthly);
            handleClose();
          }}
        >
          {LeaderboardType.Monthly}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleLeaderboardTypeChange(LeaderboardType.Yearly);
            handleClose();
          }}
        >
          {LeaderboardType.Yearly}
        </MenuItem>
      </Menu>
    </Box>
  );
};
