import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ItineraryDialog } from "@/components/ui/itinerary-dialog";

import heroImage from "@/Assets/hotel.jpg";
import solo from "@/Assets/solo.jpg";
import family from "@/Assets/family.jpg";
import group from "@/Assets/group.jpeg";
import couple from "@/Assets/rwandaCouples.jpg";
import advarture from "@/Assets/nyungwe.jpg";
import luxury from "@/Assets/rwanda-luxury.jpg";

interface Itinerary {
  id: string;
  image: string;
  title: string;
  description: string;
  days: { day: number; activities: string[] }[];
  included: string[];
  excluded: string[];
  accommodation: string[];
}

const PackagesHero = () => {
  const [activeTab, setActiveTab] = useState("Itinerary");
  const [open, setOpen] = useState(false);
  const [selectedItinerary, setSelectedItinerary] = useState<Itinerary | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itineraries: Itinerary[] = [
   {
  id: "solo",
  image: solo,
  title: "Solo Tour Package",
  description:
      "Experience the majestic mountain gorillas and the serene beauty of Lake Kivu in this compact but thrilling 4-day adventure.",
    days: [
      {
        day: 1,
        activities: [
          "Arrival in Kigali",
          "City tour including Genocide Memorial",
          "Transfer to Volcanoes National Park"
        ]
      },
      {
        day: 2,
        activities: [
          "Early morning gorilla trekking",
          "Afternoon cultural village visit"
        ]
      },
      {
        day: 3,
        activities: [
          "Transfer to Lake Kivu",
          "Boat ride on the lake",
          "Beach relaxation"
        ]
      },
      {
        day: 4,
        activities: [
          "Morning nature walk",
          "Return to Kigali",
          "Departure"
        ]
      }
    ],
    included: [
      "Gorilla trekking permit",
      "All transfers",
      "Accommodation",
      "Meals as specified",
      "English-speaking guide"
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Personal expenses",
      "Travel insurance"
    ],
    accommodation: [
      "Kigali: Kigali Marriott Hotel",
      "Volcanoes: Mountain Gorilla View Lodge",
      "Lake Kivu: Lake Kivu Serena Hotel"
    ]
  }
,
   {
  id: "family",
  image: family,
  title: "Family Tour Package",
  description:
    "Following a substantial breakfast in the early hours, you'll be met by our skilled driver-guide for the journey from Bwindi to Kampala/Entebbe, where you'll be dropped off at your hotel or lodge. However, on the return leg from Bwindi, our itinerary includes a stop for lunch at the Igongo Cultural Centre and an opportunity to capture photos at the Equator crossing. Enjoy a perfect family adventure with Trumpet Tours as you bond, explore, and discover the beauty of Africa together.",
    days: [
      {
        day: 1,
        activities: [
          "Arrival at Kigali International Airport",
          "Welcome briefing",
          "Guided city tour of Kigali",
          "Visit to the Genocide Memorial",
          "Evening transfer to Volcanoes National Park"
        ]
      },
      {
        day: 2,
        activities: [
          "Early breakfast at the lodge",
          "Gorilla trekking in Volcanoes National Park",
          "Face-to-face encounter with mountain gorillas",
          "Photography session with gorillas",
          "Afternoon rest and cultural activities"
        ]
      },
      {
        day: 3,
        activities: [
          "Golden monkey tracking adventure",
          "Observe these rare primates in bamboo forests",
          "Afternoon visit to local communities",
          "Traditional dance performance",
          "Craft making demonstration"
        ]
      },
      {
        day: 4,
        activities: [
          "Morning nature walk",
          "Visit to the Twin Lakes",
          "Transfer back to Kigali",
          "Optional shopping stop",
          "Airport drop-off for departure"
        ]
      }
    ],
    included: [
      "Gorilla trekking permit ($1500)",
      "Golden monkey permit ($100)",
      "Luxury accommodation",
      "Full board meals",
      "Professional English-speaking guide",
      "Park entrance fees",
      "Airport transfers",
      "4x4 vehicle transport",
      "Cultural activities"
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Visa fees ($50)",
      "Personal expenses",
      "Tips for guides and staff",
      "Alcoholic beverages"
    ],
    accommodation: [
      "Kigali: The Retreat by Heaven",
      "Volcanoes: Sabyinyo Silverback Lodge",
      "Volcanoes: Bisate Lodge"
    ]
  }
,
    {
  id: "group",
  image: group,
  title: "Group Tour Package",
  description:
    "Embark on an unforgettable journey with your friends as students or dive into the ultimate work excursion – an adventure that promises to be shared effortlessly. Trumpet Tours presents opportunities for shared small-group and large-group experiences in Rwanda or Uganda, tailored primarily for wildlife safaris, community-based tours encompassing cultural and historical encounters, and exhilarating adventures. Delve into the heart of Africa's breathtaking landscapes alongside your companions, immersing yourselves in the wonders of nature and wildlife. Whether you opt for the intimacy of a small group or the vibrant energy of a larger gathering, each experience promises to forge lasting memories and deepen your appreciation for the beauty and diversity of the region.",
    days: [
      {
        day: 1,
        activities: [
          "Arrival in Kigali",
          "Historical tour of the city",
          "Visit to local markets",
          "Evening transfer to Musanze"
        ]
      },
      {
        day: 2,
        activities: [
          "First gorilla trek experience",
          "Different gorilla family encounter",
          "Evening relaxation at lodge",
          "Cultural dinner experience"
        ]
      },
      {
        day: 3,
        activities: [
          "Second gorilla trek (optional)",
          "Visit to Dian Fossey Tomb",
          "Hiking in the Virunga Mountains",
          "Evening talk by conservation experts"
        ]
      },
      {
        day: 4,
        activities: [
          "Community visit day",
          "Traditional basket weaving",
          "Local brewery visit",
          "Cultural dance performance"
        ]
      },
      {
        day: 5,
        activities: [
          "Morning cave exploration",
          "Twin Lakes visit",
          "Return to Kigali",
          "Departure"
        ]
      }
    ],
    included: [
      "Two gorilla trekking permits",
      "Luxury accommodation",
      "All meals and drinks",
      "Expert guides",
      "Conservation fees",
      "Cultural activities",
      "Photography assistance"
    ],
    excluded: [
      "International flights",
      "Personal items",
      "Gratuities",
      "Travel insurance",
      "Additional activities"
    ],
    accommodation: [
      "Kigali: Kigali Serena Hotel",
      "Volcanoes: One&Only Gorilla's Nest",
      "Volcanoes: Virunga Lodge"
    ]
  }

,
   {
  id: "couples",
  image: couple,
  title: "Couple Tour Package",
  description:
    "Experience the fulfillment of your most extravagant aspirations with Trumpet Tours. Delight in tailor-made escapades designed for pairs, ranging from enchanting honeymoon safaris to unforgettable evenings spent gazing at the stars. Trumpet Tours provides exhilarating and genuine tour packages specifically crafted for adventurous couples. Indulge in many highlights, including traversing Volcanoes National Park in search of majestic mountain gorillas, immersing yourselves in the captivating forests of Nyungwe, and embarking on a thrilling safari adventure in Akagera National Park. Every moment promises to deepen the bond between you and your partner, creating memories to last a lifetime.",
    days: [
      {
        day: 1,
        activities: [
          "Arrival in Kigali",
          "Scenic drive to Nyungwe",
          "Forest edge walk",
          "Evening briefing on chimpanzee tracking"
        ]
      },
      {
        day: 2,
        activities: [
          "Early morning chimpanzee tracking",
          "Primate observation",
          "Afternoon tea plantation tour",
          "Sunset forest viewing"
        ]
      },
      {
        day: 3,
        activities: [
          "Canopy walk experience",
          "Waterfall hike",
          "Bird watching session",
          "Evening cultural performance"
        ]
      },
      {
        day: 4,
        activities: [
          "Colobus monkey tracking",
          "Medicinal plant tour",
          "Photography workshop",
          "Star gazing experience"
        ]
      },
      {
        day: 5,
        activities: [
          "Morning bird walk",
          "Return journey to Kigali",
          "Craft shopping",
          "Departure"
        ]
      }
    ],
    included: [
      "Chimpanzee tracking permit",
      "Canopy walk fees",
      "Full board accommodation",
      "Expert naturalist guide",
      "Park entrance fees",
      "All transportation",
      "Activities as listed"
    ],
    excluded: [
      "Flights to/from Kigali",
      "Optional activities",
      "Personal expenses",
      "Tips",
      "Travel insurance"
    ],
    accommodation: [
      "Kigali: Radisson Blu Hotel",
      "Nyungwe: One&Only Nyungwe House",
      "Nyungwe: Nyungwe Top View Hill Hotel"
    ]
  }
,
   {
  id: "luxury",
  image: luxury,
  title: "Luxury Tour Package",
  description:
    "Experience the fulfillment of your most extravagant aspirations with Trumpet Tours. Delight in tailor-made escapades designed for pairs, ranging from enchanting honeymoon safaris to unforgettable evenings spent gazing at the stars. Trumpet Tours provides exhilarating and genuine tour packages specifically crafted for adventurous couples. Indulge in many highlights, including traversing Volcanoes National Park in search of majestic mountain gorillas, immersing yourselves in the captivating forests of Nyungwe, and embarking on a thrilling safari adventure in Akagera National Park. Every moment promises to deepen the bond between you and your partner, creating memories to last a lifetime.",
    days: [
      {
        day: 1,
        activities: [
          "Arrival in Kigali",
          "City orientation",
          "Transfer to Akagera National Park",
          "Evening game drive"
        ]
      },
      {
        day: 2,
        activities: [
          "Full day game drive",
          "Big Five wildlife viewing",
          "Boat safari on Lake Ihema",
          "Sundowner experience"
        ]
      },
      {
        day: 3,
        activities: [
          "Morning game drive",
          "Transfer to Volcanoes National Park",
          "Cultural village visit"
        ]
      },
      {
        day: 4,
        activities: [
          "Gorilla trekking experience",
          "Traditional dance performance",
          "Local community interaction"
        ]
      },
      {
        day: 5,
        activities: [
          "Golden monkey tracking",
          "Scenic hike to twin lakes",
          "Conservation talk"
        ]
      },
      {
        day: 6,
        activities: [
          "Morning nature walk",
          "Return to Kigali",
          "Departure"
        ]
      }
    ],
    included: [
      "Gorilla and monkey permits",
      "Safari game drives",
      "Boat safari",
      "Luxury accommodation",
      "Professional guides",
      "All meals and drinks",
      "Park fees"
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal items",
      "Staff gratuities"
    ],
    accommodation: [
      "Kigali: Marriott Hotel",
      "Akagera: Ruzizi Tented Lodge",
      "Volcanoes: Bisate Lodge"
    ]
  }
,
    {
  id: "adventure",
  image: advarture, // make sure to import your image for this package
  title: "Adventure Explorer Package",
  description:
    "Dive into the heart of Rwanda with Trumpet Tours’ Adventure Explorer Package. Perfect for thrill-seekers and nature enthusiasts, this journey combines gorilla trekking, wildlife safaris, and cultural immersion. Discover the hidden gems of Rwanda’s landscapes, interact with local communities, and create unforgettable memories in a truly authentic African adventure.",
    days: [
      {
        day: 1,
        activities: [
          "Arrival in Kigali",
          "City orientation tour",
          "Visit Genocide Memorial",
          "Evening welcome dinner"
        ]
      },
      {
        day: 2,
        activities: [
          "Transfer to Volcanoes National Park",
          "Early morning gorilla trekking",
          "Afternoon cultural village visit",
          "Photography session in the park"
        ]
      },
      {
        day: 3,
        activities: [
          "Golden monkey tracking",
          "Scenic hike in the Virunga mountains",
          "Evening relaxation at lodge",
          "Traditional dance performance"
        ]
      },
      {
        day: 4,
        activities: [
          "Transfer to Lake Kivu",
          "Boat ride on the lake",
          "Beach relaxation and sunset",
          "Visit local markets and artisan shops"
        ]
      },
      {
        day: 5,
        activities: [
          "Morning nature walk",
          "Return to Kigali",
          "Departure"
        ]
      }
    ],

    included: [
      "Gorilla and golden monkey permits",
      "All park entrance fees",
      "Luxury accommodation",
      "All transfers and transport",
      "Meals as specified",
      "Professional English-speaking guide",
      "Cultural activities"
    ],

    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities"
    ],

    accommodation: [
      "Kigali: Kigali Marriott Hotel",
      "Volcanoes: Mountain Gorilla View Lodge",
      "Lake Kivu: Lake Kivu Serena Hotel"
    ]
  }


  ];

  const handleClick = (itinerary: Itinerary) => {
    setSelectedItinerary(itinerary);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden pt-28 md:pt-32">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Tour Packages"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-safari-gold" />
            <span className="text-safari-gold font-medium">
              DISCOVER OUR TOUR PACKAGES
            </span>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            <span className="block text-white">
              Tailored Adventures for Every Traveler
            </span>
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-white/90 text-lg">
            Whether you’re a solo explorer, a couple seeking romance, a group of
            adventurers, or a family ready to create unforgettable memories —
            Trumpet Tours offers packages crafted to suit your pace, interests,
            and budget. Experience Rwanda and Uganda like never before.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-safari-gold text-black hover:bg-amber-500 font-semibold"
            >
              Explore Packages
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white font-semibold"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Packages Section */}
        <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-amber-400/10 border border-amber-400/30">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-amber-600 font-medium">
                EXPLORE OUR PACKAGES TOURS 
              </span>
            </div>
           <h2 className="mt-6 text-4xl font-bold">Our Tour Packages & Itineraries</h2>
<p className="mt-4 text-gray-600">
  Discover Rwanda’s beauty with Trumpet Tours — from romantic couple getaways and
  luxury safaris to thrilling adventures and cultural explorations. Each itinerary
  is thoughtfully designed to give you an authentic experience across the country’s
  breathtaking national parks, lakes, and vibrant communities.
</p>
          </div>

          {/* Transparent Button Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {itineraries.map((itinerary) => (
              <div
                key={itinerary.id}
                className="relative rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => handleClick(itinerary)}
              >
                {/* Background Image */}
                <img
                  src={itinerary.image}
                  alt={itinerary.title}
                  className="w-full h-[420px] object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-1">{itinerary.title}</h3>
                  <p className="text-sm text-gray-200">Economy • Safari</p>

                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-300">
                    <span>from <strong>$1200</strong></span>
                    <span>•</span>
                    <span>Rwanda</span>
                  </div>

                  {/* Transparent Button */}
                  <button
                    className="mt-5 w-full border border-white/40 text-white font-semibold py-2 rounded-full 
                    bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/60 
                    transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>

                {/* Heart Icon */}
                <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full backdrop-blur-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.098-4.5-4.688-4.5-1.69 0-3.174.972-3.937 2.406A4.687 4.687 0 008.438 3.75C5.848 3.75 3.75 5.765 3.75 8.25c0 7.22 8.625 11.625 8.625 11.625S21 15.47 21 8.25z"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ItineraryDialog
              itinerary={selectedItinerary}
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
    </div>
  );
};

export default PackagesHero;
