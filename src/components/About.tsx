import { Button } from "@/components/ui/button";
import { Star, Award, Users, Leaf } from "lucide-react";
import aboutImage from "@/assets/about-wildlife.jpg";

const features = [
  {
    icon: Star,
    title: "Expertly Crafted Itineraries",
    description: "Every journey is meticulously planned with local insights and hidden gems",
  },
  {
    icon: Award,
    title: "Personalized Support",
    description: "24/7 dedicated support throughout your East African adventure",
  },
  {
    icon: Users,
    title: "Authentic Experiences",
    description: "Connect with local cultures and communities for genuine encounters",
  },
  {
    icon: Leaf,
    title: "Sustainable Tourism",
    description: "Travel with purpose while supporting conservation and local communities",
  },
];

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Wildlife in Rwanda"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-safari-gold flex items-center justify-center text-safari-darker font-bold border-2 border-white">
                      S
                    </div>
                    <div className="w-10 h-10 rounded-full bg-safari-darker flex items-center justify-center text-white font-bold border-2 border-white">
                      J
                    </div>
                    <div className="w-10 h-10 rounded-full bg-safari-gold flex items-center justify-center text-safari-darker font-bold border-2 border-white">
                      M
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-safari-darker">3K+</div>
                    <div className="text-sm text-gray-600">Happy Travelers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-safari-gold/10 border border-safari-gold/30 rounded-full px-4 py-2 mb-4">
                <span className="w-2 h-2 bg-safari-gold rounded-full" />
                <span className="text-safari-gold text-sm font-medium">ABOUT US</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-safari-darker mb-4">
                Crafting Unforgettable Journeys,
              </h2>
              <p className="text-2xl font-serif italic text-gray-700 mb-6">
                One Traveler <span className="text-safari-gold">at a Time</span>
              </p>
              <p className="text-gray-600 leading-relaxed">
                At Trumpet Safari Tours, we believe that travel is more than just
                moving from one place to another — it's about immersing yourself in new
                cultures, connecting with people, and collecting moments that stay with
                you forever.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <div className="w-12 h-12 rounded-lg bg-safari-gold/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-safari-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-safari-darker">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="bg-safari-gold text-safari-darker hover:bg-safari-gold/90 font-semibold"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export default About;
