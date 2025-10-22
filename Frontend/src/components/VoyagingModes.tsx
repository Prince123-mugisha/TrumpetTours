import { Card } from "@/components/ui/card";
import solo from "@/Assets/solo.jpg"
import couple from "@/Assets/couple.webp"
import group from "@/Assets/group.jpeg"
import luxury from "@/Assets/luxury.jpg"
import family from "@/Assets/family.jpg"

const packages = [
  { title: "Solo Tour Packages", image: solo },
  { title: "Couple Tour Packages", image: couple},
  { title: "Group Tour Packages", image: group },
  { title: "Luxury Tour Packages", image: luxury },
  { title: "Family Tour Packages", image: family }
];

const VoyagingModes = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-safari-darker mb-4">
            VOYAGING MODES
          </h2>
          <p className="text-lg text-gray-600">
            Find the right package for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {packages.map((pkg, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative h-64">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-safari-darker/90 via-safari-darker/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-center">
                    {pkg.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoyagingModes;
