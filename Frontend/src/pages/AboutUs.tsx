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
            "Just as an elephant's trumpet sound expresses excitement, we aim to captivate and excite travelers 
            with our unique wildlife adventures in Rwanda and Uganda, creating unforgettable experiences that touch your soul."
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-white">
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center text-white">
              <div className="text-4xl font-bold text-white">10+</div>
              <div className="text-sm text-white">Years Experience</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center text-white">
              <div className="text-4xl font-bold text-white">500+</div>
              <div className="text-sm text-white">Happy Travelers</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center text-white">
              <div className="text-4xl font-bold text-white">50+</div>
              <div className="text-sm text-white">Safari Tours</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center text-white">
              <div className="text-4xl font-bold text-white">95%</div>
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
              Based in the heart of Africa, Kigali, Rwanda, Trumpet Tours is your premier tour company specializing in 
              meticulously crafted mountain gorilla trekking and wildlife safaris in Rwanda and beyond. As a fully 
              registered and recognized tour company, our commitment to excellence shines through in every aspect of our service.
            </p>
            <p className="text-gray-600">
              From wildlife game drives to cultural immersions, our experienced team ensures your journey is not only safe 
              and enjoyable but also deeply enriching. Our passion for showcasing the beauty and diversity of East Africa's 
              landscapes and wildlife is evident in our carefully curated itineraries, which offer a blend of adventure, 
              education, and relaxation.
            </p>
            <p className="text-gray-600">
              Whether you're seeking the thrill of encountering mountain gorillas in their natural habitat, the serenity 
              of a sunset game drive across the savannah, or the cultural richness of a village visit, we tailor each 
              experience to exceed your expectations.
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
            <h3 className="text-3xl md:text-4xl font-bold">Why Choose Us</h3>
            <p className="mt-4 text-gray-600">
              At Trumpet Tours, we strive to provide exceptional experiences through our commitment to quality service,
              sustainable practices, and personalized attention to every traveler's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Non-stop availability",
                desc: "We take great pride in our continuous accessibility, guaranteeing round-the-clock availability to fulfill your travel desires and organize exceptional journeys.",
              },
              {
                title: "Wallet-friendly charges",
                desc: "We offer a range of options from luxurious accommodations to budget-friendly alternatives, ensuring quality experiences that fit your budget.",
              },
              {
                title: "Professional Guides",
                desc: "Our experienced and knowledgeable guides offer unparalleled expertise, ensuring a rich and immersive experience for our travelers.",
              },
              {
                title: "Top-tier 4X4 safari vehicles",
                desc: "We provide comfortable 4X4 safari vehicles equipped with fridges, WiFi, and charging ports, ensuring a luxurious and practical journey.",
              },
              {
                title: "Personalized Client Care",
                desc: "Each tourist receives our undivided attention throughout their journey, with tailored experiences that exceed expectations.",
              },
              {
                title: "Eco-friendly Travel",
                desc: "We emphasize sustainable tourism practices, collaborating with local communities and conservation groups to benefit both environment and residents.",
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
    </div>
  );
};

export default AboutUs;


