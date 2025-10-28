import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ItineraryDialog } from "@/components/ui/itinerary-dialog";

import heroImage from "@/Assets/rwandaHills.jpg";
import lakekivuImage from "@/Assets/lake-kivu.jpg";
import volcanoesImage from "@/Assets/gollilla.jpg";
import VilungaImage from "@/Assets/Mount-Karisimbi.jpg";
import akageraImage from "@/Assets/akagera3.jpg";
import nyungweImage from "@/Assets/nyungwe.jpg";
import gishwatiImage from "@/Assets/Gishwati-Mukura.jpg";
import kigaliImage from "@/Assets/Kigali-City.jpg";
import NyungweData from "@/Assets/nyungwe2.jpg";
import KigaliCityImage from "@/Assets/Kigali.jpg";
import akageraWildlife from "@/Assets/akageraWildLife.jpg";
import helicopter from "@/Assets/Helicopter.gif"
import birds from "@/Assets/birds.jpg";
import  exprollers from "@/Assets/Exprorers.jpg";
import wildlife from "@/Assets/akagera.jpg"

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

const RwandaItineraries = () => {
  const itineraries: Itinerary[] = [
    {
      id: "mag1",
      image: lakekivuImage,
      title: "4 Days Rwanda Gorillas & Lake Kivu",
      description: "Experience the majestic mountain gorillas and the serene beauty of Lake Kivu in this compact but thrilling 4-day adventure.",
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
    },
    {
      id: "mag2",
      image: volcanoesImage,
      title: "4 Days Gorilla & Golden Monkey Treks",
      description: "An unforgettable journey combining two unique primate experiences: tracking endangered mountain gorillas and the playful golden monkeys in their natural habitat.",
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
    },
    {
      id: "mag3",
      image: VilungaImage,
      title: "5 Days Gorilla Trekking in Rwanda",
      description: "A comprehensive gorilla trekking experience with extended time in Volcanoes National Park, including cultural immersion and scenic exploration.",
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
    },
    {
      id: "mag4",
      image: nyungweImage,
      title: "5 Days Nyungwe National Park",
      description: "Explore the biodiversity of Nyungwe Forest, home to 13 primate species, including chimpanzees, and over 300 bird species in this pristine rainforest adventure.",
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
    },
    {
      id: "mag5",
      image: wildlife,
      title: "6 Days Rwanda Akagera Safari and Gorilla Trekking Tour",
      description: "Combine the thrill of gorilla trekking with a classic African safari experience in Akagera National Park, Rwanda's Big Five destination.",
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
    },
    {
      id: "mag6",
      image: NyungweData,
      title: "6 Days Great Apes Safari – Gorilla & Chimpanzee Treks",
      description: "An exclusive primate safari combining encounters with mountain gorillas and chimpanzees in Rwanda's most spectacular national parks.",
      days: [
        {
          day: 1,
          activities: [
            "Kigali arrival",
            "City tour",
            "Transfer to Nyungwe"
          ]
        },
        {
          day: 2,
          activities: [
            "Chimpanzee tracking",
            "Canopy walkway",
            "Evening nature walk"
          ]
        },
        {
          day: 3,
          activities: [
            "Colobus monkey tracking",
            "Tea plantation visit",
            "Cultural experience"
          ]
        },
        {
          day: 4,
          activities: [
            "Transfer to Volcanoes",
            "Mountain views",
            "Local community visit"
          ]
        },
        {
          day: 5,
          activities: [
            "Gorilla trekking",
            "Photography session",
            "Traditional dinner"
          ]
        },
        {
          day: 6,
          activities: [
            "Scenic drive",
            "Kigali shopping",
            "Departure"
          ]
        }
      ],
      included: [
        "All permits and fees",
        "Expert guides",
        "Luxury lodging",
        "Meals and drinks",
        "Ground transportation"
      ],
      excluded: [
        "Flights",
        "Insurance",
        "Personal expenses",
        "Tips"
      ],
      accommodation: [
        "Kigali: The Retreat",
        "Nyungwe: One&Only",
        "Volcanoes: Singita Kwitonda"
      ]
    },
    {
      id: "mag7",
      image: akageraImage,
      title: "7 Days Rwanda Akagera Safari & Gorilla Trekking",
      description: "An extended wildlife and primate adventure combining Akagera's savanna with Volcanoes' mountain forests.",
      days: [
        {
          day: 1,
          activities: [
            "Airport welcome",
            "Kigali tour",
            "Evening rest"
          ]
        },
        {
          day: 2,
          activities: [
            "Drive to Akagera",
            "Afternoon game drive",
            "Sunset viewing"
          ]
        },
        {
          day: 3,
          activities: [
            "Full day safari",
            "Boat cruise",
            "Night game drive"
          ]
        },
        {
          day: 4,
          activities: [
            "Morning game drive",
            "Transfer to Volcanoes",
            "Cultural show"
          ]
        },
        {
          day: 5,
          activities: [
            "Gorilla trekking",
            "Local village visit",
            "Traditional dinner"
          ]
        },
        {
          day: 6,
          activities: [
            "Golden monkey trek",
            "Craft workshops",
            "Conservation talk"
          ]
        },
        {
          day: 7,
          activities: [
            "Morning hike",
            "Return to Kigali",
            "Departure"
          ]
        }
      ],
      included: [
        "All park permits",
        "Luxury accommodation",
        "Expert guides",
        "Transportation",
        "Meals and drinks"
      ],
      excluded: [
        "International flights",
        "Personal items",
        "Gratuities",
        "Insurance"
      ],
      accommodation: [
        "Kigali: Serena Hotel",
        "Akagera: Magashi Camp",
        "Volcanoes: Sabyinyo Lodge"
      ]
    },
    {
      id: "mag8",
      image: gishwatiImage,
      title: "8 Days Primates of Rwanda Safari",
      description: "A comprehensive primate safari exploring Rwanda's three national parks and their unique species.",
      days: [
        {
          day: 1,
          activities: [
            "Kigali arrival",
            "City orientation",
            "Welcome dinner"
          ]
        },
        {
          day: 2,
          activities: [
            "Drive to Nyungwe",
            "Forest walk",
            "Preparation briefing"
          ]
        },
        {
          day: 3,
          activities: [
            "Chimpanzee trek",
            "Canopy walk",
            "Evening talk"
          ]
        },
        {
          day: 4,
          activities: [
            "Colobus tracking",
            "Tea estate visit",
            "Travel to Volcanoes"
          ]
        },
        {
          day: 5,
          activities: [
            "Gorilla trek",
            "Local culture",
            "Rest and reflection"
          ]
        },
        {
          day: 6,
          activities: [
            "Golden monkey visit",
            "Twin lakes excursion",
            "Photography"
          ]
        },
        {
          day: 7,
          activities: [
            "Second gorilla trek",
            "Community project",
            "Celebration dinner"
          ]
        },
        {
          day: 8,
          activities: [
            "Morning activities",
            "Return to Kigali",
            "Departure"
          ]
        }
      ],
      included: [
        "All tracking permits",
        "Luxury lodges",
        "Expert guides",
        "Transportation",
        "Meals"
      ],
      excluded: [
        "Flights",
        "Personal expenses",
        "Tips",
        "Insurance"
      ],
      accommodation: [
        "Kigali: Kigali Serena",
        "Nyungwe: Nyungwe House",
        "Volcanoes: Virunga Lodge"
      ]
    },
    {
      id: "mag9",
      image: helicopter,
      title: "8 Days Rwanda Safari Tour",
      description: "Experience Rwanda's diverse wildlife, landscapes, and culture in this comprehensive safari adventure.",
      days: [
        {
          day: 1,
          activities: [
            "Airport pickup",
            "Kigali tour",
            "Memorial visit"
          ]
        },
        {
          day: 2,
          activities: [
            "Travel to Akagera",
            "Game drive",
            "Sundowner"
          ]
        },
        {
          day: 3,
          activities: [
            "Full day safari",
            "Boat safari",
            "Evening activities"
          ]
        },
        {
          day: 4,
          activities: [
            "Morning game drive",
            "Transfer to Volcanoes",
            "Local interaction"
          ]
        },
        {
          day: 5,
          activities: [
            "Gorilla trekking",
            "Cultural visit",
            "Evening relaxation"
          ]
        },
        {
          day: 6,
          activities: [
            "Drive to Kivu",
            "Beach activities",
            "Boat ride"
          ]
        },
        {
          day: 7,
          activities: [
            "Coffee experience",
            "Water sports",
            "Sunset cruise"
          ]
        },
        {
          day: 8,
          activities: [
            "Morning swim",
            "Return to Kigali",
            "Departure"
          ]
        }
      ],
      included: [
        "All permits",
        "Accommodations",
        "Transport",
        "Activities",
        "Meals"
      ],
      excluded: [
        "Flights",
        "Visa",
        "Personal items",
        "Tips"
      ],
      accommodation: [
        "Kigali: Ubumwe Grande",
        "Akagera: Karenge Bush Camp",
        "Volcanoes: Five Volcanoes",
        "Kivu: Lake Kivu Serena"
      ]
    },
    {
      id: "mag10",
      image: kigaliImage,
      title: "8 Days Luxury Rwanda Safari Adventure",
      description: "The ultimate luxury safari experience in Rwanda, featuring exclusive lodges and helicopter transfers.",
      days: [
        {
          day: 1,
          activities: [
            "VIP airport service",
            "Helicopter city tour",
            "Luxury welcome dinner"
          ]
        },
        {
          day: 2,
          activities: [
            "Fly to Nyungwe",
            "Spa treatment",
            "Private forest walk"
          ]
        },
        {
          day: 3,
          activities: [
            "Private chimp trek",
            "Exclusive tea tasting",
            "Gourmet dinner"
          ]
        },
        {
          day: 4,
          activities: [
            "Helicopter to Volcanoes",
            "Lodge activities",
            "Private cultural show"
          ]
        },
        {
          day: 5,
          activities: [
            "Exclusive gorilla trek",
            "Champagne lunch",
            "Massage"
          ]
        },
        {
          day: 6,
          activities: [
            "Golden monkey experience",
            "Private cooking class",
            "Wine tasting"
          ]
        },
        {
          day: 7,
          activities: [
            "Fly to Lake Kivu",
            "Private boat cruise",
            "Beach dinner"
          ]
        },
        {
          day: 8,
          activities: [
            "Morning yoga",
            "Return flight",
            "VIP departure"
          ]
        }
      ],
      included: [
        "Helicopter transfers",
        "Luxury lodging",
        "Private guides",
        "Premium drinks",
        "Spa treatments"
      ],
      excluded: [
        "International flights",
        "Shopping",
        "Extra activities"
      ],
      accommodation: [
        "Kigali: One&Only Gorilla's Nest",
        "Nyungwe: Nyungwe House",
        "Volcanoes: Bisate Lodge",
        "Kivu: Mantis Kivu Marina Bay"
      ]
    },
    {
      id: "mag11",
      image: volcanoesImage,
      title: "9 Days Rwanda Primate Tracking Safari",
      description: "A specialized safari focused on Rwanda's diverse primate species and their conservation.",
      days: [
        {
          day: 1,
          activities: [
            "Arrival briefing",
            "Conservation presentation",
            "Equipment check"
          ]
        },
        {
          day: 2,
          activities: [
            "Drive to Nyungwe",
            "Forest orientation",
            "Night walk"
          ]
        },
        {
          day: 3,
          activities: [
            "Chimpanzee habituation",
            "Research center visit",
            "Expert talk"
          ]
        },
        {
          day: 4,
          activities: [
            "Colobus research",
            "Canopy study",
            "Data collection"
          ]
        },
        {
          day: 5,
          activities: [
            "Transfer to Volcanoes",
            "Research presentation",
            "Preparation"
          ]
        },
        {
          day: 6,
          activities: [
            "Gorilla research trek",
            "Data recording",
            "Analysis"
          ]
        },
        {
          day: 7,
          activities: [
            "Golden monkey study",
            "Conservation work",
            "Team meeting"
          ]
        },
        {
          day: 8,
          activities: [
            "Second gorilla visit",
            "Research conclusion",
            "Findings presentation"
          ]
        },
        {
          day: 9,
          activities: [
            "Final data review",
            "Return to Kigali",
            "Departure"
          ]
        }
      ],
      included: [
        "Research permits",
        "Scientific equipment",
        "Expert guidance",
        "Accommodation",
        "Transport"
      ],
      excluded: [
        "Flights",
        "Personal gear",
        "Extra research materials"
      ],
      accommodation: [
        "Kigali: Lemigo Hotel",
        "Nyungwe: Top View Hotel",
        "Volcanoes: Mountain Gorilla View"
      ]
    },
    {
      id: "mag12",
      image: birds,
      title: "10 Days Rwanda Wildlife Safari",
      description: "A comprehensive wildlife safari covering all of Rwanda's major national parks and conservation areas.",
      days: [
        {
          day: 1,
          activities: [
            "Arrival and briefing",
            "Equipment preparation",
            "Safari overview"
          ]
        },
        {
          day: 2,
          activities: [
            "Akagera game drive",
            "Big Five tracking",
            "Night safari"
          ]
        },
        {
          day: 3,
          activities: [
            "Lake Ihema cruise",
            "Bird watching",
            "Wetland exploration"
          ]
        },
        {
          day: 4,
          activities: [
            "Transfer to Nyungwe",
            "Canopy walk",
            "Primate spotting"
          ]
        },
        {
          day: 5,
          activities: [
            "Chimpanzee trek",
            "Forest exploration",
            "Night walk"
          ]
        },
        {
          day: 6,
          activities: [
            "Travel to Volcanoes",
            "Mountain hiking",
            "Village visit"
          ]
        },
        {
          day: 7,
          activities: [
            "Gorilla trekking",
            "Conservation talk",
            "Cultural experience"
          ]
        },
        {
          day: 8,
          activities: [
            "Golden monkey trek",
            "Cave exploration",
            "Traditional dinner"
          ]
        },
        {
          day: 9,
          activities: [
            "Lake Kivu visit",
            "Water activities",
            "Sunset cruise"
          ]
        },
        {
          day: 10,
          activities: [
            "Morning activities",
            "Return transfer",
            "Departure"
          ]
        }
      ],
      included: [
        "All park fees",
        "Expert guides",
        "Accommodation",
        "Transportation",
        "Activities"
      ],
      excluded: [
        "International flights",
        "Personal items",
        "Gratuities"
      ],
      accommodation: [
        "Akagera: Ruzizi Lodge",
        "Nyungwe: Nyungwe House",
        "Volcanoes: Gorilla Mountain View",
        "Kivu: Serena Lake Kivu"
      ]
    },
    {
      id: "mag13",
      image: akageraWildlife,
      title: "10 Days Rwanda Wildlife Adventure",
      description: "An active wildlife adventure combining game drives, hiking, and primate encounters across Rwanda.",
      days: [
        {
          day: 1,
          activities: [
            "Welcome briefing",
            "City orientation",
            "Equipment check"
          ]
        },
        {
          day: 2,
          activities: [
            "Akagera safari",
            "Walking safari",
            "Sundowner"
          ]
        },
        {
          day: 3,
          activities: [
            "Game tracking",
            "Boat safari",
            "Night drive"
          ]
        },
        {
          day: 4,
          activities: [
            "Bird watching",
            "Travel to Nyungwe",
            "Forest walk"
          ]
        },
        {
          day: 5,
          activities: [
            "Chimp trekking",
            "Waterfall hike",
            "Canopy walk"
          ]
        },
        {
          day: 6,
          activities: [
            "Colobus tracking",
            "Tea plantation",
            "Cultural visit"
          ]
        },
        {
          day: 7,
          activities: [
            "Drive to Volcanoes",
            "Mountain views",
            "Preparation"
          ]
        },
        {
          day: 8,
          activities: [
            "Gorilla trek",
            "Village experience",
            "Local dinner"
          ]
        },
        {
          day: 9,
          activities: [
            "Golden monkeys",
            "Crater lake hike",
            "Celebration"
          ]
        },
        {
          day: 10,
          activities: [
            "Final activities",
            "Return journey",
            "Farewell"
          ]
        }
      ],
      included: [
        "Activity permits",
        "Lodging",
        "Transport",
        "Guides",
        "Meals"
      ],
      excluded: [
        "Flights",
        "Insurance",
        "Personal items"
      ],
      accommodation: [
        "Akagera: Karenge Camp",
        "Nyungwe: Top View",
        "Volcanoes: Da Vinci Lodge"
      ]
    },
    {
      id: "mag14",
      image: KigaliCityImage,
      title: "12 Days Luxury Wildlife Tour to Rwanda",
      description: "The ultimate luxury wildlife experience featuring exclusive lodges and private guides throughout Rwanda.",
      days: [
        {
          day: 1,
          activities: [
            "VIP arrival",
            "Luxury transfer",
            "Welcome dinner"
          ]
        },
        {
          day: 2,
          activities: [
            "Private city tour",
            "Art galleries",
            "Gourmet evening"
          ]
        },
        {
          day: 3,
          activities: [
            "Fly to Akagera",
            "Private game drive",
            "Sundowner"
          ]
        },
        {
          day: 4,
          activities: [
            "Full-day safari",
            "Boat cruise",
            "Bush dinner"
          ]
        },
        {
          day: 5,
          activities: [
            "Helicopter to Nyungwe",
            "Spa treatment",
            "Forest dinner"
          ]
        },
        {
          day: 6,
          activities: [
            "Private chimp trek",
            "Canopy walk",
            "Wine tasting"
          ]
        },
        {
          day: 7,
          activities: [
            "Tea experience",
            "Cultural visit",
            "Massage"
          ]
        },
        {
          day: 8,
          activities: [
            "Transfer to Volcanoes",
            "Lodge activities",
            "Private dinner"
          ]
        },
        {
          day: 9,
          activities: [
            "Gorilla trek",
            "Photography session",
            "Champagne lunch"
          ]
        },
        {
          day: 10,
          activities: [
            "Golden monkey trek",
            "Crater lake picnic",
            "Sunset yoga"
          ]
        },
        {
          day: 11,
          activities: [
            "Lake Kivu cruise",
            "Beach relaxation",
            "Farewell dinner"
          ]
        },
        {
          day: 12,
          activities: [
            "Morning leisure",
            "VIP transfer",
            "Departure"
          ]
        }
      ],
      included: [
        "Luxury accommodation",
        "Private transport",
        "VIP services",
        "All activities",
        "Premium meals"
      ],
      excluded: [
        "International flights",
        "Personal shopping",
        "Gratuities"
      ],
      accommodation: [
        "Kigali: Kigali Marriott",
        "Akagera: Magashi Camp",
        "Nyungwe: One&Only",
        "Volcanoes: Bisate Lodge",
        "Kivu: Mantis Marina Bay"
      ]
    },
    {
      id: "mag15",
      image: exprollers,
      title: "14 Days Exploring Rwanda",
      description: "The most comprehensive Rwanda experience, combining wildlife, culture, and adventure across the entire country.",
      days: [
        {
          day: 1,
          activities: [
            "Airport welcome",
            "City tour",
            "Cultural dinner"
          ]
        },
        {
          day: 2,
          activities: [
            "Museums visit",
            "Art galleries",
            "Local markets"
          ]
        },
        {
          day: 3,
          activities: [
            "Drive to Akagera",
            "Afternoon safari",
            "Sunset viewing"
          ]
        },
        {
          day: 4,
          activities: [
            "Full day safari",
            "Boat trip",
            "Night drive"
          ]
        },
        {
          day: 5,
          activities: [
            "Morning game drive",
            "Travel to Nyungwe",
            "Forest walk"
          ]
        },
        {
          day: 6,
          activities: [
            "Chimp trekking",
            "Canopy walk",
            "Nature photography"
          ]
        },
        {
          day: 7,
          activities: [
            "Colobus tracking",
            "Tea plantation",
            "Local community"
          ]
        },
        {
          day: 8,
          activities: [
            "Transfer to Kivu",
            "Beach activities",
            "Sunset cruise"
          ]
        },
        {
          day: 9,
          activities: [
            "Island hopping",
            "Coffee experience",
            "Cultural show"
          ]
        },
        {
          day: 10,
          activities: [
            "Drive to Volcanoes",
            "Village visit",
            "Traditional dance"
          ]
        },
        {
          day: 11,
          activities: [
            "Gorilla trekking",
            "Conservation talk",
            "Local dinner"
          ]
        },
        {
          day: 12,
          activities: [
            "Golden monkey trek",
            "Twin lakes tour",
            "Cave exploration"
          ]
        },
        {
          day: 13,
          activities: [
            "Mountain hiking",
            "Cultural immersion",
            "Celebration dinner"
          ]
        },
        {
          day: 14,
          activities: [
            "Final activities",
            "Souvenir shopping",
            "Departure"
          ]
        }
      ],
      included: [
        "All permits",
        "Accommodations",
        "Transportation",
        "Activities",
        "Guides",
        "Meals"
      ],
      excluded: [
        "International flights",
        "Personal expenses",
        "Tips",
        "Insurance"
      ],
      accommodation: [
        "Kigali: Serena Hotel",
        "Akagera: Ruzizi Lodge",
        "Nyungwe: Nyungwe House",
        "Kivu: Lake Kivu Serena",
        "Volcanoes: Five Volcanoes"
      ]
    }
  ];

  const [selectedItinerary, setSelectedItinerary] = useState<Itinerary | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (itinerary: Itinerary) => {
    setSelectedItinerary(itinerary);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 relative overflow-hidden flex items-center min-h-[100vh]">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Rwanda Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-safari-gold" />
            <span className="text-safari-gold font-medium">
              DISCOVER RWANDA ITINERARIES
            </span>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold">
            <span className="block text-white">Unforgettable Journeys in</span>
            <span className="block text-safari-gold">The Heart of Africa</span>
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-white/90 text-lg">
            Embark on expertly crafted safaris featuring gorilla encounters,
            wildlife adventures, and cultural experiences across Rwanda's stunning landscapes.
          </p>
        </div>
      </section>

      {/* Itineraries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-amber-400/10 border border-amber-400/30">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-amber-600 font-medium">
                EXPLORE OUR PACKAGES
              </span>
            </div>
            <h2 className="mt-6 text-4xl font-bold">Rwanda Safari Itineraries</h2>
            <p className="mt-4 text-gray-600">
              From short gorilla trekking adventures to comprehensive wildlife safaris,
              find the perfect journey to explore Rwanda's diverse attractions.
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
                  <h3 className="text-2xl font-semibold mb-3">{itinerary.title}</h3>
                  {/* Transparent Button */}
                  <button
                    className="mt-3 w-full border border-white/40 text-white font-semibold py-2 rounded-full 
                    bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/60 
                    transition-all duration-300"
                  >
                    View Details
                  </button>
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

export default RwandaItineraries;
