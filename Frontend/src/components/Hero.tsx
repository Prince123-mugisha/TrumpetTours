import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import image1 from "@/Assets/image1.jpg";
import image2 from "@/Assets/image2.jpg";
import image3 from "@/Assets/image3.jpg";
import { Link } from "react-router-dom";
import { TripPlannerDialog } from "@/components/ui/trip-planner-dialog";
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTripPlanner, setShowTripPlanner] = useState(false);

  // Using your original images
  const slides = [
    image1,
    image2,
    image3
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
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
      <div className="container mx-auto px-4 sm:px-6 z-10 text-center py-32 sm:py-32 mt-12 sm:mt-0">
        <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6">
          {/* Badge */}
          {/* <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full px-4 py-2 sm:px-5">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
            <span className="text-[#D4AF37] text-xs sm:text-sm font-medium tracking-wider">
              EASTERN AFRICA EXPEDITIONS
            </span>
          </div> */}

          {/* Experience Text */}
          <h2 className="text-base sm:text-xl md:text-2xl text-white/90 font-light tracking-widest">
            Welcome to 
          </h2>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="italic font-serif">Trumpet Tours</span>
          </h1>
          

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
            Discover Eastern Africa's breathtaking landscapes and wildlife through
            expertly curated safari adventures.
          </p>

          {/* CTA Buttons */}
{/* <div className="flex flex-col items-center justify-center gap-3 pt-4 max-w-md mx-auto w-full">
  <button
    className="w-full bg-safari-gold text-[#1D1F16] hover:bg-safari-gold/80 font-semibold px-6 py-3.5 sm:py-4 text-sm sm:text-base rounded-full transition-colors flex items-center justify-center gap-2"
    onClick={() => setShowTripPlanner(true)}
  >
    Plan Your Trip
    <ArrowRight className="h-5 w-5" />
  </button>

  <Link to="/destination" className="w-full">
    <button
      className="w-full border-2 border-white/80 text-white hover:bg-white/10 font-semibold px-6 py-3.5 sm:py-4 text-sm sm:text-base backdrop-blur-sm rounded-full transition-colors flex items-center justify-center gap-2"
    >
      Explore Tours
      <ArrowRight className="h-5 w-5" />
    </button>
  </Link>
</div> */}


          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-8 sm:pt-12 max-w-xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">500+</div>
              <div className="text-white/70 text-xs sm:text-sm mt-1 sm:mt-2">Travelers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">20+</div>
              <div className="text-white/70 text-xs sm:text-sm mt-1 sm:mt-2">Tours</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">10+</div>
              <div className="text-white/70 text-xs sm:text-sm mt-1 sm:mt-2">Years</div>
            </div>
          </div>
        </div>
      </div>



      {/* Slide Indicators */}
      <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-[#D4AF37] w-8"
                : "bg-white/40 hover:bg-white/60 w-2"
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