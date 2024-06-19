import Header from "@/components/Shared/Header";
import leftArrowImg from "@/assets/left-arrow.png";
import rightArrowImg from "@/assets/right-arrow.png";
import Destinations from "@/components/TopDestination/Destinations";
const TopDestination = () => {
  return (
    <div className="py-8 flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <Header title="Top Destination" description="Explore top destination" />
        <div className="flex justify-between">
          <div className="w-16 h-16 p-6 flex items-center justify-center bg-white border-2 border-gray rounded-full">
            <img src={leftArrowImg} alt="left arrow icon" />
          </div>
          <div className="w-16 h-16 p-6 flex items-center justify-center bg-secondary shadow-xl rounded-full">
            <img src={rightArrowImg} alt="left arrow icon" />
          </div>
        </div>
      </div>
      <Destinations />
    </div>
  );
};

export default TopDestination;
