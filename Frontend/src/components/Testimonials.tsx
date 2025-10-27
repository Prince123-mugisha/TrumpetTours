import { Card } from "@/components/ui/card";
import { Star, Users, Calendar, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    quote: "The gorilla trekking experience in Rwanda was absolutely life-changing. Our guide was incredibly knowledgeable and made us feel safe throughout the journey. Seeing the mountain gorillas in their natural habitat was a dream come true.",
    verified: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    rating: 5,
    quote: "Nyungwe Forest was incredible! The canopy walk and chimp trekking exceeded all expectations. The local guides were so passionate about conservation and wildlife. An unforgettable adventure!",
    verified: true,
  },
  {
    id: 3,
    name: "Emma Williams",
    location: "London, UK",
    rating: 4,
    quote: "A perfect blend of wildlife and culture. From the mountain gorillas to the warm hospitality of the Rwandan people, every moment was special. The accommodations were fantastic too!",
    verified: true,
  },
  {
    id: 4,
    name: "David Mueller",
    location: "Berlin, Germany",
    rating: 5,
    quote: "The Virunga experience was outstanding. Professional guides, stunning landscapes, and close encounters with gorillas made this trip extraordinary. Highly recommend Trumpet Tours!",
    verified: true,
  }
];

const stats = [
  { label: "Travelers", value: "500+", icon: Users },
  { label: "Rating", value: "4.9★", icon: Star },
  { label: "Reviews", value: "200+", icon: CheckCircle },
  { label: "Years", value: "10", icon: Calendar },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-safari-darker">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-safari-gold text-sm font-medium">TESTIMONIALS</span>
          <h2 className="text-3xl font-bold text-white mt-2">
            What Our Travelers Are Saying
          </h2>
        </div>

        {/* Testimonial Cards Carousel */}
        <div className="max-w-3xl mx-auto mb-8 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4">
                  <Card className="bg-safari-dark border-white/10 p-6">
                    {/* Rating & Quote */}
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "fill-safari-gold text-safari-gold"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-white/90 text-base mb-4 min-h-[100px]">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-safari-gold flex items-center justify-center text-safari-darker font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-white">{testimonial.name}</div>
                          <div className="text-white/60 text-sm">{testimonial.location}</div>
                        </div>
                      </div>

                      {testimonial.verified && (
                        <div className="flex items-center space-x-1 text-green-500 text-sm">
                          <CheckCircle className="h-4 w-4" />
                          <span>Verified</span>
                        </div>
                      )}
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-safari-gold text-safari-darker hover:bg-safari-gold/90 border-none" />
            <CarouselNext className="hidden md:flex -right-12 bg-safari-gold text-safari-darker hover:bg-safari-gold/90 border-none" />
          </Carousel>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-lg bg-white/5 border border-white/10"
            >
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
