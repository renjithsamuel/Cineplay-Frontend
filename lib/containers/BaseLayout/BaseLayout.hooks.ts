// import { useGetUserAPI } from "@/cineplay/lib/api-integration/Users/getUser";
import { usePageContext } from "@/cineplay/lib/context/PageContext";
import { useUserContext } from "@/cineplay/lib/context/UserContext";
import { User } from "@/cineplay/lib/entity/User/User";
import {
  AlertSnackbarHook,
  useAlertSnackbar,
} from "@/cineplay/lib/hooks/AlertSnackBar.hooks";
import { Cookie } from "@/cineplay/lib/utils/cookies";
import { useEffect, useState } from "react";
import { ImBooks } from "react-icons/im";
import { LiaBookSolid } from "react-icons/lia";
import { mockUser } from "@/cineplay/lib/entity/User/User.mock";
import { GrTransaction } from "react-icons/gr";
import { IoAnalyticsOutline, IoHeartSharp } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import { BsBookshelf } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { useRouter } from "next/router";
import { globalConstants } from "../../constants/GlobalConstants";
// import { useGetTokenExpiryAPI } from "@/cineplay/api-integration/Users/getTokenExpiry";

type BaseLayoutHook = {
  user: User;
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
  isFetched: boolean;
  authenticated: boolean;
  inUnauthorizedPage: boolean;
  isAlertSnackbarOpen: AlertSnackbarHook["isAlertSnackbarOpen"];
  alertSnackbarMessage: AlertSnackbarHook["alertSnackbarMessage"];
  handleCloseAlertSnackbar: AlertSnackbarHook["handleCloseAlertSnackbar"];
};

type BaseLayoutParams = {
  authenticatedOnly: boolean;
};

export const useBaseLayout = ({
  authenticatedOnly,
}: BaseLayoutParams): BaseLayoutHook => {
  const router = useRouter();
  const [inUnauthorizedPage, setInUnauthorizedPage] = useState<boolean>(false);
  const { setUser, setAuthenticated, authenticated, user } = useUserContext();

  const {
    snackBarError,
    setSnackBarError,
    setCurrentSideMenu,
    currentSideMenu,
  } = usePageContext();

  const getAccessToken = (): string => {
    let access_token = "";

    try {
      access_token = Cookie.access_token;
    } catch (e) {
      if (authenticatedOnly) throw e;
    }

    return access_token;
  };

  // const {
  //   data: getUserResponse,
  //   isError,
  //   isSuccess,
  //   isLoading,
  //   isFetched,
  // } = useGetUserAPI(!!getAccessToken());

  // const { data: tokenexpiryResponse } = useGetTokenExpiryAPI();

  // mocking api data
  const tokenexpiryResponse = { status: 200, data: { message: "" } };
  const getUserResponse = { data: mockUser };
  const isError = false;
  const isSuccess = true;
  const isLoading = false;
  const isFetched = true;

  useEffect(() => {
    if (isSuccess) {
      // verify if token is present or not

      // setAuthenticated(true);
      if (!!getAccessToken()) {
        setAuthenticated(true);
      }
      // else show pop up to login

      if (getUserResponse?.data) {
        setUser(new User(getUserResponse.data));
      }
    }
  }, [getUserResponse?.data, isSuccess]);

  // check for token expiry
  useEffect(() => {
    if (!!tokenexpiryResponse) {
      if (
        tokenexpiryResponse.status == 401 &&
        tokenexpiryResponse?.data.message == "token has expired"
      ) {
        // logout
        Cookie.logout();
        setAuthenticated(false);
      }
    }
  }, [tokenexpiryResponse]);

  const {
    alertSnackbarMessage,
    handleCloseAlertSnackbar,
    isAlertSnackbarOpen,
    openAlertSnackbar,
  } = useAlertSnackbar();

  useEffect(() => {
    if (isError) {
      openAlertSnackbar("Something went wrong!", "error");
    }
  }, [isError]);

  // call alert snackbar from where ever you want
  useEffect(() => {
    if (
      snackBarError?.ErrorMessage &&
      snackBarError?.ErrorMessage?.length > 0
    ) {
      openAlertSnackbar(
        snackBarError?.ErrorMessage,
        snackBarError?.ErrorSeverity
      );
      setSnackBarError(undefined);
      setTimeout(() => {
        handleCloseAlertSnackbar(undefined, "timeout");
      }, globalConstants.snackBarDelay);
    }
  }, [snackBarError?.ErrorMessage]);

  return {
    user,
    isSuccess,
    isFetched,
    isError,
    isLoading,
    authenticated,
    alertSnackbarMessage,
    inUnauthorizedPage,
    isAlertSnackbarOpen,
    handleCloseAlertSnackbar,
  };
};
