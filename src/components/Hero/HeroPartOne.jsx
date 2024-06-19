import pathLeftImg from "@/assets/path-left.png";
import pathRightImg from "@/assets/path-right.png";
import pathBottomImg from "@/assets/path-bottom.png";
import planeImg from "@/assets/plane.png";
import locationRedImg from "@/assets/location-red.png";
import earthImg from "@/assets/earth.png";
import hero1Img from "@/assets/hero-1.png";
import hero2Img from "@/assets/hero-2.png";
import hero3Img from "@/assets/hero-3.png";
import sendImg from "@/assets/send.png";
import addPersonImg from "@/assets/add-person.png";
import locationYellowImg from "@/assets/location.png";
const HeroPartOne = () => {
  return (
    <div className="relative h-[366px]">
      <div className="relative md:w-[60%] md:mx-auto">
        <img
          src={earthImg}
          alt="earth"
          className="absolute left-1/2 right-1/2 -translate-x-1/2 top-0 w-[80%]"
        />
        <div className="absolute top-0 right-0">
          <img src={pathLeftImg} alt="path" />
          <img
            src={planeImg}
            alt="plane"
            className="absolute -top-3 -left-4 rotate-[250deg]"
          />
          <img
            src={locationRedImg}
            alt="location"
            className="absolute top-[30%] left-[10%]"
          />
        </div>

        <div className="absolute top-4 left-0">
          <img src={pathRightImg} alt="path" className="" />
          <img
            src={planeImg}
            alt="plane"
            className="absolute -top-2 left-11 rotate-[360deg]"
          />
        </div>
        <div className="absolute  left-1/2 -translate-x-1/2">
          <img src={pathBottomImg} alt="path" className="" />
          <img
            src={planeImg}
            alt="plane"
            className="absolute right-8 -bottom-3 rotate-[180deg]"
          />
        </div>
      </div>
      <div className="absolute z-50 w-[80%] left-1/2 -translate-x-1/2 top-9 grid grid-cols-2 gap-4">
        <img src={hero1Img} alt="" />
        <div className="row-span-3 flex items-center">
          <img src={hero3Img} alt="" className="row-span-2" />
        </div>
        <img src={hero2Img} alt="" />

        <div className="absolute bg-primary w-8 h-8 rounded-full flex items-center justify-center top-32 -left-4 shadow-[0_10px_20px_0px_rgba(0,0,0,0.3)]">
          <img src={sendImg} alt="" />
        </div>

        <div className="absolute bg-orange w-8 h-8 rounded-full flex items-center justify-center bottom-1 right-14 shadow-[0_10px_23px_0px_rgba(0,0,0,0.3)]">
          <img src={addPersonImg} alt="" />
        </div>

        <div className="absolute px-4 py-2 rounded-[50px] flex items-center justify-center top-52 -right-10 bg-white shadow-[15px_14px_30px_0px_rgba(0,0,0,0.3)] gap-1">
          <img src={locationYellowImg} alt="" />
          <span className="text-[7px] font-bold">Top places</span>
        </div>
      </div>
    </div>
  );
};

export default HeroPartOne;
