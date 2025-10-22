import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import akageraImage from "@/Assets/akagera.jpg";
import ugandaImage from "@/Assets/uganda.jpg";

const destinations = [
  {
    name: "RWANDA",
    image: akageraImage,
    description: "Discover the land of a thousand hills",
    link: "/destinations/rwanda",
  },
  {
    name: "UGANDA",
    image: ugandaImage,
    description: "Explore the pearl of Africa",
    link: "/destinations/uganda",
  },
];

const Destinations = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-safari-darker mb-4">
            Our Destinations
          </h2>
          <p className="text-lg text-gray-600">
            Discover The Enchanting Beauty of East Africa.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-[400px]">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-safari-darker/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-4xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-white/90 mb-4">{destination.description}</p>

                  {/* Navigate to destination page */}
                  <Link to={destination.link}>
                    <Button
                      variant="outline"
                      className="border-2 border-white text-black hover:bg-white hover:text-safari-darker"
                    >
                      Explore
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
