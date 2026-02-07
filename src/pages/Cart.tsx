import { useState } from "react";
import EcomNavbar from "@/components/ecommerce/EcomNavbar";
import EcomFooter from "@/components/ecommerce/EcomFooter";
import { products, formatPrice } from "@/data/products";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CartItem {
  productId: string;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { productId: "1", quantity: 1 },
    { productId: "3", quantity: 2 },
    { productId: "6", quantity: 1 },
  ]);

  const cartProducts = cartItems.map((item) => ({
    ...item,
    product: products.find((p) => p.id === item.productId)!,
  })).filter((item) => item.product);

  const subtotal = cartProducts.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  const updateQuantity = (productId: string, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.productId === productId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (productId: string) => {
    setCartItems((items) => items.filter((item) => item.productId !== productId));
  };

  return (
    <div className="min-h-screen bg-background">
      <EcomNavbar />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>

          {cartProducts.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h2 className="font-display text-xl font-bold text-foreground mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Looks like you haven't added anything yet.</p>
              <Link to="/products">
                <Button className="rounded-full px-8">Start Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartProducts.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="bg-card rounded-xl p-4 card-shadow flex gap-4"
                  >
                    <Link to={`/product/${product.id}`} className="shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-semibold text-foreground text-sm hover:text-primary transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-muted-foreground capitalize mt-0.5">{product.category}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-0 border border-border rounded-lg">
                          <button
                            onClick={() => updateQuantity(product.id, -1)}
                            className="p-1.5 hover:bg-secondary transition-colors rounded-l-lg"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-foreground">{quantity}</span>
                          <button
                            onClick={() => updateQuantity(product.id, 1)}
                            className="p-1.5 hover:bg-secondary transition-colors rounded-r-lg"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="font-display font-bold text-foreground">{formatPrice(product.price * quantity)}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(product.id)}
                      className="p-2 text-muted-foreground hover:text-destructive transition-colors self-start"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-xl p-6 card-shadow sticky top-32">
                  <h3 className="font-display font-bold text-lg text-foreground mb-4">Order Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal ({cartProducts.reduce((s, i) => s + i.quantity, 0)} items)</span>
                      <span className="text-foreground font-medium">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span className={`font-medium ${shipping === 0 ? "text-success" : "text-foreground"}`}>
                        {shipping === 0 ? "FREE" : formatPrice(shipping)}
                      </span>
                    </div>
                    {shipping > 0 && (
                      <p className="text-xs text-muted-foreground">
                        Add {formatPrice(999 - subtotal)} more for free shipping
                      </p>
                    )}
                    <div className="border-t border-border pt-3 flex justify-between">
                      <span className="font-bold text-foreground text-base">Total</span>
                      <span className="font-display font-bold text-foreground text-xl">{formatPrice(total)}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 rounded-xl py-6 text-base font-semibold">
                    Checkout <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Link to="/products" className="block text-center mt-3 text-sm text-primary font-medium">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <EcomFooter />
    </div>
  );
};

export default Cart;
