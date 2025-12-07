import { PiggyBank, Award, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import budapestImg from "@/assets/budapest.jpg";

const benefits = [
  {
    icon: PiggyBank,
    title: "Save Up to 70%",
    description: "Enjoy significant cost savings compared to Western Europe, United States, and Australia without compromising on quality.",
  },
  {
    icon: Award,
    title: "World-Class Standards",
    description: "Hungary is renowned for its excellent dental education and high-quality dental care, with clinics utilizing the latest technology.",
  },
  {
    icon: Clock,
    title: "Efficient Treatment",
    description: "Our streamlined processes ensure minimal waiting times and efficient treatment plans, making the most of your stay.",
  },
  {
    icon: MapPin,
    title: "Beautiful Destination",
    description: "Combine your dental treatment with a memorable holiday in Budapest, known for its thermal baths and stunning architecture.",
  },
];

const TourismSection = () => {
  return (
    <section id="tourism" className="section-padding bg-dark-lighter">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-foreground">
            Dental Tourism in Budapest
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combine high-quality dental care with a visit to one of Europe's most captivating destinations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-8 text-foreground">
              Why Choose Budapest for Dental Treatment?
            </h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-foreground">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button size="lg" className="mt-8">
              Plan Your Dental Journey
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={budapestImg}
              alt="Budapest Chain Bridge and Parliament"
              className="rounded-xl shadow-2xl w-full"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-dark/90 backdrop-blur-sm rounded-lg p-4">
              <h4 className="text-lg font-heading font-semibold text-foreground mb-1">
                Budapest: The Pearl of the Danube
              </h4>
              <p className="text-muted-foreground text-sm">
                Experience the city's thermal baths, stunning architecture, and vibrant culture during your dental journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismSection;
