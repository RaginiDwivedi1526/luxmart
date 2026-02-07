import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const EcomFooter = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">T</span>
              </div>
              <span className="font-display font-bold text-xl text-background">
                Trend<span className="text-primary">Cart</span>
              </span>
            </div>
            <p className="text-background/50 text-sm leading-relaxed mb-6">
              Your one-stop destination for curated products across fashion, electronics, beauty & more.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {["Home", "Shop", "About Us", "Contact", "Blog"].map((link) => (
                <li key={link}>
                  <Link to="/" className="text-sm text-background/50 hover:text-primary transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-bold text-background mb-4">Categories</h4>
            <ul className="space-y-2.5">
              {["Fashion", "Electronics", "Kitchen", "Beauty", "Home Decor", "Sports"].map((cat) => (
                <li key={cat}>
                  <Link to="/products" className="text-sm text-background/50 hover:text-primary transition-colors">{cat}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-background mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-background/50">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                123 Commerce Street, New Delhi, India 110001
              </li>
              <li className="flex items-center gap-2 text-sm text-background/50">
                <Phone className="w-4 h-4 shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2 text-sm text-background/50">
                <Mail className="w-4 h-4 shrink-0" />
                hello@trendcart.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-background/40 text-sm">© 2026 TrendCart. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((item) => (
              <a key={item} href="#" className="text-background/40 text-sm hover:text-primary transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EcomFooter;
