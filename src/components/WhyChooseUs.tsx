import { Award, Heart, Globe, Sparkles } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Our dental treatments meet the highest international standards with premium materials and cutting-edge technology.",
  },
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Your comfort and satisfaction are our top priorities. We tailor each treatment plan to your unique needs.",
  },
  {
    icon: Globe,
    title: "International Experience",
    description: "Our multilingual team specializes in dental tourism, ensuring a seamless experience for patients from around the world.",
  },
  {
    icon: Sparkles,
    title: "Substantial Savings",
    description: "Experience significant savings without compromising on quality, with treatments at a fraction of Western European and United States prices.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-dark-lighter">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-foreground">
            Why Choose Medicare Dental Clinic
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect combination of premium quality, expert care, and affordable prices that make us the preferred choice for dental tourism.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-dark-card border border-border/10 rounded-xl p-6 hover-lift transition-all duration-300 hover:border-gold/30"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
