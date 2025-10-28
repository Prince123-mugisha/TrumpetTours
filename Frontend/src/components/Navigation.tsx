import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, Plane } from "lucide-react";
import trumpetLogo from "@/Assets/logo192.png";
import { TripPlannerDialog } from "@/components/ui/trip-planner-dialog";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/About-Us" },
  { name: "Services", href: "/services" },
  { name: "Destination", href: "/Destination" },
  { name: "Itineraries", href: "/Itineraries" },
  { name: "Contact us", href: "/contact" },
];

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const [itinerariesOpen, setItinerariesOpen] = useState(false);
  const [isMobileDestOpen, setIsMobileDestOpen] = useState(false);
  const [isMobileItinerariesOpen, setIsMobileItinerariesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTripPlanner, setShowTripPlanner] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    // Handle About Us page specifically
    if (path === "/about-us") {
      return location.pathname.toLowerCase() === "/about-us" || 
             location.pathname.toLowerCase() === "/aboutus" ||
             location.pathname.toLowerCase() === "/about";
    }
    return location.pathname.toLowerCase().startsWith(path.toLowerCase());
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
                   w-[90%] max-w-7xl rounded-2xl backdrop-blur-md border border-white/10
                   ${isScrolled ? 'bg-black/95' : 'bg-gradient-to-r from-[#1D1F16]/70 via-[#2E3126]/70 to-[#1D1F16]/70'}
                   shadow-lg transition-all duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={trumpetLogo}
              alt="Trumpet Tours Logo"
              className="h-12 w-12 rounded-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.name === "Destination") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setDestOpen(true)}
                    onMouseLeave={() => setDestOpen(false)}
                  >
                    <Link
                      to={link.href}
                      className={`transition-colors text-sm font-medium flex items-center space-x-2 relative ${
                        isActive(link.href) || isActive('/destinations')
                          ? "text-safari-gold after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-safari-gold"
                          : "text-white hover:text-safari-gold"
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className={isActive(link.href) || isActive('/destinations') ? "text-safari-gold" : "text-white/80"}>▾</span>
                    </Link>

                    {destOpen && (
                      <div className="absolute left-0 pt-2 w-40 z-50">
                        <div className="bg-white rounded-md shadow-lg">
                          <Link
                            to="/destinations/rwanda"
                            className={`block px-4 py-2 transition-colors rounded-t-md ${
                              isActive('/destinations/rwanda')
                                ? "bg-safari-gold/10 text-safari-gold"
                                : "text-gray-800 hover:bg-safari-gold"
                            }`}
                            onClick={() => setDestOpen(false)}
                          >
                            Rwanda
                          </Link>
                          <Link
                            to="/destinations/uganda"
                            className={`block px-4 py-2 transition-colors rounded-b-md ${
                              isActive('/destinations/uganda')
                                ? "bg-safari-gold/10 text-safari-gold"
                                : "text-gray-800 hover:bg-safari-gold"
                            }`}
                            onClick={() => setDestOpen(false)}
                          >
                            Uganda
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "Itineraries") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setItinerariesOpen(true)}
                    onMouseLeave={() => setItinerariesOpen(false)}
                  >
                    <Link
                      to={link.href}
                      className={`transition-colors text-sm font-medium flex items-center space-x-2 relative ${
                        isActive(link.href) || isActive('/itineraries')
                          ? "text-safari-gold after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-safari-gold"
                          : "text-white hover:text-safari-gold"
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className={isActive(link.href) || isActive('/itineraries') ? "text-safari-gold" : "text-white/80"}>▾</span>
                    </Link>

                    {itinerariesOpen && (
                      <div className="absolute left-0 pt-2 w-40 z-50">
                        <div className="bg-white rounded-md shadow-lg">
                          <Link
                            to="/itineraries/rwanda"
                            className={`block px-4 py-2 transition-colors rounded-t-md ${
                              isActive('/itineraries/rwanda')
                                ? "bg-safari-gold/10 text-safari-gold"
                                : "text-gray-800 hover:bg-safari-gold"
                            }`}
                            onClick={() => setItinerariesOpen(false)}
                          >
                            Rwanda
                          </Link>
                          <Link
                            to="/itineraries/uganda"
                            className={`block px-4 py-2 transition-colors ${
                              isActive('/itineraries/uganda')
                                ? "bg-safari-gold/10 text-safari-gold"
                                : "text-gray-800 hover:bg-safari-gold"
                            }`}
                            onClick={() => setItinerariesOpen(false)}
                          >
                            Uganda
                          </Link>
                          <Link
                            to="/itineraries/packages"
                            className={`block px-4 py-2 transition-colors rounded-b-md ${
                              isActive('/itineraries/packages')
                                ? "bg-safari-gold/10 text-safari-gold"
                                : "text-gray-800 hover:bg-safari-gold"
                            }`}
                            onClick={() => setItinerariesOpen(false)}
                          >
                            Packages
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors relative ${
                    isActive(link.href)
                      ? "text-safari-gold after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-safari-gold"
                      : "text-white hover:text-safari-gold"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 


href="https://calendar.app.google/5sk8bniciQQXXXRk9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-white/10 text-white hover:bg-white/20 font-medium shadow-md rounded-full flex items-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                Book a Call
              </Button>
            </a>
            <Button 
              className="bg-safari-gold text-gray-900 hover:bg-safari-gold/90 font-medium shadow-md rounded-full flex items-center gap-2"
              onClick={() => setShowTripPlanner(true)}
            >
              <Plane className="h-4 w-4" />
              Plan Your Trip
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            {navLinks.map((link) => {
              if (link.name === "Destination") {
                return (
                  <div key={link.name}>
                    <button
                      onClick={() => setIsMobileDestOpen(!isMobileDestOpen)}
                      className={`w-full text-left py-3 transition-colors flex items-center justify-between ${
                        isActive('/destinations')
                          ? "text-safari-gold"
                          : "text-white hover:text-yellow-400"
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className={isActive('/destinations') ? "text-safari-gold" : "text-white/80"}>
                        {isMobileDestOpen ? "▴" : "▾"}
                      </span>
                    </button>

                    {isMobileDestOpen && (
                      <div className="pl-4">
                        <Link
                          to="/destinations/rwanda"
                          className={`block py-2 transition-colors ${
                            isActive('/destinations/rwanda')
                              ? "text-safari-gold font-medium"
                              : "text-white/90 hover:text-yellow-400"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          Rwanda
                        </Link>
                        <Link
                          to="/destinations/uganda"
                          className={`block py-2 transition-colors ${
                            isActive('/destinations/uganda')
                              ? "text-safari-gold font-medium"
                              : "text-white/90 hover:text-yellow-400"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          Uganda
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "Itineraries") {
                return (
                  <div key={link.name}>
                    <button
                      onClick={() =>
                        setIsMobileItinerariesOpen(!isMobileItinerariesOpen)
                      }
                      className={`w-full text-left py-3 transition-colors flex items-center justify-between ${
                        isActive('/itineraries')
                          ? "text-safari-gold"
                          : "text-white hover:text-yellow-400"
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className={isActive('/itineraries') ? "text-safari-gold" : "text-white/80"}>
                        {isMobileItinerariesOpen ? "▴" : "▾"}
                      </span>
                    </button>

                    {isMobileItinerariesOpen && (
                      <div className="pl-4">
                        <Link
                          to="/itineraries/rwanda"
                          className={`block py-2 transition-colors ${
                            isActive('/itineraries/rwanda')
                              ? "text-safari-gold font-medium"
                              : "text-white/90 hover:text-yellow-400"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          Rwanda
                        </Link>
                        <Link
                          to="/itineraries/uganda"
                          className={`block py-2 transition-colors ${
                            isActive('/itineraries/uganda')
                              ? "text-safari-gold font-medium"
                              : "text-white/90 hover:text-yellow-400"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          Uganda
                        </Link>
                        <Link
                          to="/itineraries/packages"
                          className={`block py-2 transition-colors ${
                            isActive('/itineraries/packages')
                              ? "text-safari-gold font-medium"
                              : "text-white/90 hover:text-yellow-400"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          Packages
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block py-3 transition-colors ${
                    isActive(link.href)
                      ? "text-safari-gold font-medium"
                      : "text-white hover:text-yellow-400"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}

            <a 
              href="https://calendar.app.google/5sk8bniciQQXXXRk9"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-4"
            >
              <Button 
                className="w-full bg-white/10 text-white hover:bg-white/20 font-medium rounded-full flex items-center justify-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                Book a Call
              </Button>
            </a>
            <Button 
              className="w-full mt-4 bg-safari-gold text-gray-900 hover:bg-safari-gold/90 rounded-full flex items-center justify-center gap-2"
              onClick={() => {
                setIsOpen(false);
                setShowTripPlanner(true);
              }}
            >
              <Plane className="h-4 w-4" />
              Plan Your Trip
            </Button>
          </div>
        )}
      </div>
    </nav>
    
    {/* Trip Planner Dialog */}
    <TripPlannerDialog 
      open={showTripPlanner} 
      onOpenChange={setShowTripPlanner}
    />
    </div>
  );
};

export default Navigation;
