import serviceImg1 from "@/assets/service1.png";
import serviceImg2 from "@/assets/service2.png";
import serviceImg3 from "@/assets/service3.png";
import Service from "./Service";
import Header from "@/components/Shared/Header";
const Services = () => {
  return (
    <div className="py-8 flex flex-col gap-8">
      <Header title="Services" description="Our top value categories for you" />
      <div className="flex flex-col gap-4">
        <Service
          img={serviceImg1}
          title="Best Tour Guide"
          description="What looked like a small patch of purple grass, above five feet."
        />
        <Service
          img={serviceImg2}
          title="Easy Booking"
          description="Square, was moving across the sand in their direction."
        />
        <Service
          img={serviceImg3}
          title="Weather Forecast"
          description="What looked like a small patch of purple grass, above five feet."
        />
      </div>
    </div>
  );
};

export default Services;
