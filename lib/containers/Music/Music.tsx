import { Box } from "@mui/material";
import { FC } from "react";
import { useMusicStyles } from "./Music.styles";

interface MusicProps {}

export const Music: FC<MusicProps> = ({}) => {
  // const {

  // } = useMusic({ });

  const classes = useMusicStyles();

  return <Box className={classes.musicRoot}></Box>;
};
