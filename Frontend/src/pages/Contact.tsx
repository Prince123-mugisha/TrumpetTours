import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import HeroImage from "@/Assets/Kigali-City.jpg";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission using Formspree
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
      <section className="relative flex items-center justify-center min-h-[90vh] overflow-hidden">
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
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-24">
          <div className="inline-block bg-safari-gold/10 border border-safari-gold/40 rounded-full px-5 py-1.5 text-safari-gold font-semibold tracking-wide mb-4 text-sm">
            GET IN TOUCH
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="block text-white">Contact Our &</span>
            <span className="block text-safari-gold">Trumpet Team</span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Ready to plan your East African adventure? Let's create your perfect
            safari experience with our local expertise.
          </p>

          {/* Info Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {/* Phone */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 transition hover:bg-white/15">
              <div className="flex items-center justify-center mb-1.5 text-safari-gold text-lg">
                <FaPhoneAlt className="w-4 h-4" />
              </div>
              <div className="text-base font-semibold text-white">
                +250 793 766 308
              </div>
              <div className="text-xs text-white/80">24/7 Support</div>
            </div>

            {/* Email */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 transition hover:bg-white/15">
              <div className="flex items-center justify-center mb-1.5 text-safari-gold text-lg">
                <MdEmail className="w-4 h-4" />
              </div>
              <div className="text-base font-semibold text-white break-words">
                 trumpettoursafaris@gmail.com
              </div>
              <div className="text-xs text-white/80">Quick Response</div>
            </div>

            {/* Location */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 transition hover:bg-white/15">
              <div className="flex items-center justify-center mb-2 text-safari-gold text-xl">
                <MdLocationOn className="w-5 h-5" />
              </div>
              <div className="text-lg font-semibold text-white">
                Kigali, Rwanda
              </div>
              <div className="text-sm text-white/80">Local Experts</div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendar.app.google/wjBJKzKuMUrzeXVPA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="bg-safari-gold hover:bg-safari-gold/90 text-black font-medium flex items-center gap-2 px-10 py-6 rounded-full text-lg"
              >
                <Calendar className="h-5 w-5" />
                Book a Call
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 bg-gray-50" id="safari-quote">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 px-6">
          {/* Left Side - Quote Form */}
          <div className="bg-white rounded-2xl shadow-md p-4">
            <h2 className="text-xl font-bold mb-2">
              Get Your Personalized Safari Quote
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Fill out the form below and our safari experts will create a
              customized itinerary just for you.
            </p>

            {/* ✅ Formspree form */}
            <form
              action="https://formspree.io/f/xovkboov"
              method="POST"
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                  className="border rounded-md p-2 w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  className="border rounded-md p-2 w-full"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  className="border rounded-md p-2 w-full"
                />
                <select name="topic" className="border rounded-md p-2 w-full">
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
                className="border rounded-md p-2 w-full h-24"
              />

              <Button
                type="submit"
                className="w-full bg-safari-gold hover:bg-safari-gold/90 text-black font-semibold py-6 rounded-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Right Side - Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">
                Contact Information
              </h3>
              <p className="text-sm mb-2">
                <strong>Our Office:</strong>
                <br />
                Kigali, Rwanda
                <br />
                East Africa Safari Hub
              </p>
              <p className="text-sm mb-2">
                <strong>Phone:</strong> +250 793 766 308
              </p>
              <p className="text-sm mb-2">
                <strong>Email:</strong> trumpettoursafaris@gmail.com
              </p>
            </div>

            {/* ✅ WhatsApp contact */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <FaWhatsapp className="text-[#25D366] w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Quick Contact via WhatsApp
              </h3>
              <p className="text-sm text-gray-600 mb-4">
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
              <p className="text-xs text-gray-500 mt-3">
                Available Mon–Sun, 11:00 AM – 10:00 PM EAT
              </p>
            </div>

            {/* Why Choose Section */}
            <div className="bg-[#7b5c32] text-white rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">
                Why Choose Trumpet Tours?
              </h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-xl">✔</span>
                  <span>15+ years of safari expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-xl">✔</span>
                  <span>Custom itineraries tailored to you</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-xl">✔</span>
                  <span>Local guides & authentic experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-xl">✔</span>
                  <span>24/7 support during your trip</span>
                </li>
              </ul>

              <hr className="my-4 border-yellow-700/50" />

              <p className="text-center text-yellow-300 text-3xl font-bold">
                5,000+
                <span className="block text-base text-white font-normal mt-1">
                  Happy Travelers
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Floating WhatsApp button */}
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
