import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

const mainCategories = [
  {
    id: "fashion-jewellery",
    name: "Fashion & Jewellery",
    emoji: "🟣",
    gradient: "from-purple-500/20 via-pink-400/10 to-violet-500/20",
    accent: "bg-primary",
    accentText: "text-primary",
    border: "border-primary/20",
    subcategories: [
      "Earrings",
      "Bracelets",
      "Waist Chains",
      "Pendants",
      "Hair Accessories",
      "Anklets",
      "Rings",
      "Bangles",
      "Anti-tarnish Jewellery",
      "Charm Bracelets",
    ],
  },
  {
    id: "gifts",
    name: "Gifts & Accessories",
    emoji: "🎁",
    gradient: "from-rose-400/20 via-orange-300/10 to-pink-400/20",
    accent: "bg-accent",
    accentText: "text-accent",
    border: "border-accent/20",
    subcategories: [
      "Crystal Ball",
      "Eiffel Tower Showpiece",
      "Key Chains",
      "Teddy Bear",
      "Couple Rings",
      "Jewellery Stand",
      "Message Bottle",
      "Phone Stand",
    ],
  },
  {
    id: "gadgets",
    name: "Gadgets",
    emoji: "🔌",
    gradient: "from-sky-400/20 via-cyan-300/10 to-blue-400/20",
    accent: "bg-success",
    accentText: "text-success",
    border: "border-success/20",
    subcategories: ["LED Pear Light", "Moon Light Lamp", "Tally Counter"],
  },
];

const ShopByCategorySection = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => setExpanded((prev) => (prev === id ? null : id));

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Explore our handpicked collections — something for everyone
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mainCategories.map((cat) => {
            const isOpen = expanded === cat.id;
            return (
              <div
                key={cat.id}
                className={`rounded-2xl border ${cat.border} bg-gradient-to-br ${cat.gradient} overflow-hidden transition-shadow duration-300 hover:shadow-lg`}
                style={{ boxShadow: isOpen ? "var(--card-shadow-hover)" : "var(--card-shadow)" }}
              >
                {/* Card Header */}
                <button
                  onClick={() => toggle(cat.id)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{cat.emoji}</span>
                    <div>
                      <h3 className="font-display font-bold text-foreground text-lg leading-tight">
                        {cat.name}
                      </h3>
                      <p className={`text-sm font-medium mt-0.5 ${cat.accentText}`}>
                        {cat.subcategories.length} sub-categories
                      </p>
                    </div>
                  </div>
                  <span className={`transition-transform duration-300 ${cat.accentText}`}>
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {/* Subcategory Grid */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="h-px bg-border mb-4" />
                    <div className="flex flex-wrap gap-2">
                      {cat.subcategories.map((sub) => (
                        <Link
                          key={sub}
                          to={`/products?category=${cat.id}&sub=${encodeURIComponent(sub)}`}
                          className="px-3 py-1.5 rounded-full bg-card border border-border text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors duration-200"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Always-visible Browse Link */}
                {!isOpen && (
                  <div className="px-6 pb-5">
                    <button
                      onClick={() => toggle(cat.id)}
                      className={`text-sm font-medium ${cat.accentText} hover:underline`}
                    >
                      Browse all →
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategorySection;
