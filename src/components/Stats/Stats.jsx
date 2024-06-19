import Stat from "@/components/Stats/Stat";

const Stats = () => {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8">
      <Stat num="500+" title="Holiday Package" />
      <Stat num="100" title="Package" />
      <Stat num="7" title="Premium Airlines" />
      <Stat num="2k+" title="Happy Customer" />
    </div>
  );
};

export default Stats;
