import { Truck, Shield, RotateCcw, Headphones } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Shipping", desc: "On orders above ₹999" },
  { icon: Shield, title: "Secure Payment", desc: "100% secure checkout" },
  { icon: RotateCcw, title: "Easy Returns", desc: "7-day return policy" },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated help center" },
];

const TrustBanner = () => {
  return (
    <section className="py-12 border-y border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feat) => (
            <div key={feat.title} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <feat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">{feat.title}</h4>
                <p className="text-muted-foreground text-xs">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
