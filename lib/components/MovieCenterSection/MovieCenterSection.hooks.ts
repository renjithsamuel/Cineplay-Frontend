import { Dispatch, SetStateAction, useState } from "react";
import { Game } from "../../entity/Game/game";
import { useGameContext } from "../../context/GameContext";

type MovieCenterSectionHook = {
  game: Game;
  images: string[];
  handleClueClick: (clue: number) => void;
};

type MovieCenterSectionParams = {
  currentClue: number;
  setCurrentClue: Dispatch<SetStateAction<number>>;
};

export const useMovieCenterSection = ({
  setCurrentClue,
  currentClue,
}: MovieCenterSectionParams): MovieCenterSectionHook => {
  const { game } = useGameContext();
  let images = game?.imageLinks || [];
  if (images.length < 5) {
    const lockIcon = "./lock.png";
    while (images.length < 5) {
      images.push(lockIcon);
    }
  }

  const handleClueClick = (clue: number) => {
    if(clue > game?.imageLinks.length) return;
    if (
      (game?.completed && game?.imageLinks.length >= clue) ||
      clue <= game?.imageLinks.length
    ) {
      setCurrentClue(clue);
    }
  };

  return { game, images, handleClueClick };
};
