import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { ItineraryDialog } from "@/components/ui/itinerary-dialog";
import { Link } from "react-router-dom";

// Import your images
import nyungweImage from "@/Assets/nyungwe.jpg";
import photoImage from "@/Assets/photo.jpg";
import vurungaImage from "@/Assets/vurunga.jpg";
import golillaImage from "@/Assets/gollilla.jpg";
import ugandaImage from "@/Assets/uganda.jpg";
import kivuImage from "@/Assets/kivu.jpg";
import akageraImage from "@/Assets/akagera1.jpg";
import fazender from "@/Assets/fazender.webp";

// Detailed itineraries for each tour
const tourItineraries = {
  1: {
    days: [
      {
        day: 1,
        activities: [
          "Arrival at Kigali International Airport",
          "Welcome briefing and orientation",
          "Transfer to accommodation",
          "Evening city tour of Kigali",
          "Welcome dinner"
        ]
      },
      {
        day: 2,
        activities: [
          "Early breakfast",
          "Transfer to Volcanoes National Park",
          "Visit Genocide Memorial en route",
          "Check-in at lodge near the park",
          "Evening briefing on gorilla trekking"
        ]
      },
      {
        day: 3,
        activities: [
          "Early morning gorilla trekking experience",
          "Face-to-face encounter with mountain gorillas",
          "Photography session in the forest",
          "Afternoon cultural village visit",
          "Traditional dance performance"
        ]
      },
      {
        day: 4,
        activities: [
          "Transfer to Nyungwe National Park",
          "Scenic drive through tea plantations",
          "Lunch en route",
          "Evening forest walk",
          "Overnight at forest lodge"
        ]
      },
      {
        day: 5,
        activities: [
          "Early morning chimpanzee tracking",
          "Primate observation and photography",
          "Afternoon canopy walk experience",
          "Bird watching session",
          "Return to lodge for dinner"
        ]
      },
      {
        day: 6,
        activities: [
          "Transfer to Akagera National Park",
          "Afternoon game drive",
          "Big Five wildlife viewing",
          "Sunset over the savanna",
          "Overnight at safari lodge"
        ]
      },
      {
        day: 7,
        activities: [
          "Early morning game drive",
          "Boat safari on Lake Ihema",
          "Hippo and crocodile spotting",
          "Afternoon at leisure",
          "Evening sundowner experience"
        ]
      },
      {
        day: 8,
        activities: [
          "Morning nature walk",
          "Transfer back to Kigali",
          "Lunch and souvenir shopping",
          "Airport drop-off",
          "Departure"
        ]
      }
    ],
    included: [
      "Gorilla trekking permit ($1500)",
      "Chimpanzee tracking permit",
      "All park entrance fees",
      "Luxury accommodation throughout",
      "Full board meals (breakfast, lunch, dinner)",
      "Professional English-speaking guide",
      "4x4 safari vehicle with pop-up roof",
      "Airport transfers",
      "Bottled water during activities",
      "Cultural activities and performances"
    ],
    excluded: [
      "International flights to/from Kigali",
      "Rwanda visa fees ($50)",
      "Travel insurance",
      "Personal expenses and shopping",
      "Tips and gratuities for guides and staff",
      "Alcoholic beverages",
      "Optional activities not listed",
      "Laundry services"
    ],
    accommodation: [
      "Kigali: Kigali Serena Hotel (Luxury)",
      "Volcanoes: Sabyinyo Silverback Lodge (5-star)",
      "Nyungwe: One&Only Nyungwe House (Luxury)",
      "Akagera: Magashi Camp (Exclusive tented camp)"
    ]
  },
  2: {
    days: [
      {
        day: 1,
        activities: [
          "Arrival in Kigali",
          "Transfer to Nyungwe National Park",
          "Check-in at forest lodge",
          "Evening nature walk",
          "Briefing on forest activities"
        ]
      },
      {
        day: 2,
        activities: [
          "Early morning chimpanzee tracking",
          "Forest primate observation",
          "Afternoon canopy walk (70m above forest floor)",
          "Waterfall hike",
          "Evening relaxation"
        ]
      },
      {
        day: 3,
        activities: [
          "Zipline adventure through the forest",
          "Colobus monkey tracking",
          "Visit tea plantation",
          "Tea tasting experience",
          "Cultural village visit"
        ]
      },
      {
        day: 4,
        activities: [
          "Morning bird watching",
          "Nature photography session",
          "Transfer back to Kigali",
          "Souvenir shopping",
          "Departure"
        ]
      }
    ],
    included: [
      "Chimpanzee tracking permit",
      "Canopy walk fees",
      "Zipline experience",
      "All park entrance fees",
      "Accommodation for 3 nights",
      "All meals",
      "Professional guide",
      "Transportation",
      "Bottled water"
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
      "Tips for guides",
      "Alcoholic drinks"
    ],
    accommodation: [
      "Nyungwe: Nyungwe Top View Hill Hotel",
      "Nyungwe: One&Only Nyungwe House (upgrade option)",
      "Kigali: Day room at airport hotel if needed"
    ]
  },
  3: {
    days: [
      {
        day: 1,
        activities: [
          "Arrival at Entebbe International Airport",
          "Transfer to Kampala hotel",
          "City orientation tour",
          "Welcome dinner",
          "Briefing on safari activities"
        ]
      },
      {
        day: 2,
        activities: [
          "Early departure to Bwindi Impenetrable Forest",
          "Scenic drive through countryside",
          "Stop at Equator crossing for photos",
          "Lunch en route",
          "Evening arrival and check-in"
        ]
      },
      {
        day: 3,
        activities: [
          "Gorilla trekking in Bwindi Forest",
          "Up to 1 hour with gorilla family",
          "Photography and observation",
          "Afternoon Batwa community visit",
          "Traditional cultural performance"
        ]
      },
      {
        day: 4,
        activities: [
          "Transfer to Queen Elizabeth National Park",
          "Afternoon game drive",
          "Wildlife spotting (elephants, lions, buffaloes)",
          "Sunset viewing",
          "Overnight at safari lodge"
        ]
      },
      {
        day: 5,
        activities: [
          "Morning game drive in Ishasha sector",
          "Tree-climbing lions viewing",
          "Afternoon boat cruise on Kazinga Channel",
          "Hippo and bird watching",
          "Evening relaxation"
        ]
      },
      {
        day: 6,
        activities: [
          "Final morning game drive",
          "Transfer back to Kampala/Entebbe",
          "Lunch at Igongo Cultural Centre",
          "Airport drop-off",
          "Departure"
        ]
      }
    ],
    included: [
      "Uganda gorilla trekking permit ($700)",
      "All park entrance fees",
      "Accommodation for 5 nights",
      "Full board meals",
      "4x4 safari vehicle",
      "Professional driver-guide",
      "Boat cruise on Kazinga Channel",
      "Cultural activities",
      "Airport transfers"
    ],
    excluded: [
      "International flights",
      "Uganda visa ($50)",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities",
      "Drinks at lodges"
    ],
    accommodation: [
      "Kampala: Sheraton Kampala Hotel",
      "Bwindi: Buhoma Lodge or Silverback Lodge",
      "Queen Elizabeth: Mweya Safari Lodge",
      "All lodges offer comfort and great views"
    ]
  },
  4: {
    days: [
      {
        day: 1,
        activities: [
          "Arrival in Kigali",
          "Transfer to Lake Kivu",
          "Check-in at lakeside resort",
          "Evening beach relaxation",
          "Welcome dinner with lake views"
        ]
      },
      {
        day: 2,
        activities: [
          "Morning kayaking on Lake Kivu",
          "Visit to local fishing village",
          "Traditional boat ride",
          "Lunch at waterfront restaurant",
          "Afternoon swimming and beach activities"
        ]
      },
      {
        day: 3,
        activities: [
          "Island hopping tour",
          "Visit Napoleon Island",
          "Coffee plantation tour",
          "Coffee tasting experience",
          "Sunset cruise on the lake"
        ]
      },
      {
        day: 4,
        activities: [
          "Morning cycling along lake shore",
          "Visit local markets",
          "Water sports activities (optional)",
          "Spa and wellness time",
          "Farewell dinner"
        ]
      },
      {
        day: 5,
        activities: [
          "Leisure morning at resort",
          "Optional hot springs visit",
          "Lunch",
          "Transfer to Kigali",
          "Departure"
        ]
      }
    ],
    included: [
      "Accommodation at Lake Kivu resort",
      "All meals (breakfast, lunch, dinner)",
      "Boat trips and island tours",
      "Kayaking equipment",
      "Coffee plantation tour",
      "Transportation",
      "Professional guide",
      "Water sports equipment"
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Spa treatments",
      "Alcoholic beverages",
      "Personal expenses",
      "Tips"
    ],
    accommodation: [
      "Lake Kivu Serena Hotel",
      "Cormoran Lodge",
      "Lake Kivu Resort options available"
    ]
  },
  5: {
    days: [
      {
        day: 1,
        activities: [
          "Early morning departure from Kigali",
          "Drive to Akagera National Park (2.5 hours)",
          "Check-in at safari lodge",
          "Afternoon game drive",
          "Big Five tracking",
          "Sunset viewing",
          "Dinner at lodge"
        ]
      },
      {
        day: 2,
        activities: [
          "Early morning game drive",
          "Wildlife viewing (lions, elephants, giraffes, zebras)",
          "Mid-morning boat safari on Lake Ihema",
          "Hippo and crocodile spotting",
          "Bird watching (over 500 species)",
          "Afternoon at leisure",
          "Evening night game drive",
          "Return to Kigali or overnight"
        ]
      }
    ],
    included: [
      "Park entrance fees (2 days)",
      "Professional safari guide",
      "Game drives in 4x4 vehicle",
      "Boat safari on Lake Ihema",
      "Accommodation (1 night)",
      "All meals",
      "Bottled water",
      "Night game drive"
    ],
    excluded: [
      "Transportation from/to Kigali (can be arranged)",
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips for guide and staff",
      "Optional activities"
    ],
    accommodation: [
      "Ruzizi Tented Lodge (luxury tents)",
      "Karenge Bush Camp (mid-range)",
      "Magashi Camp (ultra-luxury option)",
      "All with stunning savanna views"
    ]
  },
  6: {
    days: [
      {
        day: 1,
        activities: [
          "Morning departure from Kigali",
          "Drive to Fazender Farm (45 minutes)",
          "Arrival and safety briefing",
          "Introduction to horses",
          "Horse riding experience through scenic trails",
          "Guided tour of the farm",
          "Traditional lunch at farm restaurant",
          "Optional farm activities (feeding animals, farm tour)",
          "Afternoon tea and relaxation",
          "Return to Kigali"
        ]
      }
    ],
    included: [
      "Round-trip transportation from Kigali",
      "Professional horse riding instructor",
      "Safety equipment (helmet, boots)",
      "Horse riding experience (2-3 hours)",
      "Farm tour",
      "Lunch at farm restaurant",
      "Refreshments and snacks",
      "Insurance during activities"
    ],
    excluded: [
      "Personal expenses",
      "Tips for instructors and staff",
      "Additional food and drinks beyond included",
      "Optional extra riding sessions",
      "Souvenirs"
    ],
    accommodation: [
      "Day trip - no accommodation required",
      "Hotel recommendations in Kigali available if needed"
    ]
  }
};

const tours = [
  {
    id: 1,
    title: "8-Day Rwanda Safari & Gorilla Trekking",
    category: "Wildlife Safari",
    duration: "8 Days / 7 Nights",
    location: "Rwanda",
    image: golillaImage,
    featured: true,
    description: "Join an 8-day Rwanda safari: gorilla trekking, chimpanzee tracking, and game drives, exploring the best of Rwanda's wildlife and landscapes.",
  },
  {
    id: 2,
    title: "4 Days Nyungwe National Park",
    category: "Adventure Tour",
    duration: "4 Days / 3 Nights",
    location: "Rwanda",
    image: nyungweImage,
    featured: true,
    description: "Enjoy 4 days in Rwanda's Nyungwe National Park with canopy walks, zipline thrills, chimpanzee tracking, and pristine forest exploration.",
  },
  {
    id: 3,
    title: "Uganda Gorilla & Wildlife Safari",
    category: "Wildlife Safari",
    duration: "6 Days / 5 Nights",
    location: "Uganda",
    image: ugandaImage,
    featured: true,
    description: "Experience Uganda's premier wildlife destinations with mountain gorilla trekking in Bwindi and game drives in Queen Elizabeth National Park.",
  },
  {
    id: 4,
    title: "6 Days Kivu Lake Tour",
    category: "Lake & Relaxation",
    duration: "6 Days / 5 Nights",
    location: "Rwanda",
    image: kivuImage,
    featured: true,
    description: "Experience Lake Kivu's beautiful scenery, island hopping, coffee plantations, and relaxing beach activities in Rwanda's stunning lakeside paradise.",
  },
  {
    id: 5,
    title: "2 Days Akagera National Park Tour",
    category: "Wildlife Safari",
    duration: "2 Days / 1 Night",
    location: "Rwanda",
    image: akageraImage,
    featured: true,
    description: "Spend 2 days in Akagera National Park with game drives, boat safaris, and Big Five wildlife viewing in Rwanda's only savanna park.",
  },
  {
    id: 6,
    title: "1 Day Fazender Horse Riding Tour",
    category: "Day Trip & Adventure",
    duration: "1 Day",
    location: "Rwanda",
    image: fazender,
    featured: true,
    description: "Experience horse riding through scenic trails at Fazender Farm, just outside Kigali. Perfect day trip for nature and animal lovers.",
  },
];

const FeaturedTours = () => {
  const [selectedItinerary, setSelectedItinerary] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTourClick = (tour) => {
    const itineraryDetails = tourItineraries[tour.id];
    
    const itineraryData = {
      ...tour,
      days: itineraryDetails.days,
      included: itineraryDetails.included,
      excluded: itineraryDetails.excluded,
      accommodation: itineraryDetails.accommodation
    };
    
    setSelectedItinerary(itineraryData);
    setIsModalOpen(true);
  };

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
<div className="relative grid grid-cols-2 gap-6">
  {/* Left Column */}
  <div className="space-y-6">
    <Link
      to="/destinations/rwanda"
      className="block transform hover:-translate-y-1 transition-all duration-300"
    >
      <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl rounded-xl">
        <div className="relative h-80">
          <img
            src={nyungweImage}
            alt="Nyungwe National Park"
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
          <div className="absolute bottom-6 left-6 right-6">
            <Badge className="mb-3 bg-safari-gold/90 text-white border-0">
              Featured Destination
            </Badge>
            <h3 className="text-xl font-bold text-white mb-2">
              Nyungwe Forest Experience
            </h3>
            <p className="text-white/90 text-sm">
              Explore the majestic canopy walks and diverse wildlife
            </p>
          </div>
        </div>
      </Card>
    </Link>

    <Link
      to="/destinations/rwanda"
      className="block transform hover:-translate-y-1 transition-all duration-300"
    >
      <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl rounded-xl">
        <div className="relative h-72">
          <img
            src={photoImage}
            alt="Rwanda Scenery"
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
          <div className="absolute bottom-6 left-6 right-6">
            <Badge className="mb-3 bg-safari-gold/90 text-white border-0">
              Wildlife Safari
            </Badge>
            <h3 className="text-xl font-bold text-white mb-2">
              Akagera National Park
            </h3>
            <p className="text-white/90 text-sm">
              Experience Rwanda's premier wildlife sanctuary
            </p>
          </div>
        </div>
      </Card>
    </Link>
  </div>

  {/* Right Column */}
  <div className="space-y-6">
    <Link
      to="/destinations/rwanda"
      className="block transform hover:-translate-y-1 transition-all duration-300"
    >
      <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl rounded-xl">
        <div className="relative h-72">
          <img
            src={vurungaImage}
            alt="Virunga Mountains"
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
          <div className="absolute bottom-6 left-6 right-6">
            <Badge className="mb-3 bg-safari-gold/90 text-white border-0">
              Adventure
            </Badge>
            <h3 className="text-xl font-bold text-white mb-2">
              Virunga Experience
            </h3>
            <p className="text-white/90 text-sm">
              Discover the beauty of volcanic landscapes
            </p>
          </div>
        </div>
      </Card>
    </Link>

    <Link
      to="/destinations/rwanda"
      className="block transform hover:-translate-y-1 transition-all duration-300"
    >
      <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl rounded-xl">
        <div className="relative h-80">
          <img
            src={golillaImage}
            alt="Mountain Gorilla"
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
          <div className="absolute bottom-6 left-6 right-6">
            <Badge className="mb-3 bg-safari-gold/90 text-white border-0">
              Gorilla Trek
            </Badge>
            <h3 className="text-xl font-bold text-white mb-2">
              Gorilla Trekking
            </h3>
            <p className="text-white/90 text-sm">
              Meet the gentle giants of Volcanoes National Park
            </p>
          </div>
        </div>
      </Card>
    </Link>
  </div>
</div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tours.map((tour) => (
            <Card 
              key={tour.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleTourClick(tour)}
            >
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
                  <Button variant="link" className="text-safari-gold">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Browse All Button */}
        <div className="text-center">
          <Link to="/Destination">
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

      {/* Itinerary Dialog */}
      <ItineraryDialog
        itinerary={selectedItinerary}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default FeaturedTours;