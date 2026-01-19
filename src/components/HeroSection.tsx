import { Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationForm from "./ConsultationForm";

const HeroSection = () => {
  const highlights = [
    "GST Registration & Filing",
    "Income Tax Returns",
    "Expert Consultation",
  ];

  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-60" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-in-up">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-primary-foreground font-semibold">4.9</span>
              <span className="text-primary-foreground/70 text-sm">Customer Rating</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Simplifying <span className="text-accent">GST</span> & Tax
              <br />
              Compliance for You
            </h1>

            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Expert GST and Direct Tax services for businesses and individuals. 
              Navigate complex tax regulations with ease and confidence.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl">
                Start Free Consultation
              </Button>
              <Button variant="hero-outline" size="xl">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="flex justify-center lg:justify-end" style={{ animationDelay: '0.2s' }}>
            <ConsultationForm />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
