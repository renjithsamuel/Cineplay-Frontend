import { User } from "@/cineplay/lib/entity/User/User";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Game } from "../entity/Game/game";
import dayjs from "dayjs";

type TGameContext = {
  game: Game;
  setGame: Dispatch<SetStateAction<Game>>;
  movieId: string;
  setMovieId: Dispatch<SetStateAction<string>>;
};

export const GameContext = createContext<TGameContext>(
  {} as unknown as TGameContext,
);

interface GameContextProviderProps {
  children: ReactNode;
}

export const GameContextProvider: FC<GameContextProviderProps> = ({
  children,
}) => {
  const [game, setGame] = useState<Game>({} as Game);
  const today = dayjs().format("YYYY-MM-DD");
  const [movieId, setMovieId] = useState<string>(today);
  console.log("movieId", movieId);

  return (
    <GameContext.Provider
      value={{
        game,
        setGame,
        movieId,
        setMovieId,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = (): TGameContext => useContext(GameContext);
