import { themeValues } from "@/cineplay/lib/constants/ThemeConstants";
import { makeStyles } from "@mui/styles";

export const useMovieCenterSectionStyles = makeStyles((theme) => ({
  movieCenterSectionRoot: {
    width: "60vw",
    marginTop: theme.spacing(10),
    // backgroundColor  : 'red',
    display: "flex",
    // width : '100%',
    flexDirection: "column",
    gap: theme.spacing(7),
    justifyContent: "center",
  },
  dateAndInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  currentImage: {
    // justifySelf : 'center',
    alignSelf: "center",
  },
  currImg: {
    backgroundColor: "red",
    borderRadius: themeValues.border.borderRadiusHigh,
  },
  allImagesWrap: {
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(3),
  },
  allImage: {},
  allImg: {
    backgroundColor: "red",
    borderRadius: themeValues.border.borderRadiusHigh,
  },
  adHint: {
    display: "flex",
    alignSelf: "center",
    gap: theme.spacing(1),
    cursor: "pointer",
    color: "#FF8E0F",
  },
}));
