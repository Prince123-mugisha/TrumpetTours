import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, MapPin, Mail, Phone, Calendar } from "lucide-react";
import { navLinks } from "@/components/Navigation";
import rdbLogo from "@/Assets/Rdblogo.png";
import visitRwandaLogo from "@/Assets/visitRwanda.jpg";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Footer = () => {
  const quickLinks = navLinks;
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xovkboov", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ 
          email,
          subject: "Newsletter Subscription",
          message: "New newsletter subscription request"
        }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Thank you for subscribing to our newsletter!",
          variant: "default",
        });
        setEmail("");
      } else {
        toast({
          title: "Error",
          description: "Failed to subscribe. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please check your connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const tourCategories = [
    { name: "Rwanda Safari", href: "/destinations/rwanda" },
    { name: "Uganda Safari", href: "/destinations/uganda" },
    { name: "Gorilla Trekking", href: "/itineraries/packages" },
    { name: "Luxury Safari", href: "/itineraries/packages" },
    { name: "Family Adventures", href: "/itineraries/packages" },
  ];

  return (
    <footer className="bg-safari-darker text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-xl font-bold">
              <span className="text-safari-gold">Trumpet</span> Safari Tours
            </div>
            <p className="text-white/70 leading-relaxed">
              Experience Eastern Africa's breathtaking landscapes and wildlife through
              expertly guided safari adventures. Creating unforgettable memories, one
              traveler at a time.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-white/70">
                <MapPin className="h-5 w-5 text-safari-gold mt-0.5" />
                <span>Kigali, Rwanda, East Africa</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="h-5 w-5 text-safari-gold" />
                <a
                  href="mailto:trumpettoursrwanda@gmail.com"
                  className="hover:text-safari-gold transition-colors"
                >
                  trumpettoursafaris@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="h-5 w-5 text-safari-gold" />
                <a
                  href="tel:+250793766308"
                  className="hover:text-safari-gold transition-colors"
                >
                  +250 793 766 308
                </a>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                {/* Book a Call Button */}
                <a
                  href="https://calendar.app.google/wjBJKzKuMUrzeXVPA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-safari-gold hover:bg-safari-gold/90 text-black font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Book a Call
                  </Button>
                </a>

                {/* WhatsApp Help Button */}
                <a
                  href="https://wa.me/250793766308?text=Hello!%20I%20need%20help%20with%20my%20travel%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#25D366] hover:bg-[#1ebe57] text-white font-medium flex items-center gap-2">
                    <svg
                      viewBox="0 0 32 32"
                      className="h-5 w-5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M19.11 17.34c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.68.15-.2.29-.78.94-.96 1.13-.18.2-.36.22-.65.08-.29-.15-1.23-.45-2.35-1.43-.87-.77-1.45-1.72-1.62-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.3-.49.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.53.08-.81.38-.27.29-1.06 1.04-1.06 2.53s1.09 2.94 1.24 3.14c.15.2 2.15 3.28 5.21 4.6.73.32 1.29.51 1.73.65.73.23 1.39.2 1.91.12.58-.09 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.37-.07-.13-.26-.21-.55-.36z" />
                      <path d="M16.02 3.05C9.41 3.05 4.07 8.39 4.07 15c0 2.11.55 4.08 1.51 5.79L4 28l7.38-1.53c1.65.9 3.54 1.41 5.64 1.41 6.61 0 11.95-5.34 11.95-11.95S22.63 3.05 16.02 3.05zm0 21.74c-1.9 0-3.66-.56-5.14-1.53l-.37-.24-4.37.91.93-4.26-.24-.4c-.92-1.52-1.45-3.3-1.45-5.18 0-5.47 4.45-9.92 9.92-9.92s9.92 4.45 9.92 9.92-4.45 9.92-9.92 9.92z" />
                    </svg>
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-safari-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Categories */}
          <div>
            <h3 className="text-base font-bold mb-6">Tour Categories</h3>
            <ul className="space-y-3">
              {tourCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.href}
                    className="text-white/70 hover:text-safari-gold transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base font-bold mb-6">Stay Updated</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for the latest travel tips, conservation
              stories, and exclusive safari offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-safari-gold text-safari-darker hover:bg-safari-gold/90 font-medium"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            <div className="flex items-center space-x-4 mt-6">
              <span className="text-white/70">Follow us:</span>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/trumpet_tours/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-safari-gold hover:text-safari-darker transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@trumpet_rwanda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-safari-gold hover:text-safari-darker transition-all"
              >
                <svg viewBox="0 0 48 48" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M33.5 14.5c2.2 1.6 4.8 2.6 7.6 2.7v6.3c-3.2-.1-6.2-1.1-8.8-2.9v10.7c0 7.3-5.9 13.2-13.2 13.2S5.9 38.6 5.9 31.3 11.8 18.1 19.1 18.1c1.4 0 2.7.2 3.9.6v6.7c-1.2-.6-2.6-1-4-1-4.5 0-8.2 3.7-8.2 8.2s3.7 8.2 8.2 8.2 8.2-3.7 8.2-8.2V5h6.3c.1 3.6 1.9 6.9 4.6 9.5z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/trumpet_rwanda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-safari-gold hover:text-safari-darker transition-all"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M18.244 2H21l-6.53 7.46L22 22h-6.59l-4.61-6.26L5.3 22H2.54l7.02-8.02L2 2h6.7l4.17 5.6L18.24 2zm-1.15 18h1.73L7.01 3.99H5.2L17.09 20z" />
                </svg>
              </a>

              {/* WhatsApp (Icon Only - Updated) */}
              <a
                href="https://wa.me/250793766308?text=Hello!%20I%20need%20help%20with%20my%20travel%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all"
              >
                <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M19.11 17.34c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.68.15-.2.29-.78.94-.96 1.13-.18.2-.36.22-.65.08-.29-.15-1.23-.45-2.35-1.43-.87-.77-1.45-1.72-1.62-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.3-.49.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.53.08-.81.38-.27.29-1.06 1.04-1.06 2.53s1.09 2.94 1.24 3.14c.15.2 2.15 3.28 5.21 4.6.73.32 1.29.51 1.73.65.73.23 1.39.2 1.91.12.58-.09 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.37-.07-.13-.26-.21-.55-.36z"/>
                  <path d="M16.02 3.05C9.41 3.05 4.07 8.39 4.07 15c0 2.11.55 4.08 1.51 5.79L4 28l7.38-1.53c1.65.9 3.54 1.41 5.64 1.41 6.61 0 11.95-5.34 11.95-11.95S22.63 3.05 16.02 3.05zm0 21.74c-1.9 0-3.66-.56-5.14-1.53l-.37-.24-4.37.91.93-4.26-.24-.4c-.92-1.52-1.45-3.3-1.45-5.18 0-5.47 4.45-9.92 9.92-9.92s9.92 4.45 9.92 9.92-4.45 9.92-9.92 9.92z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-base font-bold mb-6">Our Partners</h3>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <img src={rdbLogo} alt="RDB" className="h-10 w-auto object-contain" />
                <span className="text-white/80">RDB</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={visitRwandaLogo}
                  alt="Visit Rwanda"
                  className="h-10 w-auto object-contain"
                />
                <span className="text-white/80">Visit Rwanda</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2025 Trumpet Safari Tours. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-white/60 hover:text-safari-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-white/60 hover:text-safari-gold transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
