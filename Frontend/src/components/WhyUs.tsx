import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Handshake, Shield, ChevronRight } from "lucide-react";
import { useState } from "react";
import { TripPlannerDialog } from "@/components/ui/trip-planner-dialog";

const WhyUs = () => {
  const [showTripPlanner, setShowTripPlanner] = useState(false);

  return (
    <>
      <section className="py-24 bg-white text-safari-darker">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-safari-gold/10 border border-safari-gold/30 text-sm">
              <span className="w-2 h-2 rounded-full bg-safari-gold" />
              <span className="text-safari-gold font-medium">WHY CHOOSE US</span>
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              Your Trusted Safari Partner Since 2009
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              With over 10 years of expertise, we craft extraordinary East African adventures while supporting
              local communities and conservation efforts.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border border-gray-200 p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-safari-gold/10 flex items-center justify-center mb-4">
                <Trophy className="text-safari-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Award–Winning Excellence</h3>
              <p className="text-gray-600 text-sm">Recognized across East Africa with multiple tourism awards and certifications.</p>
              <div className="mt-4 inline-flex text-xs px-3 py-1 rounded-full bg-safari-gold/10 border border-safari-gold/30 text-safari-darker">5 Awards</div>
            </Card>

            <Card className="bg-white border border-gray-200 p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-safari-gold/10 flex items-center justify-center mb-4">
                <Users className="text-safari-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Local Guides</h3>
              <p className="text-gray-600 text-sm">Certified guides with deep knowledge of wildlife behavior, culture, and nature.</p>
              <div className="mt-4 inline-flex text-xs px-3 py-1 rounded-full bg-safari-gold/10 border border-safari-gold/30 text-safari-darker">10+ Expert Guides</div>
            </Card>

            <Card className="bg-white border border-gray-200 p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-safari-gold/10 flex items-center justify-center mb-4">
                <Handshake className="text-safari-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Partnerships</h3>
              <p className="text-gray-600 text-sm">Strong relationships with conservancies, communities, and premium lodges.</p>
              <div className="mt-4 inline-flex text-xs px-3 py-1 rounded-full bg-safari-gold/10 border border-safari-gold/30 text-safari-darker">15+ Partners</div>
            </Card>

            <Card className="bg-white border border-gray-200 p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-safari-gold/10 flex items-center justify-center mb-4">
                <Shield className="text-safari-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety & Insurance</h3>
              <p className="text-gray-600 text-sm">Comprehensive insurance, emergency protocols, and 24/7 support during your journey.</p>
              <div className="mt-4 inline-flex text-xs px-3 py-1 rounded-full bg-safari-gold/10 border border-safari-gold/30 text-safari-darker">80% Coverage</div>
            </Card>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 flex items-center justify-center gap-4 flex-wrap">
            <Button 
              size="lg" 
              className="bg-safari-gold text-safari-darker hover:bg-safari-gold/90 font-semibold"
              onClick={() => setShowTripPlanner(true)}
            >
              Start Planning Your Trip 
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <a href="https://wa.me/250793766308?text=Hello!%20I%20need%20help%20with%20my%20travel%20inquiry." target="_blank" rel="noopener noreferrer" aria-label="Contact on WhatsApp">
              <Button size="lg" className="bg-[#25D366] text-white hover:bg-[#1DA851] font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="mr-2 h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M19.11 17.34c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.68.15-.2.29-.78.94-.96 1.13-.18.2-.36.22-.65.08-.29-.15-1.23-.45-2.35-1.43-.87-.77-1.45-1.72-1.62-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.3-.49.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.53.08-.81.38-.27.29-1.06 1.04-1.06 2.53s1.09 2.94 1.24 3.14c.15.2 2.15 3.28 5.21 4.6.73.32 1.29.51 1.73.65.73.23 1.39.2 1.91.12.58-.09 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.37-.07-.13-.26-.21-.55-.36z"/>
                  <path d="M16.02 3.05C9.41 3.05 4.07 8.39 4.07 15c0 2.11.55 4.08 1.51 5.79L4 28l7.38-1.53c1.65.9 3.54 1.41 5.64 1.41 6.61 0 11.95-5.34 11.95-11.95S22.63 3.05 16.02 3.05zm0 21.74c-1.9 0-3.66-.56-5.14-1.53l-.37-.24-4.37.91.93-4.26-.24-.4c-.92-1.52-1.45-3.3-1.45-5.18 0-5.47 4.45-9.92 9.92-9.92s9.92 4.45 9.92 9.92-4.45 9.92-9.92 9.92z"/>
                </svg>
                Contact on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Trip Planner Dialog */}
      <TripPlannerDialog 
        open={showTripPlanner} 
        onOpenChange={setShowTripPlanner}
      />
    </>
  );
};

export default WhyUs;


