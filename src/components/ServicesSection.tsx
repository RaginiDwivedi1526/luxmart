import { FileText, Calculator, Shield, ClipboardList, RefreshCw, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: FileText,
    title: "GST Registration",
    description: "Quick and hassle-free GST registration for businesses of all sizes. Get your GSTIN in just 3-5 working days.",
  },
  {
    icon: Calculator,
    title: "GST Return Filing",
    description: "Timely and accurate GST return filing services including GSTR-1, GSTR-3B, and annual returns.",
  },
  {
    icon: Shield,
    title: "GST Compliance",
    description: "End-to-end GST compliance management ensuring your business stays on the right side of tax laws.",
  },
  {
    icon: ClipboardList,
    title: "Income Tax Filing",
    description: "Professional ITR filing services for individuals, businesses, and corporates with maximum refund assurance.",
  },
  {
    icon: RefreshCw,
    title: "Tax Audits",
    description: "Comprehensive tax audit services to ensure compliance and identify optimization opportunities.",
  },
  {
    icon: Users,
    title: "Expert Consultation",
    description: "One-on-one consultation with tax experts for complex queries, tax planning, and strategic advice.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Tax Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From GST registration to complex tax planning, we offer a complete suite of services 
            to meet all your tax compliance needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 lg:p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              <a 
                href="#contact" 
                className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="default" size="xl">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
