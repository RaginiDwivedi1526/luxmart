import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EcomHero = () => {
  return (
    <section className="relative min-h-[85vh] bg-hero-gradient overflow-hidden pt-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-60" />

      {/* Floating shapes */}
      <div className="absolute top-1/3 left-[10%] w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-[5%] w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-in-up">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground/90 text-sm font-medium">New Arrivals — Winter Collection 2026</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
              Discover Your
              <br />
              <span className="relative">
                Perfect Style
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8C60 2 120 2 150 6C180 10 240 4 298 8" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-primary-foreground/75 text-lg md:text-xl mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Shop thousands of curated products across fashion, electronics, beauty & more — with deals you won't find anywhere else.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/products">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-semibold rounded-full shadow-lg">
                  Shop Now <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base rounded-full">
                  Explore Deals
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start">
              {[
                { value: "50K+", label: "Products" },
                { value: "10K+", label: "Happy Customers" },
                { value: "4.9★", label: "Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-bold text-2xl text-primary-foreground">{stat.value}</div>
                  <div className="text-primary-foreground/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-[420px] h-[500px] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=700&fit=crop"
                  alt="Featured fashion collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full mb-2">UP TO 60% OFF</span>
                  <p className="text-white font-display font-bold text-xl">Winter Collection</p>
                  <p className="text-white/70 text-sm">Starting from ₹499</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl -rotate-6 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
                  alt="Headphones deal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-white font-bold text-sm">₹2,999</span>
                  <span className="text-white/50 text-xs line-through ml-1">₹5,999</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 50C840 60 960 70 1080 72C1200 75 1320 70 1380 68L1440 65V100H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default EcomHero;
