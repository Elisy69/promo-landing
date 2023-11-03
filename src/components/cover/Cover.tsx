import { desktop } from "../../constants/mediaBreakpoints";
import BaseButton from "../BaseButton";

interface CoverProps {
  screenSize: number;
}

function Cover({ screenSize }: CoverProps) {
  return (
    <div className="w-full lg:h-[47vw] bg-[#B1C728] px-6 gap-4 lg:gap-0 flex flex-col lg:flex-row-reverse lg:relative overflow-hidden lg:pt-2">
      <div className="relative w-full pt-4 lg:pt-0 lg:w-1/3">
        <div className="relative mr-[4rem] ">
          <img
            className="lg:hidden"
            src="/images/gifts-group.png"
            alt="gifts"
          />
          <img
            className="absolute top-[20%] left-[66%] w-[65%] lg:top-[90%] lg:left-[-5%] lg:w-[85%]"
            src="/images/biggest-prize.png"
            alt="big prize"
          />
        </div>
        <img
          className="absolute top-[-2%] w-[24%] lg:w-[35%] lg:top-[-7%] lg:left-[65%]"
          src="/images/leaf-left.png"
          alt="leaf"
        />
      </div>
      <div className="z-10 font-medium text-[7vw] lg:text-[4vw] text-center text-white line-clamp-3 flex flex-col lg:w-1/3">
        {screenSize < desktop ? (
          <>
            <span>УЧАСТВУЙ В АКЦИИ</span>
            <span>И ВЫИГРЫВАЙ</span>
            <span>ПРИЗЫ!</span>
          </>
        ) : (
          <>
            <span>УЧАСТВУЙ</span>
            <span>В АКЦИИ И</span>
            <span>ВЫИГРЫВАЙ</span>
            <span>ПРИЗЫ!</span>
          </>
        )}
        <div className="z-10 pt-2 flex justify-center">
          <BaseButton desktopCover={true} text="УЧАСТВОВАТЬ" />
        </div>
      </div>
      <div className="pr-6 pl-8 lg:relative lg:w-1/3 flex justify-center">
        {screenSize < desktop && (
          <img className="" src="/images/bottle.png" alt="bottle" />
        )}
      </div>

      <img
        className="z-0 hidden lg:block lg:absolute lg:left-[0%] lg:top-[1.5%] lg:w-[50%] "
        src="/images/bottle.png"
        alt="bottle"
      />
      <img
        className="hidden lg:block absolute lg:left-[60%] lg:top-[30%] lg:w-[32%] "
        src="/images/gifts-group.png"
        alt="gifts"
      />
      <img
        className="hidden lg:block absolute lg:left-[80%] lg:top-[35%] lg:w-[20%] "
        src="/images/bubbles.png"
        alt="bubbles"
      />
    </div>
  );
}

export default Cover;
