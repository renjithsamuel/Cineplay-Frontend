import { Box, IconButton } from "@mui/material";
import { FC } from "react";
import { useMoviesStyles } from "./Movies.styles";
import { FiAlertCircle } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { useMovies } from "./Movies.hooks";
import { MovieCenterSection } from "../../components/MovieCenterSection/MovieCenterSection";
import { MovieRightSection } from "../../components/MovieRightSection/MovieRightSection";
import Confetti from "react-confetti"; 

interface MoviesProps {}

// 4 requests
// - post get request will fetch each image every time - : movieID - date, : YYYY-MM-DD
// - put request on entering an input
// search api to fetch the suggestion text - drop down with debounce
// change in date should trigger post again

// add game context wrap- gameID, date of currenty displayed game - movieID, game, user
// todo : update new context, game context
export const Movies: FC<MoviesProps> = ({}) => {
  const { currentClue, setCurrentClue, isGetGameLoading } = useMovies({});

  const classes = useMoviesStyles();

  return (
    <Box className={classes.moviesRoot}>
      {/*  center section */}
      <MovieCenterSection setCurrentClue={setCurrentClue} currentClue={currentClue} isGetGameLoading={isGetGameLoading} />
      {/* right section */}
      <MovieRightSection setCurrentClue={setCurrentClue}/>
    </Box>
  );
};
