export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
  description: string;
  features?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  image: string;
  subcategories: string[];
}

export const categories: Category[] = [
  {
    id: "fashion-jewellery",
    name: "Fashion & Jewellery",
    icon: "💍",
    count: 1240,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop&q=90",
    subcategories: [
      "Earrings", "Bracelets", "Waist Chains", "Pendants",
      "Hair Accessories", "Anklets", "Rings", "Bangles",
      "Anti-tarnish Jewellery", "Charm Bracelets",
    ],
  },
  {
    id: "gifts",
    name: "Gifts & Accessories",
    icon: "🎁",
    count: 860,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=800&fit=crop&q=90",
    subcategories: [
      "Crystal Ball", "Eiffel Tower Showpiece", "Key Chains", "Teddy Bear",
      "Couple Rings", "Jewellery Stand", "Message Bottle", "Phone Stand",
    ],
  },
  {
    id: "gadgets",
    name: "Gadgets",
    icon: "🔌",
    count: 350,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop&q=90",
    subcategories: [
      "LED Pear Light", "Moon Light Lamp", "Tally Counter",
    ],
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Cancelling Headphones",
    price: 2999,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "gadgets",
    rating: 4.8,
    reviews: 2340,
    badge: "Bestseller",
    description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal-clear sound quality.",
    features: ["Active Noise Cancellation", "30hr Battery", "Bluetooth 5.2", "Foldable Design"],
  },
  {
    id: "2",
    name: "Organic Cotton Oversized Tee",
    price: 799,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "fashion",
    rating: 4.5,
    reviews: 1856,
    badge: "New",
    description: "Ultra-soft organic cotton t-shirt with a relaxed oversized fit. Available in 12 colors.",
    features: ["100% Organic Cotton", "Relaxed Fit", "Pre-shrunk", "Eco-friendly"],
  },
  {
    id: "3",
    name: "Smart Air Fryer 6.5L",
    price: 4999,
    originalPrice: 8999,
    image: "https://images.unsplash.com/photo-1648733206024-e3ce9aab2fb2?w=500&h=500&fit=crop",
    category: "kitchen",
    rating: 4.7,
    reviews: 3421,
    badge: "Hot Deal",
    description: "Large capacity digital air fryer with 10 preset modes, touch screen, and non-stick basket.",
    features: ["6.5L Capacity", "10 Presets", "Touch Screen", "Dishwasher Safe"],
  },
  {
    id: "4",
    name: "Vitamin C Serum - Brightening",
    price: 599,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop",
    category: "beauty",
    rating: 4.6,
    reviews: 4521,
    badge: "Top Rated",
    description: "Concentrated Vitamin C face serum for brighter, even-toned skin. Dermatologically tested.",
    features: ["20% Vitamin C", "Hyaluronic Acid", "Cruelty Free", "All Skin Types"],
  },
  {
    id: "5",
    name: "Minimalist Desk Lamp",
    price: 1899,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=500&h=500&fit=crop",
    category: "home-decor",
    rating: 4.4,
    reviews: 876,
    description: "Modern LED desk lamp with adjustable brightness, warm/cool modes, and USB charging port.",
    features: ["LED Light", "3 Color Modes", "USB Port", "Touch Control"],
  },
  {
    id: "6",
    name: "Running Shoes - UltraBoost",
    price: 3499,
    originalPrice: 6999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    category: "sports",
    rating: 4.9,
    reviews: 5678,
    badge: "Bestseller",
    description: "Lightweight performance running shoes with responsive cushioning and breathable mesh upper.",
    features: ["Responsive Cushion", "Breathable Mesh", "Lightweight", "Anti-slip Sole"],
  },
  {
    id: "7",
    name: "Smartwatch Pro Max",
    price: 7999,
    originalPrice: 12999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4.7,
    reviews: 3210,
    badge: "New",
    description: "Advanced smartwatch with AMOLED display, health monitoring, GPS, and 7-day battery life.",
    features: ["AMOLED Display", "Health Monitor", "GPS Built-in", "7-Day Battery"],
  },
  {
    id: "8",
    name: "Bestselling Novel Collection",
    price: 499,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop",
    category: "books",
    rating: 4.8,
    reviews: 7890,
    badge: "Popular",
    description: "Curated collection of 5 bestselling novels from award-winning authors. Perfect gift set.",
    features: ["5 Books", "Hardcover", "Gift Boxed", "Award Winners"],
  },
  {
    id: "9",
    name: "Ceramic Non-Stick Cookware Set",
    price: 3299,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=500&h=500&fit=crop",
    category: "kitchen",
    rating: 4.6,
    reviews: 2134,
    badge: "Hot Deal",
    description: "Premium 10-piece ceramic cookware set. Non-toxic, non-stick, and oven safe up to 450°F.",
    features: ["10 Pieces", "Ceramic Coating", "Oven Safe", "PFOA Free"],
  },
  {
    id: "10",
    name: "Denim Jacket - Classic Wash",
    price: 1999,
    originalPrice: 3499,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    category: "fashion",
    rating: 4.5,
    reviews: 1543,
    description: "Timeless denim jacket in classic mid-wash. Featuring button closure and adjustable waist tabs.",
    features: ["100% Denim", "Button Closure", "Side Pockets", "Adjustable Fit"],
  },
  {
    id: "11",
    name: "Wireless Earbuds Pro",
    price: 1999,
    originalPrice: 3999,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=500&h=500&fit=crop",
    category: "gadgets",
    rating: 4.6,
    reviews: 4321,
    badge: "Trending",
    description: "True wireless earbuds with spatial audio, transparency mode, and wireless charging case.",
    features: ["Spatial Audio", "ANC", "24hr Total Battery", "IPX5 Waterproof"],
  },
  {
    id: "12",
    name: "Macramé Wall Hanging",
    price: 899,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&h=500&fit=crop",
    category: "home-decor",
    rating: 4.3,
    reviews: 654,
    description: "Handcrafted bohemian macramé wall hanging. Natural cotton cord on driftwood dowel.",
    features: ["Handmade", "Natural Cotton", "Boho Style", "Easy Mount"],
  },
];

export const deals = products.filter(p => p.badge === "Hot Deal" || (p.originalPrice && p.originalPrice > p.price * 1.5));

export const featuredProducts = products.filter(p => p.badge === "Bestseller" || p.badge === "New" || p.rating >= 4.7);

export const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;
