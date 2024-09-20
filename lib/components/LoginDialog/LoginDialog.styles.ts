import { themeValues } from "@/cineplay/lib/constants/ThemeConstants";
import { makeStyles } from "@mui/styles";

export const useLoginDialogStyles = makeStyles((theme) => ({
  loginDialog: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    borderRadius: themeValues.border.borderRadiusHigh,
    boxShadow: themeValues.shadow.boxShadowLight,
    transition: themeValues.transition.defaultTansition,
    animation: themeValues.animation.slideUp,
    "&:hover": {
      boxShadow: themeValues.shadow.boxShadowAttatched,
      cursor: "pointer",
    },
  },
  loginWrap: {
    background: themeValues.gradient.loginBackground,
    // backgroundColor: themeValues.color.black,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "30vw",
    padding: theme.spacing(4),
    gap: theme.spacing(3),
    // color: themeValues.color.color1,
    "& > *": {
      color: `${themeValues.color.cineplayOrange} !important`,
    },
  },
  textField: {
    marginTop: theme.spacing(2),
    width: "100%",
    textAlign: "left",

    // for color
    "& .MuiOutlinedInput-root": {
      color: "gray", // Text color
      "& fieldset": {
        borderColor: "gray", // Border color
      },
      "&:hover fieldset": {
        borderColor: "darkgray", // Hover border color
      },
      "&.Mui-focused fieldset": {
        borderColor: "gray", // Focused border color
      },
    },
    "& .MuiInputLabel-root": {
      color: "gray", // Label color
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "gray", // Focused label color
    },
    "& .MuiInputAdornment-root": {
      color: "gray", // Adornment icon color
    },
    "& .MuiFormHelperText-root": {
      color: "gray", // Helper text color
    },
  },
  loginButton: {
    marginTop: theme.spacing(2),
    alignSelf: "center",
    // color: themeValues.color.textColor,
    backgroundColor: themeValues.color.cineplayOrange,
    "&:disabled": {
      backgroundColor: themeValues.color.transparent,
      color: "white",
      opacity: "50%",
      border: "1px solid gray",
    },
    "&:hover": {
      backgroundColor: themeValues.color.cineplayOrange,
    },
  },
  switcher: {
    // color: themeValues.color.color1,
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
}));
