import HeroPartOne from "./HeroPartOne";
import HeroPartTwo from "./HeroPartTwo";

const Hero = () => {
  return (
    <div className="py-8 flex flex-col gap-8">
      <HeroPartOne />
      <HeroPartTwo />
    </div>
  );
};
export default Hero;
