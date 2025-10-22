import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@/Assets/nyungwe.jpg";
import storyImage from "@/Assets/akagerarwanda.jpg";
import { TripPlannerDialog } from "@/components/ui/trip-planner-dialog";
import { useState } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-safari-darker">
      <Navigation />
      <TripPlannerDialog open={plannerOpen} onOpenChange={setPlannerOpen} />

      {/* Hero */}
      <section className="pt-28 md:pt-32 relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Rwanda Landscape" 
            className="w-full h-full object-cover"
            style={{ display: 'block' }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 text-center text-white relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-black/40 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-safari-gold" />
            <span className="text-safari-gold font-medium">ABOUT TRUMPET TOURS</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold">
            <span className="block text-white">Creating Unforgettable</span>
            <span className="block text-safari-gold">Safari Adventures</span>
          </h1>
          <p className="mt-4 max-w-4xl mx-auto text-white/90 text-lg">
            For over 15 years, we've been crafting extraordinary wildlife experiences across East Africa, connecting
            travelers with the raw beauty and rich cultures of Rwanda, Uganda, Kenya, and Tanzania.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <Button 
              size="lg" 
              className="bg-safari-gold text-black hover:bg-safari-gold/90 font-semibold"
              onClick={() => setPlannerOpen(true)}
            >
              Plan Your Trip
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-white">
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center text-white">
              <div className="text-4xl font-bold text-white">15+</div>
              <div className="text-sm text-white">Years Experience</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center text-white">
              <div className="text-4xl font-bold text-white">5,000+</div>
              <div className="text-sm text-white">Happy Travelers</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center text-white">
              <div className="text-4xl font-bold text-white">50+</div>
              <div className="text-sm text-white">Safari Tours</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center text-white">
              <div className="text-4xl font-bold text-white">99%</div>
              <div className="text-sm text-white">Success Rate</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-safari-gold/10 border border-safari-gold/30">
              <span className="w-2 h-2 rounded-full bg-safari-gold" />
              <span className="text-safari-gold font-medium">OUR STORY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Born from a Passion for East Africa</h2>
            <p className="text-gray-600">
              Rwanda Trumpet Tours was founded with a simple yet profound mission: to share the breathtaking beauty and
              incredible wildlife of East Africa with the world. Our name represents that magical moment when everything
              aligns perfectly.
            </p>
            <p className="text-gray-600">
              What started as a small operation run by passionate conservationists has grown into East Africa's premier
              safari company. We craft authentic experiences, support sustainable tourism, and create genuine connections
              with local communities.
            </p>
          </div>
          <div>
            <img src={storyImage} alt="Elephant in East Africa" className="w-full h-[420px] object-cover rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h3 className="text-3xl md:text-4xl font-bold">Our Mission & Values</h3>
            <p className="mt-4 text-gray-600">
              Everything we do is guided by our commitment to exceptional safari experiences while supporting
              conservation efforts and local communities across East Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Conservation First",
                desc: "We partner with local conservation organizations to protect wildlife and their habitats for future generations.",
              },
              {
                title: "Community Support",
                desc: "Every safari directly supports local communities through employment, partnerships, and sustainable tourism.",
              },
              {
                title: "Authentic Experiences",
                desc: "We create genuine connections with local cultures and provide access to hidden gems off the beaten path.",
              },
              {
                title: "Sustainable Tourism",
                desc: "Our eco–friendly approach ensures tourism benefits both wildlife and local communities.",
              },
              {
                title: "Expert Guidance",
                desc: "Experienced guides share deep knowledge of wildlife behavior, local history, and culture.",
              },
              {
                title: "Excellence",
                desc: "We maintain the highest standards in safety, comfort, and service to exceed expectations.",
              },
            ].map((item) => (
              <Card key={item.title} className="bg-white p-6 border border-gray-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-safari-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
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
              onClick={() => setPlannerOpen(true)}
            >
              Plan Your Custom Trip
            </Button>
            <Link to="/Destination">
              <Button size="lg" variant="outline" className="bg-transparent text-white border border-white/30 hover:bg-white">View All Tours</Button>
            </Link>
          </div>

          <div className="mt-12 border-t border-white/10" />

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="text-4xl font-bold">15+</div>
              <div className="mt-2 text-sm text-white/70">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold">5,000+</div>
              <div className="mt-2 text-sm text-white/70">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold">50+</div>
              <div className="mt-2 text-sm text-white/70">Safari Tours</div>
            </div>
            <div>
              <div className="text-4xl font-bold">99%</div>
              <div className="mt-2 text-sm text-white/70">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;


