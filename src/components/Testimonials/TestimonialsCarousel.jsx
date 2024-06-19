import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RightArrow from "@/components/Shared/RightArrow";
import LeftArrow from "@/components/Shared/LeftArrow";
import testimonialImg1 from "@/assets/testimonial1.png";
import Testimonial from "@/components/Testimonials/Testimonial";

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightArrow customCss="cursor-pointer" />,
    prevArrow: <LeftArrow customCss="cursor-pointer" />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <Testimonial
          title="Mark Smith / Travel Enthusiast"
          description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC."
          img={testimonialImg1}
          rating={5}
        />
        <Testimonial
          title="Mark Smith / Travel Enthusiast"
          description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC."
          img={testimonialImg1}
          rating={5}
        />
        <Testimonial
          title="Mark Smith / Travel Enthusiast"
          description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC."
          img={testimonialImg1}
          rating={5}
        />
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;
