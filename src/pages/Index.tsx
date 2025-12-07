import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TreatmentsSection from "@/components/TreatmentsSection";
import PriceCalculator from "@/components/PriceCalculator";
import TourismSection from "@/components/TourismSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseUs />
        <TreatmentsSection />
        <PriceCalculator />
        <TourismSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
