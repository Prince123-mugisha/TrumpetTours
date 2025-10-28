import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import heroImage from "@/Assets/uganda.jpg";
import bwindiImage from "@/Assets/Bwindi.jpg";
import kibaleImage from "@/Assets/Kibale-chimpanzees.jpg";
import queenImage from "@/Assets/QueenElizabeth.jpg";
import kidepoImage from "@/Assets/Kidepo.jpg";
import mgahingaImage from "@/Assets/Mgahinga-Gorilla.jpg";
import murchisionImage from "@/Assets/Murchison-Falls.jpg";
import mburoImage from "@/Assets/Lake Mburo.jpg";
import elgonImage from "@/Assets/Mountain-Elgon-National-Park.jpg";
import semulikImage from "@/Assets/Kibale-chimpanzees.jpg";

import { TripPlannerDialog } from "@/components/ui/trip-planner-dialog";
import { useState } from "react";

const Uganda = () => {
  const [showTripPlanner, setShowTripPlanner] = useState(false);
  const destinations = [
    {
      name: "Bwindi Impenetrable Forest",
      image: bwindiImage,
      description: "Home to half of the world's mountain gorilla population, this UNESCO World Heritage site offers unforgettable primate encounters.",
      activities: ["Gorilla Trekking", "Nature Walks", "Bird Watching", "Community Visits"],
    },
    {
      name: "Queen Elizabeth National Park",
      image: queenImage,
      description: "Uganda's most popular safari destination, famous for tree-climbing lions and diverse wildlife in stunning savannah landscapes.",
      activities: ["Game Drives", "Boat Cruises", "Chimpanzee Tracking", "Bird Watching"],
    },
    {
      name: "Kibale National Park",
      image: kibaleImage,
      description: "The primate capital of the world, hosting 13 primate species including the largest population of chimpanzees in East Africa.",
      activities: ["Chimpanzee Tracking", "Forest Walks", "Night Walks", "Cultural Tours"],
    },
    {
      name: "Kidepo Valley National Park",
      image: kidepoImage,
      description: "A remote paradise offering authentic African wilderness experiences with unique wildlife and spectacular savannah landscapes.",
      activities: ["Game Drives", "Cultural Visits", "Bird Watching", "Walking Safaris"],
    },
    {
      name: "Mgahinga Gorilla National Park",
      image: mgahingaImage,
      description: "Part of the Virunga Mountains, offering gorilla trekking and golden monkey tracking against volcanic backdrops.",
      activities: ["Gorilla Trekking", "Golden Monkey Tracking", "Volcano Hiking", "Batwa Trail"],
    },
    {
      name: "Murchison Falls National Park",
      image: murchisionImage,
      description: "Uganda's largest national park, featuring the dramatic Murchison Falls and abundant wildlife along the Nile River.",
      activities: ["Game Drives", "Nile River Cruises", "Waterfall Visits", "Sport Fishing"],
    },
    {
      name: "Lake Mburo National Park",
      image: mburoImage,
      description: "A compact gem offering intimate wildlife experiences, including zebras, impalas, and over 350 bird species.",
      activities: ["Game Drives", "Boat Safaris", "Horseback Safaris", "Mountain Biking"],
    },
    {
      name: "Mount Elgon National Park",
      image: elgonImage,
      description: "An ancient extinct volcano with diverse vegetation zones, caves, and spectacular hiking opportunities.",
      activities: ["Cave Exploration", "Mountain Climbing", "Bird Watching", "Nature Walks"],
    },
    {
      name: "Semuliki National Park",
      image: semulikImage,
      description: "A slice of Central African rainforest with unique wildlife, hot springs, and rich cultural heritage.",
      activities: ["Hot Springs Visit", "Bird Watching", "Forest Walks", "Cultural Tours"],
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

    {/* Hero Section */}
<section className="pt-28 md:pt-32 relative overflow-hidden min-h-[100vh] flex items-center">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={heroImage}
      alt="Uganda Landscape"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/60" />
  </div>

  {/* Hero Content */}
  <div className="container mx-auto px-4 relative z-10 text-center text-white">
    {/* Tagline */}
    <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 border border-white/20">
      <span className="w-2 h-2 rounded-full bg-safari-gold" />
      <span className="text-safari-gold font-medium">DISCOVER UGANDA</span>
    </div>

    {/* Title */}
    <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
      <span className="block text-white">Experience the Pearl of</span>
      <span className="block text-safari-gold">Africa's Beauty</span>
    </h1>

    {/* Description */}
    <p className="mt-4 max-w-3xl mx-auto text-white/90 text-lg">
      Journey through Uganda’s breathtaking wilderness — from gorilla-inhabited forests 
      to the thunderous Murchison Falls. Discover a land teeming with wildlife, adventure, 
      and the warmth of its people.
    </p>

    {/* Statistics Cards */}
    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {[
        { value: "10+", label: "National Parks" },
        { value: "1,200+", label: "Bird Species" },
        { value: "5+", label: "UNESCO Heritage Sites" },
      ].map((item, i) => (
        <Card
          key={i}
          className="bg-white/10 backdrop-blur border-white/20 p-6 text-center text-white transition-transform duration-300 hover:scale-105"
        >
          <div className="text-4xl font-bold text-white">{item.value}</div>
          <div className="text-sm text-white/90 mt-2">{item.label}</div>
        </Card>
      ))}
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
                <span className="text-safari-gold font-medium">WELCOME TO UGANDA</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                Uganda, known as the "Pearl of Africa," is a land of exceptional natural beauty and biodiversity. 
                With ten national parks, including the famous Bwindi Impenetrable Forest and Queen Elizabeth National Park, 
                visitors can experience everything from tracking mountain gorillas to witnessing tree-climbing lions and 
                encountering chimpanzees in their natural habitat.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Located at the heart of East Africa, Uganda offers a unique blend of savannah, rainforest, and alpine landscapes. 
                From the mighty River Nile to the snow-capped Rwenzori Mountains, the country boasts incredible diversity in both 
                landscapes and wildlife, making it a premier destination for nature lovers and adventure seekers alike.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={queenImage}
                alt="Uganda Landscape"
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
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-safari-gold/10 border border-safari-gold/30">
              <span className="w-2 h-2 rounded-full bg-safari-gold" />
              <span className="text-safari-gold font-medium">EXPLORE UGANDA</span>
            </div>
            <h2 className="mt-6 text-4xl font-bold">Popular Attractions in Uganda</h2>
            <p className="mt-4 text-gray-600">
              Discover Uganda's most iconic destinations, from dense rainforests to expansive savannas,
              each offering unique wildlife experiences and unforgettable adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <Card key={destination.name} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 max-w-sm mx-auto">
                <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-[250px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{destination.description}</p>
                  <div className="space-y-1">
                    {destination.activities.map((activity) => (
                      <div key={activity} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-safari-gold" />
                        <span className="text-gray-700 text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
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

                          <div className="mt-8 border-t border-gray-200 pt-8">
                            <h4 className="font-semibold text-2xl mb-4 text-safari-darker">Additional Information:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {destination.name === "Bwindi Impenetrable Forest" && (
                                <>
                                  <p className="text-gray-700">• Home to approximately 400 mountain gorillas</p>
                                  <p className="text-gray-700">• Altitude ranges from 1,160m to 2,607m</p>
                                  <p className="text-gray-700">• Best visited during dry seasons (June-August and December-February)</p>
                                  <p className="text-gray-700">• UNESCO World Heritage Site since 1994</p>
                                </>
                              )}
                              {destination.name === "Queen Elizabeth National Park" && (
                                <>
                                  <p className="text-gray-700">• Uganda's most visited national park</p>
                                  <p className="text-gray-700">• Famous for tree-climbing lions</p>
                                  <p className="text-gray-700">• Home to over 95 mammal species</p>
                                  <p className="text-gray-700">• Features the Kazinga Channel connecting two lakes</p>
                                </>
                              )}
                              {destination.name === "Kibale National Park" && (
                                <>
                                  <p className="text-gray-700">• Contains over 1,500 chimpanzees</p>
                                  <p className="text-gray-700">• 13 different primate species</p>
                                  <p className="text-gray-700">• Over 375 bird species recorded</p>
                                  <p className="text-gray-700">• Best chimp viewing during dry seasons</p>
                                </>
                              )}
                              {destination.name === "Kidepo Valley National Park" && (
                                <>
                                  <p className="text-gray-700">• One of Africa's most isolated parks</p>
                                  <p className="text-gray-700">• Home to over 77 mammal species</p>
                                  <p className="text-gray-700">• Spectacular savannah landscapes</p>
                                  <p className="text-gray-700">• Rich cultural heritage with Karamojong people</p>
                                </>
                              )}
                              {destination.name === "Mgahinga Gorilla National Park" && (
                                <>
                                  <p className="text-gray-700">• Part of the Virunga Mountains</p>
                                  <p className="text-gray-700">• Home to endangered mountain gorillas</p>
                                  <p className="text-gray-700">• Features three extinct volcanoes</p>
                                  <p className="text-gray-700">• Cultural significance to Batwa pygmies</p>
                                </>
                              )}
                              {destination.name === "Murchison Falls National Park" && (
                                <>
                                  <p className="text-gray-700">• Uganda's largest national park</p>
                                  <p className="text-gray-700">• Features dramatic 43m waterfall</p>
                                  <p className="text-gray-700">• Home to over 450 bird species</p>
                                  <p className="text-gray-700">• Excellent wildlife viewing along the Nile</p>
                                </>
                              )}
                              {destination.name === "Lake Mburo National Park" && (
                                <>
                                  <p className="text-gray-700">• Only park with impala and Burchell's zebra</p>
                                  <p className="text-gray-700">• Perfect for walking safaris</p>
                                  <p className="text-gray-700">• Contains five lakes within its boundaries</p>
                                  <p className="text-gray-700">• Closest national park to Kampala</p>
                                </>
                              )}
                              {destination.name === "Mount Elgon National Park" && (
                                <>
                                  <p className="text-gray-700">• Largest solitary volcanic base in the world</p>
                                  <p className="text-gray-700">• Features unique flora zones</p>
                                  <p className="text-gray-700">• Home to over 300 bird species</p>
                                  <p className="text-gray-700">• Ancient cave paintings and hot springs</p>
                                </>
                              )}
                              {destination.name === "Semuliki National Park" && (
                                <>
                                  <p className="text-gray-700">• Extension of the Congo Basin forest</p>
                                  <p className="text-gray-700">• Features unique Sempaya Hot Springs</p>
                                  <p className="text-gray-700">• Over 440 recorded bird species</p>
                                  <p className="text-gray-700">• Home to forest elephant and primates</p>
                                </>
                              )}
                            </div>
                          </div>

                          <div className="mt-6 flex justify-end gap-3">
                            <DialogClose asChild>
                              <Button 
                                className="bg-safari-gold text-black font-semibold hover:bg-safari-gold/90"
                                onClick={() => {
                                  setTimeout(() => {
                                    setShowTripPlanner(true); // Open the trip planner dialog after the current dialog closes
                                  }, 100);
                                }}
                              >
                                Plan Your Visit
                              </Button>
                            </DialogClose>
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
      <TripPlannerDialog 
        open={showTripPlanner}
        onOpenChange={setShowTripPlanner}
      />
    </div>
  );
};

export default Uganda;