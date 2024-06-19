import featureImg1 from "@/assets/feature1.png";
import featureImg2 from "@/assets/feature2.png";
import featureImg3 from "@/assets/feature3.png";
import Feature from "@/components/KeyFeatures/Feature";
const Features = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-0">
      <Feature
        img={featureImg1}
        title="We offer best services"
        description="Lorem Ipsum is not simply random text"
      />
      <Feature
        img={featureImg2}
        title="Schedule your trip"
        description="It has roots in a piece of classical"
        isBorder
      />
      <Feature
        img={featureImg3}
        title="Get discounted coupons"
        description="Lorem Ipsum is not simply random text"
      />
    </div>
  );
};

export default Features;
