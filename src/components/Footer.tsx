import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const links = {
    services: [
      "GST Registration",
      "GST Return Filing",
      "Income Tax Return",
      "Tax Audit",
      "Consultation",
    ],
    company: [
      "About Us",
      "Our Team",
      "Careers",
      "Blog",
      "Contact",
    ],
    legal: [
      "Privacy Policy",
      "Terms of Service",
      "Refund Policy",
      "Disclaimer",
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-xl">G</span>
              </div>
              <span className="font-display font-bold text-xl">
                GST<span className="text-accent">BOY</span>
              </span>
            </a>
            <p className="text-background/70 mb-6 leading-relaxed">
              Your trusted partner for all GST and Direct Tax compliance needs. 
              Simplifying taxes for businesses across India.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 mt-0.5 text-accent" />
                <span>123 Business Hub, New Delhi, India - 110001</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Phone className="w-5 h-5 text-accent" />
                <span>+91 99999 99999</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Mail className="w-5 h-5 text-accent" />
                <span>info@gstboy.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link}>
                  <a href="#services" className="text-background/70 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} GSTBOY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/60 hover:text-accent transition-colors text-sm">
              Facebook
            </a>
            <a href="#" className="text-background/60 hover:text-accent transition-colors text-sm">
              Twitter
            </a>
            <a href="#" className="text-background/60 hover:text-accent transition-colors text-sm">
              LinkedIn
            </a>
            <a href="#" className="text-background/60 hover:text-accent transition-colors text-sm">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
