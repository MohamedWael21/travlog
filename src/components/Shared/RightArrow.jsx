import clsx from "clsx";
import rightArrowImg from "@/assets/right-arrow.png";

const RightArrow = ({ customCss = "", onClick }) => {
  const arrowStyle = clsx(
    "w-16 h-16 p-6 md:w-[100px] md:h-[100px] flex items-center justify-center bg-secondary shadow-xl rounded-full",
    customCss
  );
  return (
    <div className={`${arrowStyle}`} onClick={onClick}>
      <img src={rightArrowImg} alt="left arrow icon" />
    </div>
  );
};

export default RightArrow;
