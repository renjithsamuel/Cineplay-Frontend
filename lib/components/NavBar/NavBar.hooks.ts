import { SetStateAction } from "react";
import { User } from "../../entity/User/User";
import { useRouter } from "next/router";
import { usePageContext } from "../../context/PageContext";
import { useUserContext } from "../../context/UserContext";
import { debounce } from "../../utils/debounce";
import { globalConstants } from "../../constants/GlobalConstants";

interface navBarHook {
  user: User;
  currentSideMenu: string;
  DialogBox: JSX.Element | undefined;
  handleSideMenuClick: (menulink: string) => void;
}

export const useNavBar = (): navBarHook => {
  const router = useRouter();
  const { setSearchText, currentSideMenu, DialogBox } = usePageContext();
  const { user } = useUserContext();

  console.log("x", currentSideMenu)

  const handleSearch = debounce((value: string) => {
    if (value && value != "" && value.length > 0) {
      setSearchText(value);
    }
  }, globalConstants.debounceDelay);

  const handleSideMenuClick = (menulink: string) => {
    console.log("x", menulink)
    if (menulink && menulink != "" && menulink.length > 0) {
      router.replace(menulink);
    }
  };

  return {
    user,
    currentSideMenu,
    DialogBox,
    handleSideMenuClick,
  };
};
