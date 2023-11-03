import { useEffect, useRef, useState } from "react";
import Cover from "./components/cover/Cover";
import Footer from "./components/footer/Footer";
import Gifts from "./components/gifts/Gifts";
import Modal from "./components/modal/Modal";
import NavbarDesktop from "./components/navbar/NavbarDesktop";
import NavbarMobile from "./components/navbar/NavbarMobile";
import { desktop } from "./constants/mediaBreakpoints";
import useScreen from "./hooks/useScreen";

function App() {
  const { width } = useScreen();
  const [screenSize, setScreenSize] = useState(width);
  const giftsRef = useRef<HTMLDivElement | null>(null);

  function handleScrollToGifts() {
    if (giftsRef.current) {
      giftsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  useEffect(() => {
    setScreenSize(width);
  }, [width]);

  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      {screenSize > desktop ? (
        <NavbarDesktop handleScrollToGifts={handleScrollToGifts} />
      ) : (
        <NavbarMobile />
      )}
      <Cover screenSize={screenSize} />
      <Gifts screenSize={screenSize} ref={giftsRef} />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
