import EcomNavbar from "@/components/ecommerce/EcomNavbar";
import EcomFooter from "@/components/ecommerce/EcomFooter";
import { Users, Award, Globe, Heart } from "lucide-react";

const values = [
  { icon: Users, title: "Customer First", desc: "Every decision starts with our customers' needs. Your satisfaction drives everything we do." },
  { icon: Award, title: "Quality Assured", desc: "We partner only with trusted brands and verify every product before it reaches you." },
  { icon: Globe, title: "Sustainable Choice", desc: "Committed to eco-friendly packaging and partnering with sustainable brands." },
  { icon: Heart, title: "Community Driven", desc: "Supporting local artisans and small businesses to bring you unique, curated products." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <EcomNavbar />
      <div className="pt-32 pb-16">
        {/* Hero */}
        <div className="container mx-auto px-4 text-center mb-16">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-gradient">TrendCart</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We're on a mission to make quality products accessible to everyone. Founded in 2024, TrendCart has grown from a small startup to a platform trusted by thousands of customers across India.
          </p>
        </div>

        {/* Story */}
        <div className="container mx-auto px-4 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=500&fit=crop"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  TrendCart was born from a simple idea: everyone deserves access to great products at fair prices. We noticed the gap between premium quality and affordability, and set out to bridge it.
                </p>
                <p>
                  Today, we serve over 10,000 happy customers with a carefully curated selection of over 50,000 products across fashion, electronics, beauty, home decor, and more.
                </p>
                <p>
                  Our team works tirelessly to source the best products from trusted brands and emerging designers, ensuring every purchase meets our high standards of quality and value.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-secondary/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">
              What We Stand For
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val) => (
                <div key={val.title} className="bg-card rounded-2xl p-6 card-shadow text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <val.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{val.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "50K+", label: "Products Listed" },
              { value: "10K+", label: "Happy Customers" },
              { value: "500+", label: "Brands" },
              { value: "4.9★", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-3xl lg:text-4xl text-primary mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <EcomFooter />
    </div>
  );
};

export default About;
