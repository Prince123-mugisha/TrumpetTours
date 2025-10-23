import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation  from "@/components/Navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TripPlannerDialog } from "@/components/ui/trip-planner-dialog";
import Footer from "@/components/Footer";
import heroImage from "@/Assets/rwandaHills.jpg";
import OverviewImage from "@/Assets/lake-kivu.jpg";
import volcanoesImage from "@/Assets/vurunga.jpg";
import akageraImage from "@/Assets/akagera3.jpg";
import nyungweImage from "@/Assets/nyungwe.jpg";
import gishwatiImage from "@/Assets/Gishwati-Mukura.jpg";
import lakesImage from "@/Assets/kivu.jpg";
import kigaliImage from "@/Assets/Kigali-City.jpg";
import kingspalaceImage from "@/Assets/Kings-Palace.jpg";
import genocideImage from "@/Assets/Kigali-Genocide.webp";
import nyandunguImage from "@/Assets/NYandungu.jpg";
import { useState } from "react";
import  {Link } from "react-router-dom";

const Rwanda = () => {
  const [showTripPlanner, setShowTripPlanner] = useState(false);
  const [openDialog, setOpenDialog] = useState(null);
  
  const destinations = [
    {
      name: "Volcanoes National Park",
      image: volcanoesImage,
      description: "Situated in the Northern Province, boasting ancient volcanoes reaching nearly 15,000 feet, draped in lush green rainforests of the Virunga Mountains, housing renowned gorilla families.",
      activities: ["Gorilla Trekking", "Golden Monkey Trekking", "Volcano Climbing", "Bird Watching", "Cultural Village Visits", "Dian Fossey Campus", "Musanze Caves", "Cycling Tours"],
    },
    {
      name: "Akagera National Park",
      image: akageraImage,
      description: "Nestled in northeastern Rwanda, offering warm, low-lying plains dotted with lakes, woodlands, and wetlands teeming with diverse wildlife including the Big Five.",
      activities: ["Day/Night Game Drives", "Day/Sunset Boat Cruise", "Fishing", "Camping", "Bird Watching"],
    },
    {
      name: "Nyungwe National Park",
      image: nyungweImage,
      description: "The largest expanse of montane rainforest in eastern Africa, spanning 1,015 square kilometers with over 300 bird species, 240 tree varieties, and 13 primate species including chimpanzees.",
      activities: ["Canopy Walk", "Tea Plantation Tours", "Primate Tracking", "Chimpanzee Tracking", "Guided Nature Trails", "Birding Safaris", "Waterfalls Visit", "Camping"],
    },
    {
      name: "Gishwati Mukura National Park",
      image: gishwatiImage,
      description: "Two forests spanning 34 square kilometers, celebrated for diverse plant and animal life including chimpanzees, golden monkeys, and 60 distinct tree varieties.",
      activities: ["Guided Nature Hikes", "Chimp and Monkey Tracking", "Bird Watching", "Waterfall Visits"],
    },
    {
      name: "Rwanda's Beautiful Lakes",
      image: lakesImage,
      description: "From Lake Kivu's stunning shores to the twin lakes Burera and Ruhondo, Rwanda's lakes offer peaceful retreats with spectacular views and diverse water activities.",
      activities: ["Kayaking", "Boat Rides", "Fishing", "Swimming", "Camping"],
    },
    {
      name: "Kigali City",
      image: kigaliImage,
      description: "A vibrant capital city teeming with cultural heritage, remarkable cleanliness, and safety standards. Explore bustling markets, art galleries, and a diverse culinary scene.",
      activities: ["Genocide Memorial Centre", "Inema Art Gallery", "Nyamirambo Women's Centre", "Question Coffee Master Class", "Nyandungu Eco-Park"],
    },
    {
      name: "King's Palace Museum",
      image: kingspalaceImage,
      description: "Located in Nyanza District, offering insight into Rwanda's monarchical system. Features the majestic Longhorned royal cows 'Inyambo' and restored 19th-century traditional palace.",
      activities: ["Palace Tours", "Inyambo Cow Procession", "Historical Exhibitions", "Royal Mausoleum Visit"],
    },
    {
      name: "Kigali Genocide Memorial",
      image: genocideImage,
      description: "The largest memorial site holding remains of over 250,000 victims. Features three main exhibitions, a children's memorial, Education Centre, and the Genocide Archive of Rwanda.",
      activities: ["Guided Memorial Tours", "Educational Exhibitions", "Memorial Gardens", "Documentation Center"],
    },
    {
      name: "Kigali Nyandungu Eco-Park",
      image: nyandunguImage,
      description: "A serene urban wetland offering walking and cycling trails, bird watching, and a peaceful escape from the city's hustle and bustle.",
      activities: ["Walking Trails", "Cycling", "Bird Watching", "Picnicking"],
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 relative overflow-hidden min-h-[120vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Rwanda Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white mt-[-20vh]">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-safari-gold" />
            <span className="text-safari-gold font-medium">DISCOVER RWANDA</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold">
            <span className="block text-white">Experience the Land of</span>
            <span className="block text-safari-gold">A Thousand Hills</span>
          </h1>
          <p className="mt-4 max-w-4xl mx-auto text-white/90 text-lg">
            Journey through Rwanda's breathtaking landscapes, from misty mountains to pristine lakes.
            Encounter majestic mountain gorillas, explore vibrant culture, and discover a nation's remarkable renaissance.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-safari-gold text-black hover:bg-safari-gold/80 font-semibold"
              onClick={() => setShowTripPlanner(true)}
            >
              Plan Your Rwanda Trip
            </Button>
            <Link to = "/itineraries/rwanda">
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white font-semibold">
              View Itineraries
            </Button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center text-white">
              <div className="text-4xl font-bold text-white">4</div>
              <div className="text-sm text-white">National Parks</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center text-white">
              <div className="text-4xl font-bold text-white">1000+</div>
              <div className="text-sm text-white">Mountain Gorillas</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center text-white">
              <div className="text-4xl font-bold text-white">8</div>
              <div className="text-sm text-white">Museums & Cultural Sites</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center text-white">
              <div className="text-4xl font-bold text-white">99%</div>
              <div className="text-sm text-white">Safe Travel</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-amber-400/10 border border-amber-400/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-safari-gold font-medium">WELCOME TO RWANDA</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                Rwanda is often called the "Land of a Thousand Hills," where breathtaking landscapes and diverse wildlife await. 
                With four national parks—Volcanoes, Akagera, Nyungwe, and Gishwati Mukura—adventure-seekers can embark on unforgettable 
                experiences, from tracking rare mountain gorillas to thrilling game drives spotting the big five.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Nestled in the heart of Africa, Rwanda is a gateway to exploring East Africa's natural wonders, offering a central location 
                for extending travels to neighboring countries like Tanzania and Kenya. Its capital city, Kigali, renowned for its cleanliness 
                and safety, offers a blend of modern amenities and authentic African culture.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={OverviewImage}
                alt="Rwanda Landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

     {/* Destinations Grid */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-amber-400/10 border border-amber-400/30">
        <span className="w-2 h-2 rounded-full bg-amber-400" />
        <span className="text-amber-600 font-medium">EXPLORE RWANDA</span>
      </div>
      <h2 className="mt-6 text-4xl font-bold">Popular Attractions in Rwanda</h2>
      <p className="mt-4 text-gray-600">
        Discover Rwanda's most iconic destinations, from misty mountains to pristine lakes,
        each offering unique experiences and unforgettable memories.
      </p>
    </div>

    {/* Fixed Card Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.map((destination) => (
        <Card
          key={destination.name}
          className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer"
          onClick={() => {
            const button = document.getElementById(`learn-more-${destination.name.replace(/\s+/g, '-').toLowerCase()}`);
            button?.click();
          }}
        >
          <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-[250px] object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Use flex layout to push button to bottom */}
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
            <p className="text-gray-600 mb-3 text-sm flex-grow">
              {destination.description}
            </p>
            <div className="space-y-1 mb-4">
              {destination.activities.map((activity) => (
                <div key={activity} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-safari-gold" />
                  <span className="text-gray-700 text-sm">{activity}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    id={`learn-more-${destination.name.replace(/\s+/g, '-').toLowerCase()}`}
                    variant="outline"
                    className="w-full group-hover:bg-safari-gold group-hover:text-white transition-colors duration-300 text-sm"
                  >
                    Learn More
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px] md:max-w-[1000px] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold text-safari-darker">
                      {destination.name}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-6">
                    <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-6">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <DialogDescription className="text-lg text-gray-700 leading-relaxed">
                      {destination.description}
                    </DialogDescription>
                    
                    <div className="mt-8">
                      <h4 className="font-semibold text-2xl mb-4 text-safari-darker">Popular Activities:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {destination.activities.map((activity) => (
                          <div key={activity} className="flex items-center gap-2 bg-safari-gold/5 p-2 rounded-lg">
                            <span className="w-2 h-2 rounded-full bg-safari-gold flex-shrink-0" />
                            <span className="text-gray-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Information Section */}
                    <div className="mt-8 border-t border-gray-200 pt-8">
                      <h4 className="font-semibold text-2xl mb-4 text-safari-darker">Additional Information:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {destination.name === "Volcanoes National Park" && (
                          <>
                            <p className="text-gray-700">• Home to endangered mountain gorillas</p>
                            <p className="text-gray-700">• Altitude ranges from 2,400m to 4,507m</p>
                            <p className="text-gray-700">• Best visited during dry seasons (June-September and December-February)</p>
                            <p className="text-gray-700">• Permits required for gorilla trekking</p>
                          </>
                        )}
                        {destination.name === "Akagera National Park" && (
                          <>
                            <p className="text-gray-700">• Only savannah park in Rwanda</p>
                            <p className="text-gray-700">• Home to the Big Five</p>
                            <p className="text-gray-700">• Features both wetlands and savannah ecosystems</p>
                            <p className="text-gray-700">• Best time for game viewing is in dry season (June-September)</p>
                          </>
                        )}
                        {destination.name === "Nyungwe National Park" && (
                          <>
                            <p className="text-gray-700">• One of Africa's oldest rainforests</p>
                            <p className="text-gray-700">• Features East Africa's only canopy walkway</p>
                            <p className="text-gray-700">• Home to 13 primate species</p>
                            <p className="text-gray-700">• Over 300 bird species recorded</p>
                          </>
                        )}
                        {destination.name === "Gishwati Mukura National Park" && (
                          <>
                            <p className="text-gray-700">• Rwanda's newest national park</p>
                            <p className="text-gray-700">• Important biodiversity corridor</p>
                            <p className="text-gray-700">• Home to endangered species including chimpanzees</p>
                            <p className="text-gray-700">• Community-based tourism initiatives</p>
                          </>
                        )}
                        {destination.name === "Rwanda's Beautiful Lakes" && (
                          <>
                            <p className="text-gray-700">• Lake Kivu is one of Africa's Great Lakes</p>
                            <p className="text-gray-700">• Safe for swimming with no crocodiles or hippos</p>
                            <p className="text-gray-700">• Twin Lakes (Burera and Ruhondo) offer scenic views</p>
                            <p className="text-gray-700">• Popular for water sports and relaxation</p>
                          </>
                        )}
                        {destination.name === "Kigali City" && (
                          <>
                            <p className="text-gray-700">• One of Africa's cleanest cities</p>
                            <p className="text-gray-700">• Rich cultural and artistic scene</p>
                            <p className="text-gray-700">• Modern infrastructure and facilities</p>
                            <p className="text-gray-700">• Vibrant food and coffee culture</p>
                          </>
                        )}
                        {destination.name === "King's Palace Museum" && (
                          <>
                            <p className="text-gray-700">• Traditional royal residence of Rwandan monarchy</p>
                            <p className="text-gray-700">• Houses the famous long-horned Inyambo cattle</p>
                            <p className="text-gray-700">• Exhibits royal artifacts and traditions</p>
                            <p className="text-gray-700">• Cultural demonstrations available</p>
                          </>
                        )}
                        {destination.name === "Kigali Genocide Memorial" && (
                          <>
                            <p className="text-gray-700">• Main genocide memorial site in Rwanda</p>
                            <p className="text-gray-700">• Educational center about Rwanda's history</p>
                            <p className="text-gray-700">• Peace and reconciliation programs</p>
                            <p className="text-gray-700">• Important historical documentation center</p>
                          </>
                        )}
                        {destination.name === "Kigali Nyandungu Eco-Park" && (
                          <>
                            <p className="text-gray-700">• Urban wetland preservation project</p>
                            <p className="text-gray-700">• Recreational and educational facilities</p>
                            <p className="text-gray-700">• Native plant species conservation</p>
                            <p className="text-gray-700">• Environmental education programs</p>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end gap-3">
                      <Button 
                        onClick={() => setShowTripPlanner(true)}
                        className="bg-safari-gold text-black font-semibold hover:bg-safari-gold/90"
                      >
                        Plan Your Trip 
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>
   <Footer />

      {/* Trip Planner Dialog */}
      <TripPlannerDialog 
        open={showTripPlanner} 
        onOpenChange={setShowTripPlanner}
      />
    </div>
  );
};

export default Rwanda;