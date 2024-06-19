import statsImg from "@/assets/stats.png";
import Header from "@/components/Shared/Header";
import StatsContainer from "@/components/Stats/Stats";
const Stats = () => {
  return (
    <div className="flex flex-col gap-16 py-8 md:py-16 lg:grid lg:grid-cols-2 items-center">
      <img
        src={statsImg}
        alt="discount price"
        className="w-[398px] md:[871px]"
      />

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <Header
            title="Travel Point"
            description="We helping you find your dream location"
          />
          <p className="text-center text-base font-bold leading-[1.7em] text-gray-1/2 md:max-w-2xl md:leading-loose md:mx-auto md:text-lg">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <StatsContainer />
      </div>
    </div>
  );
};

export default Stats;
