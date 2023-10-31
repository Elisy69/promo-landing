import BurgerButton from "./BurgerButton";
import LogoIcon from "./LogoIcon";

const BUTTON_NAMES = [];

function Navbar() {
  return (
    <nav className="bg-[#B1C728] w-full h-[5vh] flex">
      <LogoIcon />
      <BurgerButton />
    </nav>
  );
}

export default Navbar;
