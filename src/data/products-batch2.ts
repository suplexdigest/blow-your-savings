import { Product } from "./products";
import { AMAZON_TAG } from "./products";

function amzn(keywords: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(keywords)}&tag=${AMAZON_TAG}`;
}

function amznDirect(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

export const PRODUCTS_BATCH2: Product[] = [
  // ============================================================
  // HOME
  // ============================================================
  {
    id: "breville-barista-express-impress",
    name: "Barista Express Impress",
    brand: "Breville",
    price: "$899",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&h=600&fit=crop",
    category: "home",
    description: "Built-in grinder, assisted tamping, and a steam wand that'll make your barista jealous. Your morning coffee just became a $6 savings and a 20-minute ritual.",
    affiliateUrl: amznDirect("B00CH9QWOU"),
    tags: ["espresso", "grinder", "barista"],
  },
  {
    id: "kitchenaid-artisan-mixer",
    name: "Artisan Series 5-Quart Stand Mixer",
    brand: "KitchenAid",
    price: "$449",
    image: "https://images.unsplash.com/photo-1594385208974-2f8bb07b7293?w=600&h=600&fit=crop",
    category: "home",
    description: "The iconic stand mixer that comes in 50+ colors because matching your kitchen aesthetic is apparently non-negotiable. Planetary mixing action for perfect dough every time.",
    affiliateUrl: amznDirect("B00005UP2P"),
    tags: ["mixer", "baking", "iconic"],
  },
  {
    id: "vitamix-a3500",
    name: "Ascent Series A3500 Blender",
    brand: "Vitamix",
    price: "$649",
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&h=600&fit=crop",
    category: "home",
    description: "Blends so aggressively it can make hot soup from raw ingredients through friction alone. The blender that starts at 'smoothie' and ends at 'what else can I blend?'",
    affiliateUrl: amznDirect("B075713NNL"),
    tags: ["blender", "professional", "versatile"],
  },
  {
    id: "le-creuset-dutch-oven-5-5qt",
    name: "Signature Enameled Cast Iron Dutch Oven 5.5 Qt",
    brand: "Le Creuset",
    price: "$419",
    image: "https://images.unsplash.com/photo-1585442073325-eb7ba2a8a7c3?w=600&h=600&fit=crop",
    category: "home",
    description: "French enameled cast iron that'll outlive your grandchildren. Comes in colors so beautiful you'll want to display it, not cook in it. You should cook in it.",
    affiliateUrl: amznDirect("B0076NOGPY"),
    tags: ["Dutch-oven", "French", "heirloom"],
  },
];
