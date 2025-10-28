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
import missionImage from "@/Assets/Mission.jpeg";
import vissionImage from "@/Assets/vission.jpeg";

const AboutUs = () => {
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-safari-darker">
      <Navigation />
      <TripPlannerDialog open={plannerOpen} onOpenChange={setPlannerOpen} />

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Rwanda Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 py-24 md:py-32 text-center text-white relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-black/40 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-safari-gold" />
            <span className="text-safari-gold font-medium">
              ABOUT TRUMPET TOURS
            </span>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            <span className="block text-white">Creating Unforgettable</span>
            <span className="block text-safari-gold">Safari Adventures</span>
          </h1>

          <p className="mt-4 max-w-4xl mx-auto text-white/90 text-lg">
            "Just as an elephant's trumpet sound expresses excitement, we aim to
            captivate and excite travelers with our unique wildlife adventures
            in Rwanda and Uganda, creating unforgettable experiences that touch
            your soul."
          </p>

          {/* Stats Cards */}
          <div className="mt-14 flex flex-wrap justify-center gap-6">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Happy Travelers" },
              { value: "50+", label: "Safari Tours" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="w-40 md:w-48 bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center shadow-lg"
              >
                <div className="text-4xl font-bold text-safari-gold">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-white/80">{stat.label}</div>
              </Card>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold">
              Born from a Passion for East Africa
            </h2>
            <p className="text-gray-600">
              Welcome to Trumpet Tours, your premier tour company based in the
              heart of Africa, Kigali, Rwanda. With a dedication to providing
              unforgettable experiences, we specialize in meticulously crafted
              mountain gorilla trekking and wildlife safaris in Rwanda and
              beyond. As a fully registered and recognized tour company, our
              commitment to excellence shines through in every aspect of our
              service.
            </p>
            <p className="text-gray-600">
              From wildlife game drives to cultural immersions, our experienced
              team ensures your journey is not only safe and enjoyable but also
              deeply enriching. Our passion for showcasing the beauty and diversity 
              of East Africa's landscapes and wildlife is evident in our carefully 
              curated itineraries, which offer a blend of adventure, education, 
              and relaxation.
            </p>
            <p className="text-gray-600">
              Whether you're seeking the thrill of encountering mountain gorillas 
              in their natural habitat, the serenity of a sunset game drive across 
              the savannah, or the cultural richness of a village visit, we tailor
              each experience to exceed your expectations. With a fleet of
              well-maintained safari vehicles and knowledgeable guides, we
              invite you to explore Rwanda, Uganda, and beyond with us,
              unlocking the wonders of Africa's premier safari destinations.
            </p>
            <p className="text-gray-600">
              Our commitment to sustainable tourism practices ensures that your
              travels not only benefit you but also contribute to the
              conservation of the natural environment and support local
              communities. Join us on an exceptional journey through the
              breathtaking landscapes and iconic wildlife of East Africa, where
              every moment is crafted to leave a lasting imprint on your soul.
            </p>
          </div>

          <div>
            <img
              src={storyImage}
              alt="Elephant in East Africa"
              className="w-full h-[420px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={missionImage}
                  alt="Mission" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-8">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-safari-gold/10 border border-safari-gold/30 mb-4">
                  <span className="w-2 h-2 rounded-full bg-safari-gold" />
                  <span className="text-safari-gold font-medium">OUR MISSION</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To ignite the spirit of adventure in every traveler's heart by curating unforgettable journeys 
                  that connect people with the world's most captivating destinations. Through our passion for 
                  sustainable tourism and commitment to excellence, we strive to deliver exceptional travel experiences.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={vissionImage}
                  alt="Vision" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-8">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-safari-gold/10 border border-safari-gold/30 mb-4">
                  <span className="w-2 h-2 rounded-full bg-safari-gold" />
                  <span className="text-safari-gold font-medium">OUR VISION</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be a leading tour and travel company that empowers sustainable exploration through 
                  outstanding travel services and innovative technology while preserving the world's natural beauty. 
                  Join us in forging a future where travel enriches both the traveler and the planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h3 className="text-3xl md:text-4xl font-bold">Why Choose Us</h3>
            <p className="mt-4 text-gray-600">
              At Trumpet Tours, we strive to provide exceptional experiences
              through our commitment to quality service, sustainable practices,
              and personalized attention to every traveler's needs.
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
              <Card
                key={item.title}
                className="bg-white p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
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
          <h3 className="text-4xl md:text-5xl font-bold">
            Ready to Start Your Safari Adventure?
          </h3>
          <p className="mt-4 text-white/80 max-w-3xl mx-auto">
            Join thousands of travelers who discovered the magic of East Africa
            with us. Let's create memories that will last a lifetime.
          </p>

          {/* CTA Stats Cards */}
          <div className="mt-14 flex flex-wrap justify-center gap-6">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Happy Travelers" },
              { value: "50+", label: "Safari Tours" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="w-40 md:w-48 bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center shadow-md"
              >
                <div className="text-4xl font-bold text-safari-gold">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-white/80">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
