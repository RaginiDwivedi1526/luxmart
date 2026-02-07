import { categories } from "@/data/products";
import { Link } from "react-router-dom";

const CategoryGrid = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Browse our curated categories and find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((cat, i) => (
            <Link
              to={`/products?category=${cat.id}`}
              key={cat.id}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-3xl mb-1 block">{cat.icon}</span>
                <h3 className="font-display font-bold text-white text-lg">{cat.name}</h3>
                <p className="text-white/60 text-sm">{cat.count.toLocaleString()} products</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
