import { useState } from "react";
import { categories } from "@/data/products";
import { Link } from "react-router-dom";

const accentMap: Record<string, { tag: string; chip: string }> = {
  "fashion-jewellery": {
    tag: "bg-primary text-primary-foreground",
    chip: "hover:border-primary/50 hover:text-primary",
  },
  gifts: {
    tag: "bg-accent text-accent-foreground",
    chip: "hover:border-accent/50 hover:text-accent",
  },
  gadgets: {
    tag: "bg-success text-success-foreground",
    chip: "hover:border-success/50 hover:text-success",
  },
};

const CategoryGrid = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Explore our curated collections — something for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => {
            const accent = accentMap[cat.id] ?? {
              tag: "bg-primary text-primary-foreground",
              chip: "hover:border-primary/50 hover:text-primary",
            };
            const isHovered = hovered === cat.id;

            return (
              <div
                key={cat.id}
                className="group rounded-2xl overflow-hidden border border-border bg-card"
                style={{ boxShadow: "var(--card-shadow)" }}
                onMouseEnter={() => setHovered(cat.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image */}
                <div className="relative h-56 lg:h-64 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="text-2xl mb-1 block">{cat.icon}</span>
                      <h3 className="font-display font-bold text-white text-xl leading-tight">
                        {cat.name}
                      </h3>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${accent.tag}`}>
                      {cat.count.toLocaleString()} items
                    </span>
                  </div>
                </div>

                {/* Subcategories */}
                <div className="p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Browse Sub-categories
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.subcategories.map((sub) => (
                      <Link
                        key={sub}
                        to={`/products?category=${cat.id}&sub=${encodeURIComponent(sub)}`}
                        className={`px-3 py-1.5 rounded-full bg-secondary border border-border text-sm text-muted-foreground transition-colors duration-200 ${accent.chip}`}
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
