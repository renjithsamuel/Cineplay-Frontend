import { Box, TextField, Typography } from "@mui/material";
import { useNavBarStyles } from "./NavBar.styles";
import { IoIosSearch } from "react-icons/io";
import { useNavBar } from "./NavBar.hooks";
import { IoSettingsOutline } from "react-icons/io5";
import { ImLibrary } from "react-icons/im";
import clsx from "clsx";
import { ReactNode } from "react";
import Link from "next/link";
import { SideNavItem } from "../../types/SideNav";
import { sideMenuItems } from "../../constants/GlobalConstants";
import { themeValues } from "../../constants/ThemeConstants";
import { Role } from "../../constants/Role";

interface NavBarProps {
  menuItems: SideNavItem[];
  children?: ReactNode;
}

export const NavBar = ({ menuItems, children }: NavBarProps) => {
  const { currentSideMenu, user, DialogBox } = useNavBar();
  const classes = useNavBarStyles();

  return (
    <Box className={classes.navBarRoot}>
      <Link href={sideMenuItems.Movie.link} className={classes.logo}>
        {/* logo image */}
        <img
          src={"./logo.svg"}
          width={90}
          height={120}
          alt={`cineplay`}
          className={classes.logoImg}
        />
      </Link>

      {/*  center menu items */}
      <Box className={classes.centerMenuWrap}>
        {menuItems.map((menuItem, index) => {
          return (
            <Link key={menuItem.link} href={menuItem?.link}>
              <Box
                // onClick={() => handleSideMenuClick(menuItem.link)}
                className={clsx(classes.sideMenuItem, {
                  [classes.currentSideMenu]: currentSideMenu === menuItem.link,
                })}
              >
                <img
                  src={menuItem.icon}
                  width={30}
                  height={40}
                  alt={menuItem.icon}
                />
                {/* <Typography variant="body1">{menuItem.name}</Typography> */}
              </Box>
            </Link>
          );
        })}
      </Box>
      {/* page main content */}
      <Box sx={{ zIndex: 1 }}>{children}</Box>
    </Box>
  );
};
