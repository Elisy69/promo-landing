import { BUTTON_NAMES } from "../../constants/buttonNames";
import BurgerButton from "./BurgerButton";
import DrawerMenu from "./DrawerMenu";
import LogoIcon from "./LogoIcon";

function Navbar() {
  return (
    <nav className="bg-[#B1C728] w-full flex justify-between p-4">
      <LogoIcon />
      <BurgerButton />
      <DrawerMenu buttonNames={BUTTON_NAMES} />
    </nav>
  );
}

export default Navbar;
