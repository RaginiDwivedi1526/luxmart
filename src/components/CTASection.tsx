import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Simplify Your Tax Compliance?
          </h2>
          
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Get in touch with our experts today and let us handle all your GST and 
            Direct Tax requirements with ease and efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="gap-3">
              <Phone className="w-5 h-5" />
              Call Now: +91 99999 99999
            </Button>
            
            <Button variant="whatsapp" size="xl" className="gap-3">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-primary-foreground/20">
            {[
              { value: "10,000+", label: "Happy Clients" },
              { value: "15+", label: "Years Experience" },
              { value: "50,000+", label: "Returns Filed" },
              { value: "4.9★", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
