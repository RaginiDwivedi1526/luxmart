import { useParams, Link } from "react-router-dom";
import { products, formatPrice } from "@/data/products";
import EcomNavbar from "@/components/ecommerce/EcomNavbar";
import EcomFooter from "@/components/ecommerce/EcomFooter";
import ProductCard from "@/components/ecommerce/ProductCard";
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw, ChevronRight, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <EcomNavbar />
        <div className="pt-40 text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">Product not found</h1>
          <Link to="/products" className="text-primary mt-4 inline-block">← Back to Products</Link>
        </div>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <EcomNavbar />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>

          {/* Product */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div>
              {product.badge && (
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {product.badge}
                </span>
              )}

              <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-warning text-warning" : "text-border"}`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-sm text-foreground">{product.rating}</span>
                <span className="text-muted-foreground text-sm">({product.reviews.toLocaleString()} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-display font-bold text-3xl text-foreground">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                    <span className="bg-accent/10 text-accent text-sm font-bold px-2 py-0.5 rounded">{discount}% OFF</span>
                  </>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

              {/* Features */}
              {product.features && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.features.map((feat) => (
                    <span key={feat} className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                      {feat}
                    </span>
                  ))}
                </div>
              )}

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-foreground">Quantity:</span>
                <div className="flex items-center gap-0 border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-secondary transition-colors rounded-l-lg"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium text-foreground">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-secondary transition-colors rounded-r-lg"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mb-8">
                <Button size="lg" className="flex-1 rounded-xl py-6 text-base font-semibold">
                  <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl py-6">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              {/* Trust */}
              <div className="space-y-3 border-t border-border pt-6">
                {[
                  { icon: Truck, text: "Free delivery on orders above ₹999" },
                  { icon: Shield, text: "100% secure payment" },
                  { icon: RotateCcw, text: "7-day easy return policy" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <item.icon className="w-4 h-4 text-primary" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <EcomFooter />
    </div>
  );
};

export default ProductDetail;
