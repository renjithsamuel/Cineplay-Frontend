import { Box, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { useMovieRightSectionStyles } from "@/cineplay/lib/components/MovieRightSection/MovieRightSection.styles";
import { CgProfile } from "react-icons/cg";
import { themeValues } from "../../constants/ThemeConstants";
import { Calendar } from "../CalenderBox/CalenderBox";

interface MovieRightSectionProps {}

export const MovieRightSection: FC<MovieRightSectionProps> = ({}) => {
  // const {

  // } = useMovieRightSection({ });

  const classes = useMovieRightSectionStyles();

  return (
    <Box className={classes.movieRightSectionRoot}>
      {/* streak , arena and profile */}
      <Box className={classes.streakArenaAndProfile}>
        {/* streak */}
        <Box className={classes.streak}>
          <Box className={classes.streakCount}>10</Box>
          <Box className={classes.streakFireImage}>
            <img src={"./Fire.svg"} width={30} height={30} alt={"fire"} />
          </Box>
        </Box>
        {/* arena */}
        <Box className={classes.arena}>
          <Box className={classes.stars1}>
            <img src={"./3stars.svg"} width={20} height={20} alt={"play"} />
          </Box>
          <Box className={classes.stars2}>
            <img src={"./3stars.svg"} width={15} height={15} alt={"play"} />
          </Box>
          <Typography variant="body1"> Arena</Typography>
          <Box>
            <img src={"./Play.svg"} width={15} height={15} alt={"play"} />
          </Box>
        </Box>
        {/* Profile */}
        <Box className={classes.profile}>
          <CgProfile size={40} />
        </Box>
      </Box>
      {/* answer input bar */}
      <Box className={classes.answerInp}>
        {/* <input type="text" id="answerInp" name="answerInp" placeholder="Your Answer Here..." className={classes.answerInpBox}/> */}
        <TextField
          label="Your Answer Here..."
          variant="outlined" // variant that supports background color
          InputProps={{
            disableUnderline: true, // removes the underline
            style: {
              backgroundColor: "#232323",
              color: "#ffffff", // contrasting text color
            },
          }}
          InputLabelProps={{
            style: {
              color: "#ffffff", // label text color
              // padding:themeValues.spacing(2),
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#232323", // default outline color
              },
              "&:hover fieldset": {
                borderColor: "#232323", // outline color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#232323", // outline color when focused
              },
            },
            "& .MuiInputBase-root": {
              backgroundColor: "#232323", // input background color
              borderRadius: themeValues.border.borderRadiusHigh,
            },
          }}
          fullWidth // make the input full width
        />
      </Box>
      {/* custom calander selector */}
      <Calendar />
      {/* Leaderboard */}
    </Box>
  );
};
