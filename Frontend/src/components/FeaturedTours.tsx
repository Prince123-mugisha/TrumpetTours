import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import nyungweImage from "@/Assets/nyungwe.jpg";
import photoImage from "@/Assets/photo.jpg";
import vurungaImage from "@/Assets/vurunga.jpg";
import golillaImage from "@/Assets/gollilla.jpg";
import ugandaImage from "@/Assets/uganda.jpg";
import kivuImage from "@/Assets/kivu.jpg"
import akageraImage from "@/Assets/akagera1.jpg"
import fazender from "@/Assets/fazender.webp"
import {Link} from "react-router-dom";
// use public Images folder paths

const tours = [
  {
    id: 1,
    title: "8-Day Rwanda Safari & Gorilla Trekking",
    category: "Wildlife Safari",
    duration: "8 Days / 8 Nights",
    location: "Rwanda",
    image: golillaImage,
    featured: true,
    description: "Join an 8-day Rwanda safari: gorilla trekking, chimpanzee tracking, and game drives, exploring...",
  },
  {
    id: 2,
    title: "4 Days Nyungwe National Park",
    category: "Adventure Tour",
    duration: "4 Days / 3 Nights",
    location: "Rwanda",
    image: nyungweImage,
    featured: true,
    description: "Enjoy 4 days in Rwanda's Nyungwe National Park with canopy walks, zipline thrills, chimpanzees...",
  },
  {
    id: 3,
    title: "Uganda Gorilla & Wildlife Safari",
    category: "Wildlife Safari",
    duration: "6 Days / 5 Nights",
    location: "Uganda",
    image: ugandaImage,
    featured: true,
    description: "Experience Uganda's premier wildlife destinations with mountain gorilla trekking in Bwindi...",
  },
  {
    id: 4,
    title: "6 days Kivu Lake tour ",
    category: "Kivu Lake tour",
    duration: "6 Days / 5 Nights",
    location: "Rwanda",
    image: kivuImage,
    featured: true,
    description: "Experience Kivu Lake tour and  beautiful scenery",
  },
  {
    id: 5,
    title: "2 days in Akagera national park tour",
    category: "Akagera national park tour",
    duration: "6 Days / 5 Nights",
    location: "Rwanda",
    image: akageraImage,
    featured: true,
    description: "having 2 days in Akagera national park tour with beautiful scenery"},
  {
    id: 6,
    title: "1 day Fazender tour with driving horses",
    category: "Fazender tour",
    duration: "1 Day",
    location: "Rwanda",
    image: fazender,
    featured: true,
    description: "Experience  to  drive horses in Fazender",
  },
];

const FeaturedTours = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-safari-gold/10 border border-safari-gold/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-safari-gold rounded-full" />
              <span className="text-safari-gold text-sm font-medium">OUR POPULAR TOURS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-safari-darker">
              Best Gorilla and Wildlife
              <br />
              With Trumpet
            </h2>
            <p className="text-lg text-gray-600">
              Embark on unforgettable adventures and explore diverse itineraries
              promising ultimate exploration. Our most popular tours include
              thrilling gorilla encounters and captivating wildlife expeditions,
              taking you deep into nature's wonders. Traverse lush forests,
              encounter majestic creatures, and create lasting memories on every
              journey with Trumpet Tours.
            </p>
            <Link to="/Destination">
            <Button className="bg-safari-gold text-safari-darker hover:bg-safari-gold/90 font-semibold">
              Discover more
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 mt-12">
                <div className="relative h-64">
                  <img src={nyungweImage} alt="Nyungwe National Park" loading="eager" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/60" />
                  <p className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm">
                   Nyungwe Forest Experience
                  </p>
                </div>
              </Card>
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <img src={photoImage} alt="Rwanda Scenery" loading="eager" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/60" />
                  <p className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm">
                  Rwanda gakagera  international park experience
                  </p>
                </div>
              </Card>
            </div>
            <div className="space-y-4">
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 mt-12">
                <div className="relative h-64">
                  <img src={vurungaImage} alt="Virunga Mountains" loading="eager" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/60" />
                  <p className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm">
                    Virunga tour experience
                  </p>
                </div>
              </Card>
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <img src={golillaImage} alt="Mountain Gorilla" loading="eager" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/60" />
                  <p className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm">
                    Gorilla Trekking Experience
                  </p>
                </div>
              </Card>
            </div>
          </div>
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
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Browse All Button */}
        <div className="text-center">
          <Link to="/destinations/rwanda">
          <Button
            size="lg"
            className="bg-safari-gold text-safari-darker hover:bg-safari-gold/90 font-semibold px-8"
          >
            BROWSE ALL TOURS
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
