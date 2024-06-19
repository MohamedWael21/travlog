import keyFeaturesImg from "@/assets/key-features-bg.png";
import Features from "@/components/KeyFeatures/Features";
import Header from "@/components/Shared/Header";
const KeyFeatures = () => {
  return (
    <div className="flex flex-col gap-16 p-8">
      <img src={keyFeaturesImg} alt="key features background" />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <Header title="Key features" description="We offer best services" />
          <p className="text-center text-base font-bold leading-[1.7em] text-gray-1/2">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <Features />
      </div>
    </div>
  );
};

export default KeyFeatures;
