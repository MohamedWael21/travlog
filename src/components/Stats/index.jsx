import statsImg from "@/assets/stats.png";
import Header from "@/components/Shared/Header";
import StatsContainer from "@/components/Stats/Stats";
const Stats = () => {
  return (
    <div className="flex flex-col gap-16 py-8">
      <img src={statsImg} alt="discount price" />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <Header
            title="Travel Point"
            description="We helping you find your dream location"
          />
          <p className="text-center text-base font-bold leading-[1.7em] text-gray-1/2">
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
