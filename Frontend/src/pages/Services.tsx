import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Car, Newspaper, Building2, Ticket, FileText, CarFront, CarTaxiFront, Handshake } from "lucide-react";
import heroImage from "@/Assets/image1.jpg";
import imgTours from "@/Assets/services1.jpg";
import imgItinerary from "@/Assets/service2.jpeg";
import imgAccommodations from "@/Assets/service3.jpg";
import imgPermits from "@/Assets/service4.jpeg";
import imgConsultation from "@/Assets/services5.jpg";
import imgTransport from "@/Assets/service6.jpeg";
import imgRental from "@/Assets/carRental.jpg";
import imgGreet from "@/Assets/group.jpeg";
import Footer from "@/components/Footer";
import { Link} from "react-router-dom";

import { useState } from "react";
import { TripPlannerDialog } from "../components/ui/trip-planner-dialog";

const Services = () => {
  const [showTripPlanner, setShowTripPlanner] = useState(false);
  
  const services = [
    {
      title: "Guided Tours and Safaris",
      desc: "Trumpet Tours specializes in guided tours and safaris across Rwanda and Uganda with expert guides and tailored itineraries to meet your interests.",
      tag: "Complete Travel Solutions",
      img: imgTours,
      rating: 4.8,
      icon: <Car className="w-5 h-5" />,
    },
    {
      title: "Tailor-made Itineraries",
      desc: "We craft custom itineraries from wildlife encounters to cultural immersions, meticulously designed to match your unique travel goals.",
      tag: "Personalized Adventures",
      img: imgItinerary,
      rating: 4.9,
      icon: <Newspaper className="w-5 h-5" />,
    },
    {
      title: "Accommodations",
      desc: "Access a wide range of accommodations from luxury to budget-friendly stays carefully selected for comfort and location.",
      tag: "Hotels & Lodges",
      img: imgAccommodations,
      rating: 4.7,
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      title: "Tourist Permits",
      desc: "We secure permits for gorilla trekking, wildlife safaris, and more—so you can focus on enjoying your adventure.",
      tag: "Hassle-free Arrangements",
      img: imgPermits,
      rating: 4.6,
      icon: <Ticket className="w-5 h-5" />,
    },
    {
      title: "Travel Consultation",
      desc: "Complimentary guidance on attractions, routes, and cultural etiquette to help you plan an enriching trip.",
      tag: "Free Expert Advice",
      img: imgConsultation,
      rating: 4.9,
      icon: <FileText className="w-5 h-5" />,
    },
    {
      title: "Transportation",
      desc: "Premium 4x4 safari vehicles with professional drivers plus local and regional flight bookings and seamless transfers.",
      tag: "4x4 Vehicles & Flights",
      img: imgTransport,
      rating: 4.8,
      icon: <CarFront className="w-5 h-5" />,
    },
    {
      title: "Car Rental",
      desc: "Reliable rentals for solo travelers or groups—from TXL models to full 4x4 safari vehicles with modern amenities.",
      tag: "Self-drive or Guided",
      img: imgRental,
      rating: 4.7,
      icon: <CarTaxiFront className="w-5 h-5" />,
    },
    {
      title: "Meet and Greet Services",
      desc: "Warm airport welcomes and assistance for a smooth arrival and transition into your destination.",
      tag: "Personalized Welcome",
      img: imgGreet,
      rating: 4.9,
      icon: <Handshake className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-safari-darker">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 md:pt-32 relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="East Africa City Landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 py-24 md:py-32 text-center text-white relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-black/40 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-safari-gold" />
            <span className="text-safari-gold font-medium">OUR SERVICES</span>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold">
            <span className="block text-white">Complete Travel Solutions</span>
            <span className="block text-safari-gold">Across East Africa</span>
          </h1>

          <p className="mt-4 max-w-4xl mx-auto text-white/90 text-lg">
            From unforgettable safari adventures to seamless travel logistics, we provide comprehensive services
            to make your East African experience extraordinary.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Button 
              size="lg" 
              className="bg-safari-gold text-black hover:bg-safari-gold/90 font-semibold"
              onClick={() => setShowTripPlanner(true)}
            >
              Plan Your Trip 
            </Button>
            <Link to="/Destination">
              <Button size="lg" variant="outline" className="bg-transparent text-white border border-white/30 hover:bg-safari-gold">
                View Tours
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-safari-gold/10 border border-safari-gold/30">
              <span className="w-2 h-2 rounded-full bg-safari-gold" />
              <span className="text-safari-gold font-medium">WHAT WE OFFER</span>
            </div>
            <h2 className="mt-6 text-3xl md:text-5xl font-bold text-safari-darker">
              Comprehensive Travel & Tourism Services
            </h2>
            <p className="mt-4 text-gray-600">
              Whether you're planning a safari adventure, need reliable transportation, or organizing an
              event, we've got you covered with our full range of professional services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-52 sm:h-56 md:h-60 overflow-hidden flex-shrink-0">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800 shadow">
                    ★ {service.rating}
                  </div>
                </div>

                {/* Content (flex-1 ensures equal height) */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-safari-gold/15 rounded-lg flex-shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-safari-darker">{service.title}</h3>
                  </div>

                  {/* Description: use webkit line-clamp for consistent height */}
                  <p
                    className="mt-3 text-gray-600 text-sm leading-relaxed"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {service.desc}
                  </p>

                  {/* Bottom row: tag + button (kept at bottom) */}
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-xs bg-safari-gold/10 text-safari-darker border border-safari-gold/30 px-3 py-1 rounded-full font-medium flex-shrink-0 whitespace-nowrap">
                      {service.tag}
                    </span>

                    <div className="ml-auto flex items-center gap-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" className="bg-safari-gold text-black font-semibold hover:bg-safari-gold/90">
                            Learn More
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[625px]">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-3">
                              <div className="w-10 h-10 flex items-center justify-center bg-safari-gold/15 rounded-lg">
                                {service.icon}
                              </div>
                              {service.title}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="mt-6">
                            <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6">
                              <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800 shadow">
                                ★ {service.rating}
                              </div>
                            </div>
                            <DialogDescription className="text-base text-gray-700">
                              {service.desc}
                            </DialogDescription>
                            <div className="mt-6">
                              <h4 className="font-semibold mb-3">What's Included:</h4>
                              <ul className="space-y-2">
                                {service.title === "Guided Tours and Safaris" && (
                                  <>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Expert local guides with extensive knowledge
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Customized safari itineraries
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      4x4 safari vehicles with pop-up roof
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Wildlife viewing and photography opportunities
                                    </li>
                                  </>
                                )}
                                {service.title === "Tailor-made Itineraries" && (
                                  <>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Personalized travel planning
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Flexible scheduling options
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Activity and attraction recommendations
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Budget-conscious planning
                                    </li>
                                  </>
                                )}
                                {service.title === "Accommodations" && (
                                  <>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Luxury lodges and tented camps
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Mid-range hotel options
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Budget-friendly guesthouses
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Special accommodation requests
                                    </li>
                                  </>
                                )}
                                {service.title === "Tourist Permits" && (
                                  <>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Gorilla trekking permits
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      National park entry fees
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Activity permits
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Visa assistance
                                    </li>
                                  </>
                                )}
                                {service.title === "Travel Consultation" && (
                                  <>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Expert travel advice
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Route planning assistance
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Cultural guidance
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Safety recommendations
                                    </li>
                                  </>
                                )}
                                {service.title === "Transportation" && (
                                  <>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Airport transfers
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      4x4 safari vehicles
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Professional drivers
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Domestic flight bookings
                                    </li>
                                  </>
                                )}
                                {service.title === "Car Rental" && (
                                  <>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Various vehicle options
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Insurance coverage
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      24/7 roadside assistance
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      GPS navigation systems
                                    </li>
                                  </>
                                )}
                                {service.title === "Meet and Greet Services" && (
                                  <>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Airport welcome service
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Luggage assistance
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Immigration support
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-safari-gold"/>
                                      Local orientation
                                    </li>
                                  </>
                                )}
                              </ul>
                            </div>
                            <div className="mt-6 flex justify-end">
                              <Button className="bg-safari-gold text-black font-semibold hover:bg-safari-gold/90">
                                Plan Your Trip
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
       
       {/* Why Choose Us */}
       <section className="py-20 bg-gray-50">
         <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto mb-12">
             <h3 className="text-3xl md:text-5xl font-bold text-safari-darker">Why Choose Our Services?</h3>
             <p className="mt-4 text-gray-600">
               With over 15 years of experience in East African tourism and travel services, we provide
               unmatched expertise and reliability.
             </p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             <Card className="text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
               <div className="mx-auto w-12 h-12 rounded-full bg-safari-gold text-safari-darker flex items-center justify-center">
                 {/* trophy icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 1 1-10 0V4Z"/><path d="M17 8h1a3 3 0 0 0 3-3V4h-4"/><path d="M7 8H6a3 3 0 0 1-3-3V4h4"/></svg>
               </div>
               <h4 className="mt-4 font-semibold text-safari-darker">15+ Years Experience</h4>
               <p className="mt-2 text-sm text-gray-600">Proven track record in East African tourism and travel services</p>
             </Card>

             <Card className="text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
               <div className="mx-auto w-12 h-12 rounded-full bg-safari-gold text-safari-darker flex items-center justify-center">
                 {/* globe icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/></svg>
               </div>
               <h4 className="mt-4 font-semibold text-safari-darker">Regional Expertise</h4>
               <p className="mt-2 text-sm text-gray-600">Deep knowledge of Rwanda, Uganda, Kenya, and Tanzania</p>
             </Card>

             <Card className="text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
               <div className="mx-auto w-12 h-12 rounded-full bg-safari-gold text-safari-darker flex items-center justify-center">
                 {/* shield check icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
               </div>
               <h4 className="mt-4 font-semibold text-safari-darker">Safety & Reliability</h4>
               <p className="mt-2 text-sm text-gray-600">Licensed, insured, and committed to your satisfaction</p>
             </Card>

             <Card className="text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
               <div className="mx-auto w-12 h-12 rounded-full bg-safari-gold text-safari-darker flex items-center justify-center">
                 {/* handshake icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M15 5H9a3 3 0 0 0-3 3v10"/><path d="m9 12 3 3 3-3"/><path d="M22 16.5V7a2 2 0 0 0-2-2h-5"/><path d="M2 16.5V11a2 2 0 0 1 2-2h3"/></svg>
               </div>
               <h4 className="mt-4 font-semibold text-safari-darker">24/7 Support</h4>
               <p className="mt-2 text-sm text-gray-600">Round-the-clock assistance for all services and clients</p>
             </Card>
           </div>
         </div>
       </section>

      {/* CTA */}

       <section className="relative overflow-hidden py-24 text-white text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d5b062]/30 via-[#111111] to-black" />
        <div className="container mx-auto px-4 relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold">Ready to Start Your Safari Adventure?</h3>
          <p className="mt-4 text-white/80 max-w-3xl mx-auto">
            Join thousands of travelers who discovered the magic of East Africa with us. Let's create
            memories that will last a lifetime.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Button 
              size="lg" 
              className="bg-safari-gold text-black hover:bg-safari-gold/90 font-semibold"
              onClick={() => setShowTripPlanner(true)}
            >
              Plan Your Custom Trip
            </Button>
            <Link to="/Destination">
              <Button size="lg" variant="outline" className="bg-transparent text-white border border-white/30 hover:bg-white/10 hover:text-white">View All Tours</Button>
            </Link>
          </div>

          <div className="mt-12 border-t border-white/10" />

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="text-4xl font-bold">15+</div>
              <div className="mt-2 text-sm text-white/70">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold">5,000+</div>
              <div className="mt-2 text-sm text-white/70">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold">50+</div>
              <div className="mt-2 text-sm text-white/70">Safari Tours</div>
            </div>
            <div>
              <div className="text-4xl font-bold">95%</div>
              <div className="mt-2 text-sm text-white/70">Success Rate</div>
            </div>
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

export default Services;

