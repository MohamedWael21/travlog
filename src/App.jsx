import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import Services from "@/components/Services";
import TopDestination from "@/components/TopDestination";
import Stats from "@/components/Stats";
import KeyFeatures from "@/components/KeyFeatures";
import Testimonials from "@/components/Testimonials";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

const App = () => {
  return (
    <div className="w-[91%] max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <Companies />
      <Services />
      <TopDestination />
      <Stats />
      <KeyFeatures />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
};
export default App;
