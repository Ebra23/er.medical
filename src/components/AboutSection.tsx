import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import clinicReception from "@/assets/clinic-reception.jpg";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = "", duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-dark">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={clinicReception}
              alt="Medicare Dental Clinic Reception"
              className="rounded-xl shadow-2xl w-full"
            />
            {/* Years Badge */}
            <div className="absolute -top-4 -right-4 md:top-8 md:-right-8 bg-gold text-dark rounded-xl p-4 md:p-6 shadow-xl">
              <div className="text-3xl md:text-4xl font-bold font-heading">26+</div>
              <div className="text-sm font-medium">Years Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-gold text-sm font-medium tracking-wider uppercase mb-2 block">
              Premium Healthcare Network
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-foreground">
              Exclusive Private Dental Clinic
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Welcome to Medicare Dental Clinic, Hungary's most trusted private healthcare network. Located in central Budapest, we offer world-class dental treatments with cutting-edge technology and personalized care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="w-4 h-4" />
                Call +44 7341 419552
              </Button>
              <Button size="lg">
                Get Free Consultation
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: 100, suffix: "K+", label: "Happy Patients" },
                { value: 200, suffix: "+", label: "Employees" },
                { value: 30, suffix: "+", label: "Medical Specialties" },
                { value: 10, suffix: "+", label: "Cities Nationwide" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gold font-heading">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
