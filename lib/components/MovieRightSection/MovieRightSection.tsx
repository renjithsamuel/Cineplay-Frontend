import { Box, IconButton } from "@mui/material";
import { FC } from "react";
import { useMovieRightSectionStyles } from "@/cineplay/lib/components/MovieRightSection/MovieRightSection.styles";
import { FiAlertCircle } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

interface MovieRightSectionProps {

}

export const MovieRightSection: FC<MovieRightSectionProps> = ({
}) => {
  // const {

  // } = useMovieRightSection({ });

  const classes = useMovieRightSectionStyles();

  return <Box className={classes.movieRightSectionRoot}>
      {/* streak , arena and profile */}

      {/* answer input bar */}

      {/* custom calander selector */}

      {/* Leaderboard */}
  </Box>;
};
