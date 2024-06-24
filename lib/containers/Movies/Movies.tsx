import { Box, IconButton } from "@mui/material";
import { FC } from "react";
import { useMoviesStyles } from "./Movies.styles";
import { FiAlertCircle } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { useMovies } from "./Movies.hooks";
import { MovieCenterSection } from "../../components/MovieCenterSection/MovieCenterSection";

interface MoviesProps {}

export const Movies: FC<MoviesProps> = ({}) => {
  const { AllImages } = useMovies({});

  const classes = useMoviesStyles();

  return (
    <Box className={classes.moviesRoot}>
      {/*  center thing */}
      <MovieCenterSection AllImages={AllImages} />
      {/* right thing */}
    </Box>
  );
};
