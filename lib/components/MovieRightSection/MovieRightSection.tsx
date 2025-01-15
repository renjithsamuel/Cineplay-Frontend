import { Box, TextField, Typography } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";
import { useMovieRightSectionStyles } from "@/cineplay/lib/components/MovieRightSection/MovieRightSection.styles";
import { CgProfile } from "react-icons/cg";
import { themeValues } from "../../constants/ThemeConstants";
import { Calendar } from "../CalenderBox/CalenderBox";
import { Leaderboard } from "../Leaderboard/Leaderboard";
import { useMovieRightSection } from "./MovieRightSection.hooks";
import Confetti from "react-confetti";

interface MovieRightSectionProps {
  setCurrentClue: Dispatch<SetStateAction<number>>;
}

export const MovieRightSection: FC<MovieRightSectionProps> = ({
  setCurrentClue,
}) => {
  const { handleLogout, confettiVisible, handleSubmit, game } =
    useMovieRightSection({
      setCurrentClue: setCurrentClue,
    });

  const classes = useMovieRightSectionStyles();

  return (
    <Box className={classes.movieRightSectionRoot}>
      {confettiVisible && (
        <Confetti style={{ transition: "opacity 0.5s ease-in" }} />
      )}

      {/* streak , arena and profile */}
      <Box className={classes.streakArenaAndProfile}>
        {/* streak */}
        <Box className={classes.streak}>
          <Box className={classes.streakCount}>10</Box>
          <Box className={classes.streakFireImage}>
            <img src={"./Fire.svg"} width={30} height={30} alt={"fire"} />
          </Box>
        </Box>
        {/* arena */}
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className={classes.arena}>
            {/* Main stars */}
            <Box className={classes.stars1}>
              <img src={"./3stars.svg"} width={20} height={20} alt={"play"} />
            </Box>
            <Box className={classes.stars2}>
              <img src={"./3stars.svg"} width={15} height={15} alt={"play"} />
            </Box>
            Arena <img src={"./Play.svg"} width={15} height={15} alt={"play"} />
          </button>
        </Box>

        {/* <Box className={classes.arena}>
          <Box className={classes.stars1}>
            <img src={"./3stars.svg"} width={20} height={20} alt={"play"} />
          </Box>
          <Box className={classes.stars2}>
            <img src={"./3stars.svg"} width={15} height={15} alt={"play"} />
          </Box>
          <Typography variant="body1"> Arena</Typography>
          <Box>
            <img src={"./Play.svg"} width={15} height={15} alt={"play"} />
          </Box>
        </Box> */}
        {/* Profile */}
        <Box className={classes.profile} onClick={() => handleLogout()}>
          <CgProfile size={40} />
        </Box>
      </Box>
      {/* answer input bar */}
      <Box className={classes.answerInp}>
        <input
          type="text"
          id="answerInp"
          name="answerInp"
          placeholder="Your Answer Here..."
          className={classes.answerInpBox}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !game.completed) {
              handleSubmit(e.currentTarget.value);
              e.currentTarget.value = "";
            }
          }}
          disabled={game?.completed}
        />
      </Box>
      {/* custom calander selector */}
      <Calendar />
      {/* Leaderboard */}
      <Leaderboard />
    </Box>
  );
};
