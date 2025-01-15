import dayjs from "dayjs";
import { UseGetGameAPI } from "../../api-integration/Games/getOrCreateGame";
import { usePageContext } from "../../context/PageContext";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Game } from "../../entity/Game/game";
import { useGameContext } from "../../context/GameContext";

type MoviesHook = {
  isGetGameLoading: boolean;
  currentClue: number;
  setCurrentClue: Dispatch<SetStateAction<number>>;
};

type MoviesParams = {};

export const useMovies = ({}: MoviesParams): MoviesHook => {
  const { setGame, movieId } = useGameContext();
  const { setSnackBarError } = usePageContext();
  const [currentClue, setCurrentClue] = useState<number>(1);

  const {
    data: game,
    isLoading: isGetGameLoading,
    isError: isGetGameError,
  } = UseGetGameAPI({
    movieId: movieId,
    type: "FRAMES",
  });
  // const AllImages = [
  //   "./logo.svg",
  //   "./logo.svg",
  //   "./logo.svg",
  //   "./logo.svg",
  //   "./logo.svg",
  // ];

  useEffect(() => {
    if (isGetGameError) {
      setSnackBarError({
        ErrorMessage: "Failed to fetch movie!",
        ErrorSeverity: "error",
      });
    }
  }, [isGetGameError]);

  useEffect(() => {
    if (!game) {
      setSnackBarError({
        ErrorMessage: "No game data found for this date!",
        ErrorSeverity: "info",
      });
    }
  }, [game, setSnackBarError]);

  useEffect(() => {
    console.log("movies: settingGame", game);
    console.log("movies: movieId", movieId);
    setGame(game?.data || ({} as Game));
  }, [game]);

  return {
    currentClue,
    setCurrentClue,
    isGetGameLoading,
  };
};
