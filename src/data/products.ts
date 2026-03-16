export type Category = {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  category: string;
  description: string;
  affiliateUrl: string;
  tags: string[];
};

export const AMAZON_TAG = "hookandhull20-20";

function amzn(keywords: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(keywords)}&tag=${AMAZON_TAG}`;
}

function amznDirect(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

export const CATEGORIES: Category[] = [
  { slug: "all", name: "All", tagline: "Everything luxurious", icon: "sparkles" },
  { slug: "tech", name: "Tech & Gadgets", tagline: "Bleeding-edge toys for grown-ups", icon: "cpu" },
  { slug: "audio", name: "Audio", tagline: "Sound so good it hurts", icon: "headphones" },
  { slug: "kitchen", name: "Kitchen", tagline: "Cook like a Michelin chef", icon: "home" },
  { slug: "toys", name: "Toys & Gaming", tagline: "Because adulting is optional", icon: "gamepad" },
  { slug: "office", name: "Office", tagline: "Work from your throne", icon: "cpu" },
  { slug: "watches", name: "Watches", tagline: "Timepieces that make time jealous", icon: "watch" },
  { slug: "pets", name: "Pets", tagline: "Spoil them rotten", icon: "sparkles" },
];

export const PRODUCTS: Product[] = [
  // ============================================================
  // TECH & GADGETS
  // ============================================================
  {
    id: "macbook-pro-m4",
    name: "MacBook Pro 16\" M4 Max",
    brand: "Apple",
    price: "$4,999",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop",
    category: "tech",
    description: "128GB unified memory. 8TB SSD. Liquid Retina XDR display. The most powerful laptop ever created, and it barely gets warm.",
    affiliateUrl: amznDirect("B0DLHJYRND"),
    tags: ["productivity", "creative", "power"],
  },
  {
    id: "sony-a1",
    name: "Alpha 1 Mirrorless Camera",
    brand: "Sony",
    price: "$6,498",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=600&fit=crop",
    category: "tech",
    description: "50.1MP full-frame, 30fps burst, 8K video, real-time eye AF for humans, animals, and birds. The camera that does everything.",
    affiliateUrl: amznDirect("B08QBMD6YV"),
    tags: ["photography", "video", "professional"],
  },

  // ============================================================
  // HOME & DESIGN
  // ============================================================
  {
    id: "vitamix-a3500",
    name: "Ascent A3500",
    brand: "Vitamix",
    price: "$649",
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&h=600&fit=crop",
    category: "home",
    description: "2.2 HP motor that pulverizes anything you throw at it. Touchscreen, self-detect containers, and built-in WiFi because even blenders need internet now.",
    affiliateUrl: amznDirect("B075713NNL"),
    tags: ["kitchen", "blender", "professional"],
  },
  {
    id: "breville-oracle-jet",
    name: "Oracle Jet",
    brand: "Breville",
    price: "$2,999",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=600&fit=crop",
    category: "home",
    description: "Auto dose, auto tamp, auto steam. Makes cafe-quality espresso with one button. The machine for people who love coffee but hate mornings.",
    affiliateUrl: amznDirect("B00CH9QWOU"),
    tags: ["coffee", "automatic", "premium"],
  },

  // ============================================================
  // AUDIO
  // ============================================================
  {
    id: "airpods-max",
    name: "AirPods Max",
    brand: "Apple",
    price: "$549",
    image: "https://images.unsplash.com/photo-1625245488600-f03fef636a3c?w=600&h=600&fit=crop",
    category: "audio",
    description: "USB-C, adaptive audio, and ANC so good the world disappears. Aluminum cups, stainless steel frame, and that Apple tax.",
    affiliateUrl: amznDirect("B0DGJC52FP"),
    tags: ["headphones", "anc", "wireless"],
  },
  {
    id: "sonos-arc-ultra",
    name: "Arc Ultra",
    brand: "Sonos",
    price: "$999",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
    category: "audio",
    description: "Dolby Atmos, 14 drivers, Trueplay room calibration. One soundbar to replace your entire surround system.",
    affiliateUrl: amznDirect("B0DFK28LBB"),
    tags: ["soundbar", "atmos", "home-theater"],
  },
  {
    id: "bose-qc-ultra",
    name: "QuietComfort Ultra Headphones",
    brand: "Bose",
    price: "$429",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    category: "audio",
    description: "Immersive Audio with head tracking, world-class ANC, and comfort so good you forget you're wearing them. The noise-canceling king reclaims the throne.",
    affiliateUrl: amznDirect("B0CCZ1L489"),
    tags: ["anc", "wireless", "comfort"],
  },

  // ============================================================
  // OUTDOORS & ADVENTURE
  // ============================================================
  {
    id: "yeti-tundra-haul",
    name: "Tundra Haul Hard Cooler",
    brand: "YETI",
    price: "$450",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=600&fit=crop",
    category: "outdoors",
    description: "Bear-proof, wheeled, and keeps ice for days. The cooler that costs more than most people's camping trip.",
    affiliateUrl: amznDirect("B07FXMVMKS"),
    tags: ["cooler", "camping", "indestructible"],
  },

  // ============================================================
  // TOYS & COLLECTIBLES
  // ============================================================
  {
    id: "lego-millenium-falcon",
    name: "Millennium Falcon UCS",
    brand: "LEGO",
    price: "$849",
    image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=600&h=600&fit=crop",
    category: "toys",
    description: "7,541 pieces. 33 inches long. The largest LEGO set ever made. Clear your weekend, your dining table, and possibly your relationship.",
    affiliateUrl: amznDirect("B075SDMMMV"),
    tags: ["lego", "star-wars", "display"],
  },
  {
    id: "ps5-pro",
    name: "PlayStation 5 Pro",
    brand: "Sony",
    price: "$699",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=600&fit=crop",
    category: "toys",
    description: "8K gaming, ray tracing, and load times so fast you can't read the tips. The console for people who think the PS5 wasn't enough.",
    affiliateUrl: amznDirect("B0DGY63Z2H"),
    tags: ["gaming", "console", "8k"],
  },
  {
    id: "nintendo-switch-oled",
    name: "Switch OLED",
    brand: "Nintendo",
    price: "$349",
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&h=600&fit=crop",
    category: "toys",
    description: "7-inch OLED screen, wide adjustable stand, and 64GB storage. Nintendo's best Switch yet for handheld gaming.",
    affiliateUrl: amznDirect("B098RKWHHZ"),
    tags: ["gaming", "console", "portable"],
  },
  {
    id: "xbox-series-x",
    name: "Xbox Series X",
    brand: "Microsoft",
    price: "$499",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&h=600&fit=crop",
    category: "toys",
    description: "12 teraflops, 4K/120fps, and Game Pass — the best deal in gaming. The fridge-shaped console that outsmarted everyone with a subscription model.",
    affiliateUrl: amznDirect("B08H75RTZ8"),
    tags: ["gaming", "console", "game-pass"],
  },
];
