import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";
import { ItineraryDialog } from "@/components/ui/itinerary-dialog";
import heroImage from "@/Assets/uganda-safaris.jpg";
import murchisionImage from "@/Assets/Murchison-Falls.jpg";
import gorillaImage from "@/Assets/Bwindi.jpg";
import queenImage from "@/Assets/QueenElizabeth.jpg";
import treeClimbingImage from "@/Assets/Kidepo.jpg";
import BwindiImage from "@/Assets/Bwindi.jpg";
import UgandaImage from "@/Assets/ugandaTours.jpeg";

interface Itinerary {
  id: string;
  image: string;
  title: string;
  category: string;
  price: string;
  location: string;
  description: string;
  days: { day: number; activities: string[] }[];
  included: string[];
  excluded: string[];
  accommodation: string[];
}

const itineraries: Itinerary[] = [
  {
    id: "uganda-murchison-1",
    image: murchisionImage,
    title: "3 Days Murchison Falls Safari",
    category: "Economy • Safari",
    price: "$1150",
    location: "Uganda",
    description: "Experience the thundering Murchison Falls and abundant wildlife in Uganda's largest national park.",
    days: [
      {
        day: 1,
        activities: [
          "Morning departure from Kampala",
          "Drive through scenic landscapes",
          "Evening game drive",
          "Overnight at lodge"
        ]
      },
      {
        day: 2,
        activities: [
          "Morning game drive to see elephants, giraffes, and lions",
          "Afternoon boat cruise to the falls base",
          "Hiking to the top of the falls",
          "Sunset views and dinner"
        ]
      },
      {
        day: 3,
        activities: [
          "Early morning game drive",
          "Visit to local communities",
          "Return to Kampala",
          "Tour end"
        ]
      }
    ],
    included: [
      "All transportation",
      "Professional guide",
      "Park entrance fees",
      "Boat cruise",
      "Accommodation",
      "Meals as per itinerary"
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities"
    ],
    accommodation: [
      "Paraa Safari Lodge",
      "Murchison River Lodge",
      "Pakuba Safari Lodge"
    ]
  },
  {
    id: "uganda-bwindi-2",
    image: gorillaImage,
    title: "4 Days Bwindi Gorilla Trekking",
    category: "Economy • Safari",
    price: "$1350",
    location: "Uganda",
    description: "Embark on a thrilling gorilla trekking adventure in Bwindi Impenetrable Forest, home to half of the world's mountain gorillas.",
    days: [
      {
        day: 1,
        activities: [
          "Depart from Kampala and drive to Bwindi",
          "Scenic stops and lunch en route",
          "Evening at leisure at the lodge"
        ]
      },
      {
        day: 2,
        activities: [
          "Gorilla trekking experience with expert guides",
          "Spend up to one hour with a gorilla family",
          "Community walk or cultural visit in the afternoon"
        ]
      },
      {
        day: 3,
        activities: [
          "Optional forest walk or birding tour",
          "Relax at the lodge or visit local markets"
        ]
      },
      {
        day: 4,
        activities: [
          "Return drive to Kampala",
          "Tour end"
        ]
      }
    ],
    included: [
      "All transportation",
      "Professional guide",
      "Gorilla trekking permit",
      "Park entrance fees",
      "Accommodation",
      "Meals as per itinerary"
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities"
    ],
    accommodation: [
      "Buhoma Lodge",
      "Silverback Lodge",
      "Gorilla Mist Camp"
    ]
  },
  {
    id: "uganda-queen-3",
    image: queenImage,
    title: "5 Days Queen Elizabeth Safari",
    category: "Economy • Safari",
    price: "$1500",
    location: "Uganda",
    description: "Explore Queen Elizabeth National Park, famous for its diverse wildlife, boat cruises, and breathtaking landscapes.",
    days: [
      {
        day: 1,
        activities: [
          "Depart from Kampala and drive to Queen Elizabeth National Park",
          "Stop at the equator for photos",
          "Evening game drive",
          "Overnight at lodge"
        ]
      },
      {
        day: 2,
        activities: [
          "Morning game drive to spot lions, elephants, and buffaloes",
          "Afternoon boat cruise on the Kazinga Channel",
          "Bird watching and hippo sightings"
        ]
      },
      {
        day: 3,
        activities: [
          "Chimpanzee tracking in Kyambura Gorge",
          "Visit local communities",
          "Relax at the lodge"
        ]
      },
      {
        day: 4,
        activities: [
          "Game drive in Ishasha sector for tree-climbing lions",
          "Scenic views and photography"
        ]
      },
      {
        day: 5,
        activities: [
          "Return drive to Kampala",
          "Tour end"
        ]
      }
    ],
    included: [
      "All transportation",
      "Professional guide",
      "Park entrance fees",
      "Boat cruise",
      "Accommodation",
      "Meals as per itinerary"
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities"
    ],
    accommodation: [
      "Mweya Safari Lodge",
      "Enganzi Game Lodge",
      "Bush Lodge"
    ]
  },
  {
    id: "uganda-treeclimbing-4",
    image: treeClimbingImage,
    title: "2 Days Tree-Climbing Lions Experience",
    category: "Economy • Safari",
    price: "$980",
    location: "Uganda",
    description: "Witness the rare tree-climbing lions and explore the wonders of Uganda's wilderness in just two days.",
    days: [
      {
        day: 1,
        activities: [
          "Depart from Kampala in the morning",
          "Drive to Ishasha sector of Queen Elizabeth National Park",
          "Afternoon game drive to spot tree-climbing lions",
          "Overnight at lodge"
        ]
      },
      {
        day: 2,
        activities: [
          "Morning game drive for more wildlife viewing",
          "Visit local community or optional nature walk",
          "Return to Kampala",
          "Tour end"
        ]
      }
    ],
    included: [
      "All transportation",
      "Professional guide",
      "Park entrance fees",
      "Accommodation",
      "Meals as per itinerary"
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities"
    ],
    accommodation: [
      "Ishasha Wilderness Camp",
      "Enjojo Lodge"
    ]
  },
  {
    id: "uganda-gorilla-cultural-5",
    image: BwindiImage,
    title: "6 Days Gorilla & Cultural Tour",
    category: "Luxury • Safari",
    price: "$2200",
    location: "Uganda",
    description: "Immerse yourself in Uganda's rich culture and encounter mountain gorillas in Bwindi Impenetrable Forest.",
    days: [
      {
        day: 1,
        activities: [
          "Arrival in Entebbe and transfer to hotel",
          "Briefing and welcome dinner"
        ]
      },
      {
        day: 2,
        activities: [
          "Drive to Bwindi Impenetrable Forest",
          "Scenic stops and lunch en route",
          "Evening at leisure"
        ]
      },
      {
        day: 3,
        activities: [
          "Gorilla trekking experience",
          "Community walk in Bwindi"
        ]
      },
      {
        day: 4,
        activities: [
          "Cultural tour with Batwa community",
          "Traditional performances"
        ]
      },
      {
        day: 5,
        activities: [
          "Nature walk or optional birding",
          "Relax at lodge"
        ]
      },
      {
        day: 6,
        activities: [
          "Return drive to Entebbe",
          "Departure"
        ]
      }
    ],
    included: [
      "All transportation",
      "Professional guide",
      "Gorilla trekking permit",
      "Park entrance fees",
      "Accommodation",
      "Meals as per itinerary"
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities"
    ],
    accommodation: [
      "Buhoma Lodge",
      "Mahogany Springs",
      "Silverback Lodge"
    ]
  },
  {
    id: "uganda-gorilla-cultural-6",
    image: UgandaImage,
    title: "6 Days Gorilla & Cultural Tour",
    category: "Luxury • Safari",
    price: "$2200",
    location: "Uganda",
    description: "Immerse yourself in Uganda's rich culture and encounter mountain gorillas in Bwindi Impenetrable Forest.",
    days: [
      {
        day: 1,
        activities: [
          "Arrival in Entebbe and transfer to hotel",
          "Briefing and welcome dinner"
        ]
      },
      {
        day: 2,
        activities: [
          "Drive to Bwindi Impenetrable Forest",
          "Scenic stops and lunch en route",
          "Evening at leisure"
        ]
      },
      {
        day: 3,
        activities: [
          "Gorilla trekking experience",
          "Community walk in Bwindi"
        ]
      },
      {
        day: 4,
        activities: [
          "Cultural tour with Batwa community",
          "Traditional performances"
        ]
      },
      {
        day: 5,
        activities: [
          "Nature walk or optional birding",
          "Relax at lodge"
        ]
      },
      {
        day: 6,
        activities: [
          "Return drive to Entebbe",
          "Departure"
        ]
      }
    ],
    included: [
      "All transportation",
      "Professional guide",
      "Gorilla trekking permit",
      "Park entrance fees",
      "Accommodation",
      "Meals as per itinerary"
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities"
    ],
    accommodation: [
      "Buhoma Lodge",
      "Mahogany Springs",
      "Silverback Lodge"
    ]
  }
];

const UgandaItineraries = () => {
  const [selectedItinerary, setSelectedItinerary] = useState<Itinerary | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenItinerary = (itinerary: Itinerary) => {
    setSelectedItinerary(itinerary);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
     {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden pt-28 md:pt-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Uganda Safaris"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-safari-gold" />
            <span className="text-safari-gold font-medium">
              DISCOVER UGANDA ITINERARIES
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            <span className="block text-white">Experience the Pearl of Africa</span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-3xl mx-auto text-white/90 text-lg">
            Embark on extraordinary journeys through Uganda's diverse landscapes,
            from tracking mountain gorillas in Bwindi to witnessing the mighty
            Murchison Falls and encountering tree-climbing lions in Queen Elizabeth
            National Park.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-safari-gold text-black hover:bg-safari-gold font-semibold"
            >
              Plan Your Uganda Adventure
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white font-semibold"
            >
              View Safari Packages
            </Button>
          </div>

          {/* Highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-safari-gold font-semibold text-lg mb-2">
                Gorilla Trekking
              </h3>
              <p className="text-white/80 text-sm">
                Experience close encounters with mountain gorillas in Bwindi
                Impenetrable Forest.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-safari-gold font-semibold text-lg mb-2">
                Wildlife Safaris
              </h3>
              <p className="text-white/80 text-sm">
                Discover diverse wildlife in Queen Elizabeth and Murchison Falls
                National Parks.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-safari-gold font-semibold text-lg mb-2">
                Cultural Experiences
              </h3>
              <p className="text-white/80 text-sm">
                Immerse yourself in Uganda's rich cultural heritage and traditional
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Featured Uganda Itineraries
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {itineraries.map((itinerary) => (
              <div
                key={itinerary.id}
                className="relative rounded-2xl overflow-hidden shadow-lg group h-[400px]"
              >
                {/* Background Image */}
                <img
                  src={itinerary.image}
                  alt={itinerary.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                {/* Heart Icon */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/40 transition">
                  <Heart className="w-5 h-5 text-white" />
                </div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-semibold mb-1">
                    {itinerary.title}
                  </h3>
                  <p className="text-sm text-gray-200">{itinerary.category}</p>
                  <p className="text-sm mt-2">
                    from <span className="font-semibold">{itinerary.price}</span> •{" "}
                    {itinerary.location}
                  </p>

                  {/* Button */}
                  <Button 
                    onClick={() => handleOpenItinerary(itinerary)}
                    className="mt-4 w-full border border-white/40 text-white font-semibold 
                    bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/60 
                    transition-all duration-300"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Itinerary Dialog */}
      <ItineraryDialog
        itinerary={selectedItinerary}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default UgandaItineraries;
