interface BaseButtonProps {
  text: string;
  desktopCover?: boolean;
  desktopGifts?: boolean;
  form?: boolean;
  handleSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function BaseButton({
  text,
  desktopCover,
  desktopGifts,
  form,
  handleSubmit,
}: BaseButtonProps) {
  return (
    <button
      onClick={handleSubmit}
      data-hs-overlay={`${!form && "#hs-basic-modal"}`}
      key={"smth"}
      className={`z-100 font-medium text-xl text-white bg-[#3C4497] p-2 rounded-xl self-center hover:bg-blue-800 active:bg-blue-400 ${
        desktopCover && "w-full sm:w-[55%] py-3 xl:text-2xl"
      } ${desktopGifts && "w-[31%] py-3 xl:text-2xl"} ${
        !desktopCover && !desktopGifts && "w-full"
      }`}
    >
      {text}
    </button>
  );
}

export default BaseButton;
