import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import FeaturedTours from "@/components/FeaturedTours";
import VoyagingModes from "@/components/VoyagingModes";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhoWeAre />
      <Services />
      <Destinations />
      <FeaturedTours />
      <VoyagingModes />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
