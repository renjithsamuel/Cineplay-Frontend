import { Box } from "@mui/material";
import { FC } from "react";
import { useMoviesStyles } from "./Movies.styles";

interface MoviesProps {}

export const Movies: FC<MoviesProps> = ({}) => {
  // const {

  // } = useMovies({ });

  const classes = useMoviesStyles();

  return <Box className={classes.moviesRoot}></Box>;
};
