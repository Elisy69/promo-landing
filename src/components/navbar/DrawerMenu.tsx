import BaseButton from "../BaseButton";
import DrawerCloseButton from "./DrawerCloseButton";

interface DrawerMenuProps {
  buttonNames: string[];
}

function DrawerMenu({ buttonNames }: DrawerMenuProps) {
  return (
    <div
      id="hs-overlay-right"
      className="[--body-scroll:true] hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 right-0 transition-all duration-300 transform h-full max-w-[80%] w-full z-[60] bg-white"
    >
      <div className="w-full flex flex-col p-2 px-4 items-start gap-8">
        <DrawerCloseButton />
        {buttonNames.map((btn, index) => {
          if (index === buttonNames.length - 1) {
            return <BaseButton key={"lastBtn"} text={btn} />;
          }
          return (
            <button key={`${index} button`} className="font-medium text-xl">
              {btn}
            </button>
          );
        })}
      </div>
      <div className="flex justify-end">
        <img src="public/DrawerLeaf.png" alt="DrawerLeaf" />
      </div>
    </div>
  );
}

export default DrawerMenu;
