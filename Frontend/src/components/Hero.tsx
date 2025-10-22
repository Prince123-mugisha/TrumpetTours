import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import { TripPlannerDialog } from "@/components/ui/trip-planner-dialog";
import image1 from "@/Assets/image1.jpg";
import image2 from "@/Assets/image2.jpg";
import image3 from "@/Assets/image3.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTripPlanner, setShowTripPlanner] = useState(false);

  const slides = [image1, image2, image3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[120vh] flex items-center justify-center pt-32">
      {/* Background Image Slider with Overlay */}
      <div className="absolute inset-0 z-0">
        {slides.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Safari slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center mt-[-20vh]">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-safari-gold/30 rounded-full px-5 py-2">
            <span className="w-2 h-2 bg-safari-gold rounded-full animate-pulse" />
            <span className="text-safari-gold text-sm font-medium tracking-wider">
              EASTERN AFRICA EXPEDITIONS
            </span>
          </div>

          {/* Experience Text */}
          <h2 className="text-xl md:text-2xl text-white/90 font-light tracking-widest">
            Experience
          </h2>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="italic font-serif">Trumpet Tours</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover Eastern Africa's breathtaking landscapes and wildlife through
            expertly curated safari adventures.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-safari-gold text-safari-darker hover:bg-safari-gold/90 font-semibold px-6 py-5 text-sm"
              onClick={() => setShowTripPlanner(true)}
            >
              Plan Your Trip
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/Destination">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/80 text-black hover:bg-white hover:text-safari-darker font-semibold px-6 py-5 text-sm backdrop-blur-sm"
              >
                Explore Tours
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl md:text-5xl font-bold text-white">500+</div>
              <div className="text-white/70 text-sm mt-2">Travelers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl md:text-5xl font-bold text-white">50+</div>
              <div className="text-white/70 text-sm mt-2">Tours</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl md:text-5xl font-bold text-white">15+</div>
              <div className="text-white/70 text-sm mt-2">Years</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-[-1px]">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-safari-gold rounded-full animate-bounce" />
        </div>
        <span className="text-white/60 text-xs">Scroll</span>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-[-1px]">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-safari-gold w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Trip Planner Dialog */}
      <TripPlannerDialog
        open={showTripPlanner}
        onOpenChange={setShowTripPlanner}
      />
    </section>
  );
};

export default Hero;