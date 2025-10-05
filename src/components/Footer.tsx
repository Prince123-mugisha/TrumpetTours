import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Safari Tours", href: "/tours" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const tourCategories = [
    { name: "Wildlife Safari", href: "/tours/wildlife" },
    { name: "Gorilla Trekking", href: "/tours/gorilla" },
    { name: "Cultural Tours", href: "/tours/cultural" },
    { name: "Luxury Safari", href: "/tours/luxury" },
    { name: "Family Adventures", href: "/tours/family" },
  ];

  return (
    <footer className="bg-safari-darker text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-2xl font-bold">
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
                <a href="mailto:info@trumpetsafaris.com" className="hover:text-safari-gold transition-colors">
                  info@trumpetsafaris.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="h-5 w-5 text-safari-gold" />
                <a href="tel:+250788310014" className="hover:text-safari-gold transition-colors">
                  +250 788 310 014
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
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
            <h3 className="text-lg font-bold mb-6">Tour Categories</h3>
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
            <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for the latest travel tips, conservation
              stories, and exclusive safari offers.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="w-full bg-safari-gold text-safari-darker hover:bg-safari-gold/90 font-medium">
                Subscribe
              </Button>
            </div>
            <div className="flex items-center space-x-4 mt-6">
              <span className="text-white/70">Follow us:</span>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-safari-gold hover:text-safari-darker transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
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
              <Link to="/privacy" className="text-white/60 hover:text-safari-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-safari-gold transition-colors">
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
