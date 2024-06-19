import leftArrowImg from "@/assets/left-arrow.png";
import clsx from "clsx";
const LeftArrow = ({ customCss = "", onClick }) => {
  const arrowStyle = clsx(
    "w-16 h-16 p-6 md:w-[100px] md:h-[100px] flex items-center justify-center bg-white border-2 border-gray rounded-full",
    customCss
  );
  return (
    <div className={`${arrowStyle}`} onClick={onClick}>
      <img src={leftArrowImg} alt="left arrow icon" />
    </div>
  );
};

export default LeftArrow;
