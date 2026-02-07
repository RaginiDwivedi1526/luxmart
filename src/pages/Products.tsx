import { useState, useMemo } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ecommerce/ProductCard";
import EcomNavbar from "@/components/ecommerce/EcomNavbar";
import EcomFooter from "@/components/ecommerce/EcomFooter";
import { SlidersHorizontal, Grid3X3, List, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "all");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return result;
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <EcomNavbar />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
              {selectedCategory === "all" ? "All Products" : categories.find(c => c.id === selectedCategory)?.name || "Products"}
            </h1>
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} products
            </p>
          </div>

          <div className="flex gap-8">
            {/* Sidebar Filters - Desktop */}
            <div className="hidden lg:block w-60 shrink-0">
              <div className="sticky top-32 space-y-6">
                <div>
                  <h3 className="font-display font-bold text-foreground mb-3">Categories</h3>
                  <div className="space-y-1">
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === "all" ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      All Categories
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === cat.id ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:bg-secondary"
                        }`}
                      >
                        {cat.icon} {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6 gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" /> Filters
                </Button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-card border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>

              {/* Mobile Filters */}
              {showFilters && (
                <div className="lg:hidden mb-6 p-4 bg-card rounded-xl border border-border animate-slide-in-up">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-bold text-foreground">Categories</h3>
                    <button onClick={() => setShowFilters(false)}>
                      <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => { setSelectedCategory("all"); setShowFilters(false); }}
                      className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                        selectedCategory === "all" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      All
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => { setSelectedCategory(cat.id); setShowFilters(false); }}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                          selectedCategory === cat.id ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {cat.icon} {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-lg">No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <EcomFooter />
    </div>
  );
};

export default Products;
