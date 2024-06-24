import {
  Alert,
  Box,
  CircularProgress,
  Snackbar,
  Typography,
  Button,
} from "@mui/material";
import { useBaseLayout } from "./BaseLayout.hooks";
// import { NavBar } from "@/cineplay/lib/components/NavBar/NavBar";
import { AlertSnackbar } from "@/cineplay/lib/components/AlertSnackbar/AlertSnackbar";
import { Role } from "@/cineplay/lib/constants/Role";
import { FC, ReactNode } from "react";
import { useBaseLayoutStyles } from "./BaseLayout.styles";
import { LoginDialog } from "@/cineplay/lib/components/LoginDialog/LoginDialog";
import { UnAuthorizedPage } from "@/cineplay/lib/components/UnAuthorizedPage/UnAuthorizedPage";
import { ConnectingToServerDialog } from "@/cineplay/lib/components/ConnectingToServerDialog/ConnectingToServerDialog";
import { NavBar } from "../../components/NavBar/NavBar";

interface BaseLayoutProps {
  showSearchBar?: boolean;
  showMenuBar?: boolean;
  authenticatedOnly?: boolean;
  roleAllowed?: Role;
  children?: ReactNode;
}

export const BaseLayout: FC<BaseLayoutProps> = ({
  authenticatedOnly = true,
  showSearchBar = true,
  showMenuBar = true,
  // roleAllowed = Role.Both,
  children,
}) => {
  const {
    authenticated,
    isError,
    isSuccess,
    isLoading,
    isFetched,
    user,
    menuItems,
    alertSnackbarMessage,
    handleCloseAlertSnackbar,
    isAlertSnackbarOpen,
    inUnauthorizedPage,
  } = useBaseLayout({
    authenticatedOnly,
  });

  const classes = useBaseLayoutStyles();

  if (inUnauthorizedPage) {
    return <UnAuthorizedPage />;
  }

  if (authenticatedOnly) {
    return (
      <Box className={classes.baseLayoutRoot}>
        {/* <LoginDialog /> */}
        {false ? (
          <ConnectingToServerDialog />
        ) : (
          (!authenticated || !isSuccess) && <LoginDialog />
        )}
        {/* navbar  */}
        <NavBar menuItems={menuItems}></NavBar>
        {/* page main content */}
        <Box sx={{ zIndex: 1 }}>{children}</Box>
        <AlertSnackbar open={isAlertSnackbarOpen}>
          <Alert
            onClose={handleCloseAlertSnackbar}
            severity={alertSnackbarMessage?.severity}
          >
            {alertSnackbarMessage?.message}
          </Alert>
        </AlertSnackbar>
      </Box>
    );
  }

  return (
    <Box className={classes.baseLayoutRoot}>
      {/* navbar  */}
      <NavBar menuItems={menuItems}></NavBar>
      {/* page main content */}
      <Box sx={{ zIndex: 1 }}>{children}</Box>
      {/* snack bar */}
      <AlertSnackbar open={isAlertSnackbarOpen}>
        <Alert
          onClose={handleCloseAlertSnackbar}
          severity={alertSnackbarMessage?.severity}
        >
          {alertSnackbarMessage?.message}
        </Alert>
      </AlertSnackbar>
    </Box>
  );
};
