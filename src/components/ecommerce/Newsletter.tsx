import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-16 lg:py-24 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-40" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
          Stay in the Loop
        </h2>
        <p className="text-primary-foreground/70 text-lg max-w-md mx-auto mb-8">
          Subscribe for exclusive deals, new arrivals, and insider tips delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm"
          />
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 py-3 font-semibold">
            Subscribe <Send className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <p className="text-primary-foreground/40 text-xs mt-4">No spam, unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default Newsletter;
