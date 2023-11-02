import { BUTTON_NAMES } from "../../constants/buttonNames";
import LogoIcon from "./LogoIcon";
interface NavbarDesktopProps {
  handleScrollToGifts: () => void;
}
function NavbarDesktop({ handleScrollToGifts }: NavbarDesktopProps) {
  return (
    <nav className="bg-[#B1C728] w-full flex items-center p-4 py-8">
      <div className="flex items-center justify-center w-[25%]">
        <LogoIcon isDesktop={true} />
      </div>
      <div className="flex  items-center justify-start gap-8 xl:gap-16 w-[75%] pl-4">
        {BUTTON_NAMES.map((btn, index) => {
          if (index === BUTTON_NAMES.length - 1) {
            return (
              <button
                data-hs-overlay="#hs-basic-modal"
                className="font-medium text-[1.3vw] text-black bg-white p-2 px-4 rounded-xl self-center hover:bg-blue-100 active:bg-blue-200"
                key={`${index} button`}
              >
                {btn}
              </button>
            );
          }
          return (
            <button
              key={`${index} button`}
              onClick={btn === "ПРИЗЫ" ? handleScrollToGifts : undefined}
              className="font-medium text-[1.3vw]"
            >
              {btn}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default NavbarDesktop;
