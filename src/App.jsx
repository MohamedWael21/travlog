import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import Services from "@/components/Services";
import TopDestination from "@/components/TopDestination";
import Stats from "@/components/Stats";
import KeyFeatures from "@/components/KeyFeatures";
import Testimonials from "@/components/Testimonials";

const App = () => {
  return (
    <div className="w-[91%] max-w-5xl mx-auto">
      <Navbar />
      <Hero />
      <Companies />
      <Services />
      <TopDestination />
      <Stats />
      <KeyFeatures />
      <Testimonials />
    </div>
  );
};
export default App;
