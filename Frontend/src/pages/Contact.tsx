import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Button } from "@/components/ui/button";
import HeroImage from "@/Assets/Kigali-City.jpg";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent! We'll get back to you soon.",
          variant: "default",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-safari-darker">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HeroImage}
            alt="Kigali Convention Centre"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto py-32 sm:py-32 mt-12 sm:mt-16">
          {/* Badge */}
          <div className="inline-block bg-safari-gold/10 border border-[#D4AF37]/40 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-[#D4AF37] font-semibold tracking-wide mb-4 sm:mb-6 text-xs sm:text-sm">
            GET IN TOUCH
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            <span className="block text-white">Contact Our &</span>
            <span className="block text-safari-gold mt-2">Trumpet Team</span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
            Ready to plan your East African adventure? Let's create your perfect
            safari experience with our local expertise.
          </p>

          {/* Info Cards */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {/* Phone */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 transition hover:bg-white/15">
              <div className="flex items-center justify-center mb-2 text-[#D4AF37]">
                <FaPhoneAlt className="w-5 h-5 sm:w-6 sm:h-6 text-safari-gold" />
              </div>
              <div className="text-sm sm:text-base font-semibold text-white">
                +250 793 766 308
              </div>
              <div className="text-xs sm:text-sm text-white/80 mt-1">24/7 Support</div>
            </div>

            {/* Email */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 transition hover:bg-white/15">
              <div className="flex items-center justify-center mb-2 text-[#D4AF37]">
                <MdEmail className="w-5 h-5 sm:w-6 sm:h-6 text-safari-gold" />
              </div>
              <div className="text-xs sm:text-sm md:text-base font-semibold text-white break-words">
                trumpettoursafaris@gmail.com
              </div>
              <div className="text-xs sm:text-sm text-white/80 mt-1">Quick Response</div>
            </div>

            {/* Location */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 transition hover:bg-white/15">
              <div className="flex items-center justify-center mb-2 text-[#D4AF37]">
                <MdLocationOn className="w-5 h-5 sm:w-6 sm:h-6 text-safari-gold" />
              </div>
              <div className="text-sm sm:text-base font-semibold text-white">
                Kigali   norrsken  
              </div>
              <div className="text-xs sm:text-sm text-white/80 mt-1">Local Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 bg-gray-50" id="safari-quote">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-6">
          {/* Left Side - Quote Form */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              Get Your Personalized Safari Quote
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Fill out the form below and our safari experts will create a
              customized itinerary just for you.
            </p>

            <form
              action="https://formspree.io/f/xovkboov"
              method="POST"
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                  className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                />
                <select 
                  name="topic" 
                  className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                >
                  <option value="">Select a topic</option>
                  <option value="Wildlife Safari">Wildlife Safari</option>
                  <option value="Gorilla Trekking">Gorilla Trekking</option>
                  <option value="Cultural Tour">Cultural Tour</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your dream safari experience..."
                required
                className="border border-gray-300 rounded-lg p-3 w-full h-32 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              />

              <button
                type="submit"
                className="w-full bg-safari-gold hover:bg-safari-gold/90 text-[#1D1F16] font-semibold py-3 sm:py-4 rounded-lg transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right Side - Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <p className="text-sm sm:text-base mb-3">
                <strong>Our Office:</strong>
                <br />
                Kigali, Norrsken
                <br />
                East Africa Safari Hub
              </p>
              <p className="text-sm sm:text-base mb-3">
                <strong>Phone:</strong> +250 793 766 308
              </p>
              <p className="text-sm sm:text-base mb-3">
                <strong>Email:</strong> trumpettoursafaris@gmail.com
              </p>
            </div>

            {/* WhatsApp contact */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <FaWhatsapp className="text-[#25D366] w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Quick Contact via WhatsApp
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Chat instantly with our experts on WhatsApp!
              </p>
              <a
                href="https://wa.me/250793766308?text=Hello!%20I%20need%20help%20with%20my%20trip%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                Chat with us on WhatsApp
              </a>
              <p className="text-xs sm:text-sm text-gray-500 mt-3">
                Available Mon–Sun, 11:00 AM – 5:00 PM CAT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/250793766308?text=Hello!%20I%20need%20help%20with%20my%20trip%20inquiry."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 z-50"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

      <Footer />
    </div>
  );
};

export default Contact;