import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedTours from "@/components/FeaturedTours";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedTours />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
