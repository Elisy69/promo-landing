import { BUTTON_NAMES } from "../../constants/buttonNames";

function Footer() {
  return (
    <footer className="p-12 flex flex-col lg:flex-row justify-center items-center gap-12 lg:mt-10">
      {BUTTON_NAMES.map((btn, index) => {
        if (index === BUTTON_NAMES.length - 1) return "";
        return (
          <button key={index} className="font-medium text-md">
            {btn}
          </button>
        );
      })}
    </footer>
  );
}

export default Footer;
