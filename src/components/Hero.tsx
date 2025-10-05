import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import heroImage from "@/assets/hero-rwanda.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Rwanda landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-safari-darker/70 via-safari-darker/60 to-safari-darker/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-safari-gold/30 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-safari-gold rounded-full animate-pulse" />
            <span className="text-safari-gold text-sm font-medium">Welcome to</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            <span className="tracking-wider">T R U M P E T</span>
            <br />
            <span className="text-safari-gold tracking-wide">T O U R S</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Discover beyond the untamed beauty of Africa's wildlife adventures with us
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              size="lg"
              className="bg-safari-gold text-safari-darker hover:bg-safari-gold/90 font-semibold px-8"
            >
              Book Your Safari
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-safari-darker font-semibold px-8"
            >
              Explore Tours
              <Search className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="space-y-1">
              <div className="text-4xl md:text-5xl font-bold text-white">500+</div>
              <div className="text-white/70 text-sm">Travelers</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl md:text-5xl font-bold text-white">50+</div>
              <div className="text-white/70 text-sm">Tours</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl md:text-5xl font-bold text-white">15+</div>
              <div className="text-white/70 text-sm">Years</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-safari-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
