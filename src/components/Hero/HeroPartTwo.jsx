import bagImg from "@/assets/bag.png";
import playImg from "@/assets/play.png";
const HeroPartTwo = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="px-8 py-5 flex gap-4 shadow-2xl rounded-100 w-fit mx-auto items-center">
          <p className=" text-primary font-bold text-sm">Explore the world!</p>
          <img src={bagImg} alt="bag icon" />
        </div>
        <p className="font-bold text-[40px] text-center mt-4">
          Travel <span className="text-primary">top destination</span> of the
          world
        </p>
        <p className="text-gray-1/2 font-bold text-base text-center">
          We always make our customer happy by providing as many choices as
          possible
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <button className="bg-secondary px-8 py-6 text-base font-bold text-white rounded-100 shadow-xl">
          Get Started
        </button>
        <button className="flex gap-2 justify-center items-center px-8 py-6 text-base font-bold text-white rounded-100 shadow-md">
          <img src={playImg} alt="play icon" />
          <span className="text-[#222831]">Watch Demo</span>
        </button>
      </div>
    </div>
  );
};

export default HeroPartTwo;
