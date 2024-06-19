import keyFeaturesImg from "@/assets/key-features-bg.png";
import Features from "@/components/KeyFeatures/Features";
import Header from "@/components/Shared/Header";
const KeyFeatures = () => {
  return (
    <div className="flex flex-col gap-16 p-8 md:py-16 lg:flex-row lg:justify-between items-center justify-center ">
      <img
        src={keyFeaturesImg}
        alt="key features background"
        className="w-[350px] md:[693px]"
      />
      <div className="flex flex-col gap-8 md:py-16 lg:w-[45%] lg:-order-1">
        <div className="flex flex-col gap-8">
          <Header title="Key features" description="We offer best services" />
          <p className="text-center text-base font-bold leading-[1.7em] text-gray-1/2 md:max-w-2xl md:leading-loose md:mx-auto md:text-lg">
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
