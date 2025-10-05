import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, FileText, Building2, Ticket, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Guided Tours and Safaris",
    description: "Trumpet Tours specializes in providing guided tours and safaris across the captivating landscapes of Rwanda and Uganda, offering immersive experiences that showcase the rich wildlife and cultural heritage of these East African nations. With expert guides and tailored itineraries, travelers embark on unforgettable journeys."
  },
  {
    icon: FileText,
    title: "Tailor-made Itineraries",
    description: "Trumpet Tours caters to individual preferences by crafting tailor-made itineraries for explorers keen to delve into the enchanting landscapes of Rwanda and Uganda. From personalized wildlife encounters to cultural immersions, each itinerary is meticulously designed to fulfill travelers' unique desires."
  },
  {
    icon: Building2,
    title: "Accommodations",
    description: "Travelers booking with Trumpet Tours gain access to a comprehensive range of accommodation options in Rwanda and Uganda, spanning from luxurious hotels to budget-friendly lodges. With a keen eye for quality and comfort, we ensure that every stay offers a welcoming retreat."
  },
  {
    icon: Ticket,
    title: "Tourist Permits",
    description: "Trumpet Tours secures all necessary tourist permits for travelers exploring Rwanda and Uganda, ensuring a hassle-free experience. With expertise in navigating the permit process, travelers can relax knowing that their permits for activities such as gorilla trekking are efficiently arranged."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-safari-darker mb-4">
            OUR SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-safari-gold/10 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-safari-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-safari-darker">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button className="bg-safari-gold text-safari-darker hover:bg-safari-gold/90 font-semibold">
            Learn more
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
