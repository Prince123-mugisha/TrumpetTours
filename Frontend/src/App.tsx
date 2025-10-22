import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Destination from "./pages/Destination";
import Rwanda from "./pages/Rwanda";
import Uganda from "@/pages/Uganda";
import Contact from "./pages/Contact";
import Itineraries from "./pages/Itineraries";
import RwandaItineraries from "./pages/RwandaItineraries";
import UgandaItineraries from "./pages/UgandaUteneraries";
import Packages from "./pages/Packages";
import HelpButton from "@/components/HelpButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/About Us" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/destinations/rwanda" element={<Rwanda />} />
          <Route path="/destinations/uganda" element={<Uganda />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/itineraries" element={<Itineraries />} />
          <Route path="/itineraries/rwanda" element={<RwandaItineraries />} />
          <Route path="/itineraries/uganda" element={<UgandaItineraries />} />
          <Route path="/itineraries/packages" element={<Packages />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <HelpButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;