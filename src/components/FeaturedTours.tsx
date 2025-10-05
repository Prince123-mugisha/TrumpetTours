import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import gorillaImage from "@/assets/gorilla-trek.jpg";
import wildlifeImage from "@/assets/wildlife-safari.jpg";
import lakeImage from "@/assets/lake-kivu.jpg";

const tours = [
  {
    id: 1,
    title: "8-Day Rwanda Safari & Gorilla Trekking",
    category: "Wildlife Safari",
    duration: "8 Days / 8 Nights",
    price: "$5,000",
    location: "Rwanda",
    image: gorillaImage,
    featured: true,
    description: "Join an 8-day Rwanda safari: gorilla trekking, chimpanzee tracking, and game drives, exploring...",
  },
  {
    id: 2,
    title: "4 Days Nyungwe National Park",
    category: "Adventure Tour",
    duration: "4 Days / 3 Nights",
    price: "$2,600",
    location: "Rwanda",
    image: lakeImage,
    featured: true,
    description: "Enjoy 4 days in Rwanda's Nyungwe National Park with canopy walks, zipline thrills, chimpanzees...",
  },
  {
    id: 3,
    title: "Uganda Gorilla & Wildlife Safari",
    category: "Wildlife Safari",
    duration: "6 Days / 5 Nights",
    price: "$3,450",
    location: "Uganda",
    image: wildlifeImage,
    featured: true,
    description: "Experience Uganda's premier wildlife destinations with mountain gorilla trekking in Bwindi...",
  },
];

const FeaturedTours = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-safari-gold/10 border border-safari-gold/30 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-safari-gold rounded-full" />
            <span className="text-safari-gold text-sm font-medium">FEATURED TOURS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-safari-darker mb-4">
            SAFARI EXPERIENCES
          </h2>
          <p className="text-lg text-gray-600">
            Discover Eastern Africa's wildlife and landscapes through expertly guided adventures.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tours.map((tour) => (
            <Card key={tour.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-white text-safari-darker border-0">
                    {tour.duration}
                  </Badge>
                  {tour.featured && (
                    <Badge className="bg-safari-gold text-safari-darker border-0">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white px-3 py-2 rounded-lg font-bold text-safari-darker">
                    {tour.price}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center text-sm text-safari-gold font-medium">
                  {tour.category}
                </div>
                <h3 className="text-xl font-bold text-safari-darker group-hover:text-safari-gold transition-colors">
                  {tour.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tour.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {tour.location}
                  </div>
                  <Button variant="ghost" className="text-safari-gold hover:text-safari-darker hover:bg-safari-gold/10">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Browse All Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-safari-gold text-safari-darker hover:bg-safari-gold/90 font-semibold px-8"
          >
            BROWSE ALL TOURS
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
