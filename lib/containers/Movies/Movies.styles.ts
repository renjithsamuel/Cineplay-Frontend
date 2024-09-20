import { themeValues } from "@/cineplay/lib/constants/ThemeConstants";
import { makeStyles } from "@mui/styles";

export const useMoviesStyles = makeStyles((theme) => ({
  moviesRoot: {
    // backgroundColor: "black",
    display: "flex",
    marginLeft: theme.spacing(5),
  },
}));
