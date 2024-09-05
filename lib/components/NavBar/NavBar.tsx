import { Box } from "@mui/material";
import { useNavBarStyles } from "./NavBar.styles";
import { useNavBar } from "./NavBar.hooks";
import clsx from "clsx";
import Link from "next/link";
import { SideNavItem } from "../../types/SideNav";
import { sideMenuItems } from "../../constants/GlobalConstants";

interface NavBarProps {
  menuItems: SideNavItem[];
}

export const NavBar = ({ menuItems }: NavBarProps) => {
  const { currentSideMenu, user, DialogBox } = useNavBar();
  const classes = useNavBarStyles();

  return (
    <Box className={classes.navBarRoot}>
      <Link href={sideMenuItems.Movie.link} className={classes.logo}>
        {/* logo image */}
        <img
          src={"./logo.svg"}
          width={60}
          height={60}
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
                  width={currentSideMenu === menuItem.link ? 50 : 40}
                  height={currentSideMenu === menuItem.link ? 50 : 40}
                  alt={menuItem.icon}
                />
                {/* <Typography variant="body1">{menuItem.name}</Typography> */}
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};
