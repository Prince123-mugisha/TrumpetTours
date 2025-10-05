import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WhoWeAre = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-safari-gold/10 border border-safari-gold/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-safari-gold rounded-full" />
              <span className="text-safari-gold text-sm font-medium">WE ARE TRUMPET TOURS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-safari-darker">
              Experience the magic of Africa
              <br />
              with Us,
            </h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Trumpet Tours is your premier tour company based in the heart of
                Africa, Kigali, Rwanda. With a dedication to providing
                unforgettable experiences, we specialize in meticulously crafted
                mountain gorilla trekking and wildlife safaris in Rwanda and
                beyond.
              </p>
              <p>
                As a fully registered and recognized tour company, our commitment
                to excellence shines through in every aspect of our service. From
                wildlife game drives to cultural immersions, our experienced team
                ensures your journey is not only safe and enjoyable but also
                deeply enriching.
              </p>
            </div>

            <Button className="bg-safari-gold text-safari-darker hover:bg-safari-gold/90 font-semibold">
              Learn more
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/images/hap.jpeg"
              alt="Trumpet Tours Experience"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
