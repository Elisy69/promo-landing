import BurgerLogo from "./BurgerLogo";

function BurgerButton() {
  return (
    <button
      className="hover:shadow-2xl hover:scale-105 "
      data-hs-overlay="#hs-overlay-right"
    >
      <BurgerLogo />
    </button>
  );
}

export default BurgerButton;
