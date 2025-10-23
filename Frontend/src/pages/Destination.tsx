import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroImage from "@/Assets/kivu.jpg";

import { useState } from "react";
import { TripPlannerDialog } from "../components/ui/trip-planner-dialog";

const Destination = () => {
  const [showTripPlanner, setShowTripPlanner] = useState(false);

  return (
    <div className="min-h-screen bg-white text-safari-darker">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 relative overflow-hidden min-h-[120vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={HeroImage} 
            alt="East Africa Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 mt-[-20vh]">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-safari-gold" />
            <span className="text-safari-gold font-medium">EXPLORE DESTINATIONS</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold">
            <span className="block text-white">Choose Your Perfect</span>
            <span className="block text-safari-gold">African Adventure</span>
          </h1>
          <p className="mt-4 max-w-4xl mx-auto text-white/90 text-lg">
            Embark on an extraordinary journey through East Africa's most captivating destinations. 
            From mountain gorillas to savannah safaris, create memories that will last a lifetime.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center text-white">
              <div className="text-4xl font-bold text-white">2</div>
              <div className="text-sm text-white">Countries</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center text-white">
              <div className="text-4xl font-bold text-white">8+</div>
              <div className="text-sm text-white">National Parks</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center text-white">
              <div className="text-4xl font-bold text-white">20+</div>
              <div className="text-sm text-white">Tour Options</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center text-white">
              <div className="text-4xl font-bold text-white">12/5</div>
              <div className="text-sm text-white">Support</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Destination Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Rwanda Card */}
            <Link to="/destinations/rwanda">
              <Card className="group overflow-hidden border-2 border-gray-200 hover:border-safari-gold transition-all duration-300 hover:shadow-2xl cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800"
                    alt="Rwanda - Gorilla Trekking"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">Rwanda</h3>
                    <p className="text-white/90">Land of a Thousand Hills</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-600 mb-4">
                    Experience the magic of mountain gorilla trekking in Volcanoes National Park, 
                    explore the lush rainforests, and discover Rwanda's vibrant culture and history.
                  </p>
                  <div className="flex items-center text-safari-gold font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>Explore Rwanda</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-safari-gold/10 text-safari-darker text-sm rounded-full">
                      Gorilla Trekking
                    </span>
                    <span className="px-3 py-1 bg-safari-gold/10 text-safari-darker text-sm rounded-full">
                      Wildlife Safari
                    </span>
                    <span className="px-3 py-1 bg-safari-gold/10 text-safari-darker text-sm rounded-full">
                      Cultural Tours
                    </span>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Uganda Card */}
            <Link to="/destinations/uganda">
              <Card className="group overflow-hidden border-2 border-gray-200 hover:border-safari-gold transition-all duration-300 hover:shadow-2xl cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800"
                    alt="Uganda - Pearl of Africa"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">Uganda</h3>
                    <p className="text-white/90">The Pearl of Africa</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-600 mb-4">
                    Trek to see mountain gorillas in Bwindi Forest, explore the scenic landscapes, 
                    encounter tree-climbing lions, and experience the source of the Nile.
                  </p>
                  <div className="flex items-center text-safari-gold font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>Explore Uganda</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-safari-gold/10 text-safari-darker text-sm rounded-full">
                      Gorilla Trekking
                    </span>
                    <span className="px-3 py-1 bg-safari-gold/10 text-safari-darker text-sm rounded-full">
                      Safari Tours
                    </span>
                    <span className="px-3 py-1 bg-safari-gold/10 text-safari-darker text-sm rounded-full">
                      Adventure Sports
                    </span>
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
          <h3 className="text-4xl md:text-5xl font-bold">Ready to Start Your Safari Adventure?</h3>
          <p className="mt-4 text-white/80 max-w-3xl mx-auto">
            Join thousands of travelers who discovered the magic of East Africa with us. Let's create
            memories that will last a lifetime.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Button 
              size="lg" 
              className="bg-safari-gold text-black hover:bg-safari-gold/90 font-semibold"
              onClick={() => setShowTripPlanner(true)}
            >
              Plan Your Custom Trip
            </Button>
            <Link to="/itineraries">
              <Button size="lg" variant="outline" className="bg-transparent text-white border border-white/30 hover:bg-white">View All Itineraries</Button>
            </Link>
          </div>

          <div className="mt-12 border-t border-white/10" />

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="text-4xl font-bold">10+</div>
              <div className="mt-2 text-sm text-white/70">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold">500+</div>
              <div className="mt-2 text-sm text-white/70">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold">50+</div>
              <div className="mt-2 text-sm text-white/70">Safari Tours</div>
            </div>
            <div>
              <div className="text-4xl font-bold">95%</div>
              <div className="mt-2 text-sm text-white/70">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Trip Planner Dialog */}
      <TripPlannerDialog 
        open={showTripPlanner} 
        onOpenChange={setShowTripPlanner}
      />
    </div>
  );
};

export default Destination;