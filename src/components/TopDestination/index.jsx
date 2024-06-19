import Header from "@/components/Shared/Header";
import Destinations from "@/components/TopDestination/Destinations";
import LeftArrow from "@/components/Shared/LeftArrow";
import RightArrow from "@/components/Shared/RightArrow";
const TopDestination = () => {
  return (
    <div className="py-8 flex flex-col gap-8 md:gap-16">
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
        <Header title="Top Destination" description="Explore top destination" />
        <div className="flex justify-between md:justify-center md:gap-8">
          <LeftArrow />
          <RightArrow />
        </div>
      </div>
      <Destinations />
    </div>
  );
};

export default TopDestination;
