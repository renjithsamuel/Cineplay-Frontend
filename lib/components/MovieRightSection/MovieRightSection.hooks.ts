import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { UseUpdateGameAPI } from "../../api-integration/Games/updateGame";
import { usePageContext } from "../../context/PageContext";
import { Game } from "../../entity/Game/game";
import { useGameContext } from "../../context/GameContext";

type MovieRightSectionHook = {
  confettiVisible: boolean;
  game: Game;
  handleSubmit: (value: string) => Promise<void>;
};

type MovieRightSectionParams = {
  setCurrentClue: Dispatch<SetStateAction<number>>;
};

export const useMovieRightSection = ({
  setCurrentClue,
}: MovieRightSectionParams): MovieRightSectionHook => {
  const [confettiVisible, setConfettiVisible] = useState(false);

  const { setSnackBarError } = usePageContext();
  const { game } = useGameContext();

  const {
    mutateAsync: updateGame,
    isLoading: isUpdateGameError,
    isSuccess: isUpdateGameSuccess,
  } = UseUpdateGameAPI();

  // useEffect(() => {
  //   if (isUpdateGameError) {
  //     setSnackBarError({
  //       ErrorMessage: "Failed to update game!",
  //       ErrorSeverity: "error",
  //     });
  //   }
  // }, [isUpdateGameError]);

  // login or register submit
  const handleSubmit = async (value: string) => {
    if (game.completed) return;
    if (game.cluesUsed == 5) {
      setSnackBarError({
        ErrorMessage: "You have used all the clues",
        ErrorSeverity: "warning",
      });
      return;
    }
    if (!value.trim()) {
      setSnackBarError({
        ErrorMessage: "Answer cannot be empty",
        ErrorSeverity: "warning",
      });
      return;
    }

    try {
      const response = await updateGame({
        value: value.trim(),
        gameId: game.gameId,
      });

      if (response?.data.completed) {
        setConfettiVisible(true);
        // Automatically hide confetti after 5 seconds
        setTimeout(() => setConfettiVisible(false), 2000);
        setSnackBarError({
          ErrorMessage: "Congrats you have completed the game!",
          ErrorSeverity: "info",
        });
      }

      if (response.status === 200) {
        console.log("game.cluesUsed : ", game.cluesUsed);
        if (game.cluesUsed + 1 <= 5) setCurrentClue(game.cluesUsed + 1);
      } else {
        setSnackBarError({
          ErrorMessage: "Failed to update game. Please try again.",
          ErrorSeverity: "error",
        });
      }
    } catch (error) {
      // Handle network or unexpected errors
      setSnackBarError({
        ErrorMessage: "Something went wrong. Please try again later.",
        ErrorSeverity: "error",
      });
    }
  };
  return { game, handleSubmit, confettiVisible };
};
