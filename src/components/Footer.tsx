import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">M</span>
              </div>
              <div>
                <span className="text-gold font-heading text-xl font-semibold tracking-wide">MEDICARE</span>
                <span className="block text-gold/70 text-[10px] tracking-[0.2em] uppercase -mt-1">Dental Clinic</span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm">
              Hungary's most trusted private dental clinic, offering world-class treatments with cutting-edge technology and personalized care since 1998.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Treatments", "Prices", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 text-sm hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Phone className="w-4 h-4 text-gold" />
                +44 7341 419552
              </li>
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Mail className="w-4 h-4 text-gold" />
                info@mdentalclinic.eu
              </li>
              <li className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                Budapest, Hungary
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-background/70 text-sm">
            © {new Date().getFullYear()} Medicare Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
