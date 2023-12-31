import { Ref, forwardRef } from "react";
import BaseButton from "../BaseButton";
import CurlyLine from "./CurlyLine";

interface GiftProps {
  screenSize: number;
}

const GIFTS = [
  { img: "/images/scooter.png", text: "Электросамокат" },
  { img: "/images/alisa.png", text: "Колонка" },
  { img: "/images/watch.png", text: "Смарт часы" },
];

const Gifts = forwardRef((props: GiftProps, ref: Ref<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      className="w-full flex flex-col px-6 items-center pt-12 gap-6 relative"
    >
      <CurlyLine />
      <h1 className="font-medium text-[7vw] lg:text-[3vw]">ВЫИГРЫВАЙ ПРИЗЫ</h1>
      <section className="flex flex-col items-center gap-4 w-full lg:w-[85%] xl:w-[75%] 2xl:w-[65%]">
        <h2 className="font-medium text-xl sm:text-2xl">
          Гарантированный приз
        </h2>
        <div className="flex gap-4 px-6 py-8 w-full  bg-[#F6F6F6] rounded-3xl ">
          <div className="w-1/2 flex items-center justify-center">
            <img
              className="lg:w-[60%] xl:w-[50%] 2xl:w-[40%]"
              src="/images/gifts-goup2.png"
              alt="subscribtions"
            />
          </div>
          <p className="w-1/2 flex items-center lg:px-20">
            <span className="sm:text-xl">
              Зарегистрируйте один чек и получите подписку Яндекс Плюс на 1 год
            </span>
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-12  w-full lg:w-[85%] xl:w-[75%] 2xl:w-[65%]">
        <h2 className="font-medium text-xl sm:text-2xl self-center pb-6 lg:pb-24 xl:pb-28 2xl:pb-32">
          Ежемесячный приз
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8  w-full">
          {GIFTS.map((gift, index) => (
            <div
              key={index}
              className="flex lg:flex-col bg-[#FFD907] rounded-3xl gap-6 lg:gap-0 p-6 w-full sm:w-[70%] self-center h-[6rem] lg:min-h-[15rem] sm:min-h-[10rem] "
            >
              <div
                className={`${
                  index === 1 && "mb-[2rem] lg:mb-0"
                } relative w-[40%] lg:w-[100%] lg:h-[80%] flex items-center justify-center lg:mb-0 `}
              >
                <img
                  className={`${
                    index === 0 &&
                    "w-[80%] lg:w-[70%] mb-[5rem] lg:mb-[10rem] xl:mb-[12rem] min-w-[6rem] max-w-[7rem] sm:max-w-[9rem] lg:max-w-[12rem]"
                  }  ${
                    index === 1 &&
                    "w-[80%] sm:w-[90%] lg:w-[80%] mb-[0.9rem] lg:mb-[6rem] min-w-[7rem] max-w-[8rem] sm:max-w-[10rem] lg:max-w-[12rem]"
                  } ${
                    index === 2 &&
                    "w-[80%] mb-[3rem] lg:mb-[7rem] xl:mb-[8rem] min-w-[6rem] max-w-[7rem] sm:max-w-[10rem] lg:max-w-[12rem]"
                  }     `}
                  src={gift.img}
                  alt={gift.text}
                />
              </div>
              <p className="w-[60%] lg:w-[100%] lg:h-[20%] flex items-center justify-start lg:justify-center">
                <span className="sm:text-xl">{gift.text}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
      {props.screenSize > 1024 ? (
        <div className=" lg:w-[85%] xl:w-[75%] 2xl:w-[65%] flex items-center justify-center mt-4">
          <BaseButton
            desktopGifts={true}
            text={props.screenSize > 1024 ? "ЗАГРУЗИТЬ ЧЕК" : "УЧАСТВОВАТЬ"}
          />
        </div>
      ) : (
        <div className="w-full sm:w-[70%]">
          <BaseButton
            text={props.screenSize > 1024 ? "ЗАГРУЗИТЬ ЧЕК" : "УЧАСТВОВАТЬ"}
          />
        </div>
      )}
      <img
        className="absolute hidden lg:block left-[93%] top-[45%] w-[7%]"
        src="/images/lemon.png"
        alt="lemon"
      />
    </div>
  );
});

export default Gifts;
