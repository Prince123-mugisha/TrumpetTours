import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import HeroImage from "@/Assets/akagerarwanda.jpg";
import RwandaItineraries from "@/Assets/nyungwe.jpg";
import UgandaItineraries from "@/Assets/QueenElizabeth.jpg";
import PackageItineraries from "@/Assets/kivu.jpg";

const Itineraries = () => {
  return (
    <div className="min-h-screen bg-white text-safari-darker">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 relative overflow-hidden min-h-[120vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={HeroImage}
            alt="Safari Adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 mt-[-20vh]">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-safari-gold" />
            <span className="text-safari-gold font-medium">
              EXPLORE ITINERARIES
            </span>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold">
            <span className="block text-white">Your Journey,</span>
            <span className="block text-safari-gold">Perfectly Planned</span>
          </h1>

          <p className="mt-4 max-w-4xl mx-auto text-white/90 text-lg">
            Discover carefully crafted itineraries for Rwanda, Uganda, and across
            East Africa — blending wildlife, culture, and adventure into
            unforgettable travel experiences.
          </p>

          {/* Fixed Stats Cards (Better Spacing & Alignment) */}
          <div className="mt-16 md:mt-20 flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 px-8 py-6 text-center text-white rounded-xl">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm mt-1">Curated Trips</div>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20 px-8 py-6 text-center text-white rounded-xl">
                <div className="text-4xl font-bold">100%</div>
                <div className="text-sm mt-1">Customizable</div>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20 px-8 py-6 text-center text-white rounded-xl">
                <div className="text-4xl font-bold">24/7</div>
                <div className="text-sm mt-1">Support</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Cards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Rwanda Itinerary */}
            <Link to="/itineraries/rwanda">
              <Card className="group overflow-hidden rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-safari-gold cursor-pointer h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={RwandaItineraries}
                    alt="Rwanda Itinerary"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-2xl font-bold">Rwanda Itineraries</h3>
                    <p className="text-white/90 text-sm">
                      Land of a Thousand Hills
                    </p>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Explore Rwanda’s stunning Volcanoes National Park, meet
                    mountain gorillas, and experience Kigali’s unique urban charm.
                  </p>
                  <div className="flex items-center text-safari-gold font-semibold hover:gap-3 gap-2 transition-all">
                    <span>Explore Rwanda Trips</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Card>
            </Link>

            {/* Uganda Itinerary */}
            <Link to="/itineraries/uganda">
              <Card className="group overflow-hidden rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-safari-gold cursor-pointer h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={UgandaItineraries}
                    alt="Uganda Itinerary"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-2xl font-bold">Uganda Itineraries</h3>
                    <p className="text-white/90 text-sm">The Pearl of Africa</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Discover Uganda’s hidden gems — from gorilla trekking in Bwindi
                    to scenic boat safaris along the Nile River.
                  </p>
                  <div className="flex items-center text-safari-gold font-semibold hover:gap-3 gap-2 transition-all">
                    <span>Explore Uganda Trips</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Card>
            </Link>

            {/* Tour Packages */}
            <Link to="/itineraries/packages">
              <Card className="group overflow-hidden rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-safari-gold cursor-pointer h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={PackageItineraries}
                    alt="Tour Packages"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-2xl font-bold">Tour Packages</h3>
                    <p className="text-white/90 text-sm">
                      Tailored For Every Explorer
                    </p>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Choose from expertly curated safari packages that combine
                    Rwanda and Uganda for the ultimate East African experience.
                  </p>
                  <div className="flex items-center text-safari-gold font-semibold hover:gap-3 gap-2 transition-all">
                    <span>View All Packages</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24 text-white text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d5b062]/30 via-[#111111] to-black" />
        <div className="container mx-auto px-4 relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold">
            Let’s Craft Your Dream Safari
          </h3>
          <p className="mt-4 text-white/80 max-w-3xl mx-auto">
            Whether you’re looking for adventure, relaxation, or cultural immersion,
            our custom itineraries are designed to fit your dream journey.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Itineraries;
