import { Box, IconButton } from "@mui/material";
import { FC } from "react";
import { useMovieCenterSectionStyles } from "./MovieCenterSection.styles";
import { FiAlertCircle } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

interface MovieCenterSectionProps {
  AllImages: string[]
}

export const MovieCenterSection: FC<MovieCenterSectionProps> = ({AllImages}) => {
  // const {

  // } = useMovieCenterSection({ });

  const classes = useMovieCenterSectionStyles();

  return <Box className={classes.movieCenterSectionRoot}>
        {/* current image */}
        <Box className={classes.currentImage}>
          {/*  date and info */}
          <Box className={classes.dateAndInfo}>
            <Box>November 1</Box>
            <Box>
              <IconButton>
                <FiAlertCircle color="white" />
              </IconButton>
            </Box>
          </Box>
          <img
            src={"./logo.svg"}
            width={900}
            height={350}
            alt={"img"}
            className={classes.currImg}
          />
        </Box>
        {/* All images */}
        <Box className={classes.allImagesWrap}>
          {AllImages.map((img, index) => {
            return (
              <Box key={index} className={classes.allImage}>
                <img
                  src={img}
                  width={150}
                  height={80}
                  alt={"img"}
                  className={classes.allImg}
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
  </Box>;
};
