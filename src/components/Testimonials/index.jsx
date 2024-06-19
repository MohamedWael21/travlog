import Header from "@/components/Shared/Header";
import TestimonialsCarousel from "@/components/Testimonials/TestimonialsCarousel";

const Testimonials = () => {
  return (
    <div className="py-8 flex flex-col gap-16">
      <Header title="Testimonials" description="Trust our clients" />
      <TestimonialsCarousel />
    </div>
  );
};

export default Testimonials;
