import { Clock, Award, Headphones, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast and efficient processing of all your tax-related work with quick turnaround times.",
    stat: "24-48 hrs",
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Qualified chartered accountants and tax professionals with years of experience.",
    stat: "15+ Years",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support to address all your queries and concerns.",
    stat: "Always On",
  },
  {
    icon: ShieldCheck,
    title: "100% Secure",
    description: "Your data is completely secure with us. We follow strict privacy protocols.",
    stat: "SSL Secured",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-muted-foreground text-lg">
            We're committed to providing exceptional tax services with complete transparency 
            and customer satisfaction.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 rounded-2xl bg-card card-shadow mx-auto mb-6 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                <feature.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <div className="text-3xl font-display font-bold text-primary mb-2">
                {feature.stat}
              </div>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
