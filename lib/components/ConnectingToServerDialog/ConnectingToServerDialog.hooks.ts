import { User } from "@/cineplay/lib/entity/User/User";
// import { mockUsers } from "@/cineplay/lib/entity/User/User.mock";
import { useMediaQuery, useTheme } from "@mui/material";
import { useReducer, useState } from "react";

interface connectingToServerDialogHookProps {}

interface connectingToServerDialogHook {
  fullScreen: boolean;
}

export const useConnectingToServerDialog =
  ({}: connectingToServerDialogHookProps): connectingToServerDialogHook => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    return {
      fullScreen,
    };
  };
