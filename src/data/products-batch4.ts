import { Product } from "./products";
import { AMAZON_TAG } from "./products";

function amzn(keywords: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(keywords)}&tag=${AMAZON_TAG}`;
}

function amznDirect(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

export const PRODUCTS_BATCH4: Product[] = [
  // ============================================================
  // FITNESS
  // ============================================================
  {
    id: "bowflex-selecttech-552",
    name: "SelectTech 552 Adjustable Dumbbells",
    brand: "Bowflex",
    price: "$349",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=600&fit=crop",
    category: "fitness",
    description: "15 sets of weights in one. Dial from 5 to 52.5 lbs and stop hoarding dumbbells like a gym equipment dragon.",
    affiliateUrl: amznDirect("B001ARYU58"),
    tags: ["dumbbells", "adjustable", "space-saving"],
  },

  // ============================================================
  // OFFICE
  // ============================================================
  {
    id: "herman-miller-aeron",
    name: "Aeron Ergonomic Chair",
    brand: "Herman Miller",
    price: "$1,395",
    image: "https://images.unsplash.com/photo-1589363349192-e61afb97e58d?w=600&h=600&fit=crop",
    category: "office",
    description: "PostureFit SL, 8Z Pellicle mesh, and 12-year warranty. The throne of Silicon Valley and home offices with ambition.",
    affiliateUrl: amznDirect("B01N0ZUN15"),
    tags: ["chair", "ergonomic", "iconic"],
  },

  // ============================================================
  // PETS
  // ============================================================
  {
    id: "kong-classic-large",
    name: "Classic Dog Toy Large",
    brand: "KONG",
    price: "$15",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop",
    category: "pets",
    description: "Red rubber, stuffable, and bouncier than your last relationship. The OG dog toy that vets have recommended since 1976.",
    affiliateUrl: amznDirect("B0002AR0I8"),
    tags: ["dog", "toy", "classic"],
  },
];
