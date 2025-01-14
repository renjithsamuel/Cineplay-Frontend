import { useState } from "react";
import { LeaderboardType } from "../../constants/GlobalConstants";

interface UseLeaderboardHook {
  currentSelectedUser: string;
  open: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  currentLeaderboardType: LeaderboardType;
  handleLeaderboardTypeChange: (leaderboardType: LeaderboardType) => void;
  handleSelectUser: (userId: string) => void;
}

export const useLeaderboard = (): UseLeaderboardHook => {
  const [currentLeaderboardType, setCurrentLeaderboardType] =
    useState<LeaderboardType>(LeaderboardType.Daily);
  const [currentSelectedUser, setCurrentSelectedUser] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLeaderboardTypeChange = (leaderboardType: LeaderboardType) => {
    setCurrentLeaderboardType(leaderboardType);
  };

  const handleSelectUser = (userId: string) => {
    setCurrentSelectedUser(userId);
  };

  return {
    currentSelectedUser,
    open,
    handleClick,
    anchorEl,
    handleClose,
    currentLeaderboardType,
    handleLeaderboardTypeChange,
    handleSelectUser,
  };
};
