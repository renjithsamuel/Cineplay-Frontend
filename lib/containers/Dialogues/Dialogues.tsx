import { Box } from "@mui/material";
import { FC } from "react";
import { useDialoguesStyles } from "./Dialogues.styles";

interface DialoguesProps {}

export const Dialogues: FC<DialoguesProps> = ({}) => {
  // const {

  // } = useDialogues({ });

  const classes = useDialoguesStyles();

  return <Box className={classes.dialoguesRoot}></Box>;
};
