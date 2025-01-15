import { Box, CircularProgress, IconButton } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";
import { useMovieCenterSectionStyles } from "./MovieCenterSection.styles";
import { FiAlertCircle } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { Game } from "../../entity/Game/game";
import { useMovieCenterSection } from "./MovieCenterSection.hooks";
import dayjs from "dayjs";

interface MovieCenterSectionProps {
  isGetGameLoading: boolean;
  currentClue: number;
  setCurrentClue: Dispatch<SetStateAction<number>>;
}

export const MovieCenterSection: FC<MovieCenterSectionProps> = ({
  isGetGameLoading,
  currentClue,
  setCurrentClue,
}) => {
  const { game, images, handleClueClick } = useMovieCenterSection({
    currentClue,
    setCurrentClue,
  });

  const classes = useMovieCenterSectionStyles();

  return (
    <Box className={classes.movieCenterSectionRoot}>
      {/* current image */}
      <Box className={classes.currentImage}>
        {/*  date and info */}
        <Box className={classes.dateAndInfo}>
          <Box> {dayjs(game.movieId).format("MMMM D")}</Box>
          <Box>
            <IconButton>
              <FiAlertCircle color="white" />
            </IconButton>
          </Box>
        </Box>
      </Box>
      {!isGetGameLoading ? (
        <img
          src={images[currentClue - 1]}
          width={900}
          height={400}
          alt={"img"}
          className={classes.currImg}
          style={{
            opacity: 1,
            transition: "opacity 0.5s ease-in",
          }}
        />
      ) : (
        <Box
          width={900}
          height={400}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: 1,
            transition: "opacity 0.5s ease-in",
          }}
        >
          <CircularProgress sx={{ color: "white" }} />
        </Box>
      )}
      {/* All images */}
      <Box className={classes.allImagesWrap}>
        {images.map((img, index) => {
          return (
            <Box key={index} className={classes.allImage}>
              <img
                src={img}
                width={150}
                height={80}
                alt={"img"}
                className={classes.allImg}
                onClick={() => handleClueClick(index + 1)}
              />
            </Box>
          );
        })}
      </Box>
      {/* watch ad for hint */}
      <Box className={classes.adHint}>
        <FaPlay />
        Watch Ad for hint!
      </Box>
    </Box>
  );
};
