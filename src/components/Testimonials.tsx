import { Card } from "@/components/ui/card";
import { Star, Users, Calendar, CheckCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 4,
    title: "gorilla trekking",
    quote: "The gorilla trekking experience in Rwanda was absolutely life-changing. Our guide was incredibly knowledgeable and made us feel safe throughout the journey. Seeing the mountain gorillas in their natural habitat was a dream come true.",
    tourCode: "GD/4N",
    travelers: 4,
    date: "Aug 2025",
    verified: true,
  },
];

const stats = [
  { label: "Travelers", value: "500+", icon: Users },
  { label: "Rating", value: "4.9★", icon: Star },
  { label: "Reviews", value: "200+", icon: CheckCircle },
  { label: "Years", value: "15+", icon: Calendar },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-safari-darker">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-safari-gold/30 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-safari-gold rounded-full" />
            <span className="text-safari-gold text-sm font-medium">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Travelers Are Saying
          </h2>
          <p className="text-lg text-white/70">
            Real stories from adventurers who experienced East Africa with us.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-safari-dark border-white/10 p-8 md:p-12">
            {/* Rating & Verified */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonials[0].rating
                        ? "fill-safari-gold text-safari-gold"
                        : "text-gray-600"
                    }`}
                  />
                ))}
              </div>
              {testimonials[0].verified && (
                <div className="flex items-center space-x-1 text-green-500 text-sm">
                  <CheckCircle className="h-4 w-4" />
                  <span>Verified</span>
                </div>
              )}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-4">
              {testimonials[0].title}
            </h3>

            {/* Quote */}
            <blockquote className="text-white/90 text-lg leading-relaxed mb-8">
              "{testimonials[0].quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-safari-gold flex items-center justify-center text-safari-darker font-bold text-xl">
                  {testimonials[0].name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white">{testimonials[0].name}</div>
                  <div className="text-white/60 text-sm">{testimonials[0].location}</div>
                </div>
              </div>

              {/* Tour Details */}
              <div className="hidden md:flex items-center space-x-6 text-sm text-white/60">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{testimonials[0].tourCode}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{testimonials[0].travelers} travelers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{testimonials[0].date}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
