import { deals, formatPrice } from "@/data/products";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DealsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-1.5 mb-4">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-semibold">Limited Time Offers</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Today's Best Deals
            </h2>
            <p className="text-muted-foreground text-lg">
              Grab these incredible offers before they're gone
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.slice(0, 3).map((product) => {
            const discount = product.originalPrice
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : 0;

            return (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground font-bold text-sm px-4 py-1.5 rounded-full shadow-lg">
                      SAVE {discount}%
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.category}</p>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <span className="font-display font-bold text-2xl text-foreground">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-muted-foreground line-through ml-2">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                    <Button size="sm" className="rounded-full">
                      <ShoppingCartIcon />
                    </Button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ShoppingCartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
  </svg>
);

export default DealsSection;
