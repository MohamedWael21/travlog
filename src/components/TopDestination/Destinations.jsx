import Destionation from "@/components/TopDestination/Destionation";
import destionationImg1 from "@/assets/destination1.png";
import destionationImg2 from "@/assets/destination2.png";
import destionationImg3 from "@/assets/destination3.png";
const Destinations = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <Destionation
        img={destionationImg1}
        title="Paradise Beach, Bantayan Island"
        location="Rome, Italy"
        price="550.16"
        rating="4.8"
      />
      <Destionation
        img={destionationImg2}
        title="Ocean with full of Colors"
        location="Maldives"
        price="20.99"
        rating="4.5"
      />
      <Destionation
        img={destionationImg3}
        title="Mountain View, Above the cloud"
        location="United Arab Emeries"
        price="150.99"
        rating="5.0"
      />
    </div>
  );
};

export default Destinations;
