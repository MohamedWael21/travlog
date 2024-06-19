import HeroPartTwo from "@/components/Hero/HeroPartTwo";
import HeroPartOne from "./HeroPartOne";

const Hero = () => {
  return (
    <div className="py-8 flex flex-col gap-8 md:py-16 lg:relative lg:flex-row">
      <HeroPartOne />
      <HeroPartTwo />
    </div>
  );
};
export default Hero;
