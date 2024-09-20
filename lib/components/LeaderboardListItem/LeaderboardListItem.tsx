import { Box, IconContainerProps, Rating, styled } from "@mui/material";
import { useLeaderboardListItem } from "./LeaderboardListItem.hooks";
import { useLeaderboardListItemStyles } from "./LeaderboardListItem.styles";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { themeValues } from "../../constants/ThemeConstants";

interface LeaderboardListItemProps {
  rank: number;
  name: string;
  points: number;
  selected: boolean;
}

export const LeaderboardListItem = ({
  rank,
  name,
  points,
  selected,
}: LeaderboardListItemProps) => {
  const {} = useLeaderboardListItem();

  const classes = useLeaderboardListItemStyles();

  let array: number[] = [];
  for (let i = 0; i < points; i++) {
    array.push(i < points - 1 ? 0 : 1);
  }

  return (
    <Box
      className={classes.leaderboardListItemContainer}
      sx={{
        opacity: selected ? "100%" : "80%",
        background: selected
          ? themeValues.gradient.cineplayBoxes
          : "transparent",
      }}
    >
      <Box display={"flex"} gap={1.5}>
        {/* Rank */}
        <Box>{rank}</Box>
        {/* Username */}
        <Box>{name}</Box>
      </Box>
      {/* points */}
      <Box display={"flex"}>
        {array.map((item, index) => {
          return (
            <Box
              sx={{
                background:
                  item == 0
                    ? themeValues.gradient.pointBoxDark
                    : themeValues.gradient.pointBoxLight,
                width: themeValues.spacing(3),
                height: themeValues.spacing(3),
                marginX: themeValues.spacing(0.2),
                alignSelf: "right",
                borderRadius: themeValues.border.borderRadiusLow,
              }}
              key={index}
            />
          );
        })}
      </Box>
    </Box>
  );
};
