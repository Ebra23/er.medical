import { ArrowRight } from "lucide-react";
import dentalImplant from "@/assets/dental-implant.png";
import crownsBridges from "@/assets/crowns-bridges.png";

const treatments = [
  {
    image: dentalImplant,
    title: "Dental Implants",
    description: "Replace missing teeth with premium implants, including Neodent, Straumann, and Alpha Bio systems.",
  },
  {
    image: crownsBridges,
    title: "Crowns & Bridges",
    description: "Restore your smile with natural-looking, durable crowns and bridges crafted from high-quality materials.",
  },
  {
    image: dentalImplant,
    title: "All-on-4/All-on-6",
    description: "Complete arch restoration with just 4 or 6 implants, providing a permanent solution for multiple missing teeth.",
  },
  {
    image: crownsBridges,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with professional whitening, veneers, and other aesthetic treatments.",
  },
];

const TreatmentsSection = () => {
  return (
    <section id="treatments" className="section-padding bg-dark">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-foreground">
            Advanced Care. Exceptional Results.
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Explore our full range of advanced dental procedures — from cosmetic enhancements and full-mouth restorations to dental implants and oral surgery, all delivered with precision and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="group bg-dark-card border border-border/10 rounded-xl overflow-hidden hover-lift transition-all duration-300 hover:border-gold/30"
            >
              <div className="p-6 bg-gradient-to-b from-muted/5 to-transparent flex items-center justify-center h-48">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="max-h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold mb-3 text-foreground">
                  {treatment.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {treatment.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
