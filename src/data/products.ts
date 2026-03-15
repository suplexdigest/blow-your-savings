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
  { slug: "watches", name: "Watches", tagline: "Timepieces that make time jealous", icon: "watch" },
  { slug: "tech", name: "Tech & Gadgets", tagline: "Bleeding-edge toys for grown-ups", icon: "cpu" },
  { slug: "cars", name: "Supercars", tagline: "Machines that turn heads at 200mph", icon: "car" },
  { slug: "fashion", name: "Fashion", tagline: "Dress like your bank account has no limit", icon: "shirt" },
  { slug: "home", name: "Home & Design", tagline: "Make your neighbors weep", icon: "home" },
  { slug: "audio", name: "Audio", tagline: "Sound so good it hurts", icon: "headphones" },
  { slug: "outdoors", name: "Outdoors & Adventure", tagline: "Rich people touch grass too", icon: "mountain" },
  { slug: "spirits", name: "Spirits & Wine", tagline: "Sip like royalty", icon: "wine" },
  { slug: "jewelry", name: "Jewelry", tagline: "Shine brighter than your future", icon: "sparkles" },
  { slug: "grooming", name: "Grooming", tagline: "Look expensive, smell expensive", icon: "sparkles" },
  { slug: "fitness", name: "Fitness", tagline: "Sweat in style", icon: "mountain" },
  { slug: "travel", name: "Travel", tagline: "Pack like a billionaire", icon: "sparkles" },
  { slug: "office", name: "Office", tagline: "Work from your throne", icon: "cpu" },
  { slug: "kitchen", name: "Kitchen", tagline: "Cook like a Michelin chef", icon: "home" },
  { slug: "pets", name: "Pets", tagline: "Spoil them rotten", icon: "sparkles" },
  { slug: "toys", name: "Toys & Collectibles", tagline: "Because adulting is optional", icon: "gamepad" },
];

export const PRODUCTS: Product[] = [
  // ============================================================
  // WATCHES
  // ============================================================
  {
    id: "omega-speedmaster",
    name: "Speedmaster Moonwatch Professional",
    brand: "Omega",
    price: "$6,900",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&h=600&fit=crop",
    category: "watches",
    description: "The first watch worn on the Moon. Hand-wound, hesalite crystal, NASA-certified. An absolute legend.",
    affiliateUrl: amznDirect("B09V3HZDM2"),
    tags: ["space", "heritage", "accessible"],
  },
  {
    id: "tag-heuer-monaco",
    name: "Monaco Chronograph",
    brand: "TAG Heuer",
    price: "$7,350",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop",
    category: "watches",
    description: "The square watch Steve McQueen made famous in Le Mans. Bold, iconic, and still turning heads 55 years later.",
    affiliateUrl: amznDirect("B08WRQP7GR"),
    tags: ["racing", "heritage", "square"],
  },

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
    affiliateUrl: amznDirect("B0DSJNR1W4"),
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
  {
    id: "dji-inspire-3",
    name: "Inspire 3",
    brand: "DJI",
    price: "$16,499",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=600&fit=crop",
    category: "tech",
    description: "Full-frame 8K cinema drone. Dual-operator control, Waypoint Pro, and image quality that makes Hollywood jealous.",
    affiliateUrl: amznDirect("B0C5MDKNPW"),
    tags: ["drone", "cinema", "professional"],
  },
  {
    id: "apple-vision-pro",
    name: "Vision Pro",
    brand: "Apple",
    price: "$3,499",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&h=600&fit=crop",
    category: "tech",
    description: "Spatial computing is here. Micro-OLED displays, eye tracking, hand gestures. The future strapped to your face.",
    affiliateUrl: amznDirect("B0DGJHXM8M"),
    tags: ["vr", "spatial", "future"],
  },
  {
    id: "steam-deck-oled",
    name: "Steam Deck OLED Limited Edition",
    brand: "Valve",
    price: "$679",
    image: "https://images.unsplash.com/photo-1640955014216-75201056c829?w=600&h=600&fit=crop",
    category: "tech",
    description: "Your entire Steam library in your hands. HDR OLED display, longer battery life, and enough power to run AAA titles on the go.",
    affiliateUrl: amznDirect("B0DFDJKY3Y"),
    tags: ["gaming", "portable", "value"],
  },
  {
    id: "samsung-the-frame",
    name: "The Frame 85\" QLED",
    brand: "Samsung",
    price: "$3,999",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop",
    category: "tech",
    description: "Displays classic art when off. Looks like a framed painting. 85 inches of deception that makes visitors ask 'is that a TV or a Monet?'",
    affiliateUrl: amznDirect("B0CX59TB7W"),
    tags: ["tv", "art", "design"],
  },

  // ============================================================
  // SUPERCARS
  // ============================================================

  // ============================================================
  // FASHION
  // ============================================================
  {
    id: "canada-goose-expedition",
    name: "Expedition Parka",
    brand: "Canada Goose",
    price: "$1,695",
    image: "https://images.unsplash.com/photo-1544923246-77307dd270b5?w=600&h=600&fit=crop",
    category: "fashion",
    description: "Rated to -30°C. Built for Antarctic researchers, adopted by people who wait 4 minutes for an Uber.",
    affiliateUrl: amznDirect("B00FYMLNBO"),
    tags: ["outerwear", "winter", "iconic"],
  },

  // ============================================================
  // HOME & DESIGN
  // ============================================================
  {
    id: "eames-lounge-chair",
    name: "Eames Lounge Chair & Ottoman",
    brand: "Herman Miller",
    price: "$7,395",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=600&fit=crop",
    category: "home",
    description: "Designed in 1956 and still the most iconic chair ever made. Molded plywood, premium leather, and a seat that hugs you back.",
    affiliateUrl: amznDirect("B01DG6OUMC"),
    tags: ["design-icon", "seating", "mid-century"],
  },
  {
    id: "dyson-purifier",
    name: "Purifier Big Quiet Formaldehyde",
    brand: "Dyson",
    price: "$999",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop",
    category: "home",
    description: "Purifies a 1,076 sq ft room. Destroys formaldehyde molecules. So quiet you'll forget it's running. So expensive you won't.",
    affiliateUrl: amznDirect("B0CMMLB5Z5"),
    tags: ["air-quality", "smart-home", "design"],
  },
  {
    id: "la-marzocco-linea",
    name: "Linea Micra",
    brand: "La Marzocco",
    price: "$4,500",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
    category: "home",
    description: "The espresso machine used by world champion baristas, shrunk to fit your kitchen. Dual boiler. PID temperature control. Latte art competitions start at home.",
    affiliateUrl: amznDirect("B0C5KQ3C9Q"),
    tags: ["coffee", "italian", "pro-grade"],
  },
  {
    id: "theragun-pro-plus",
    name: "Theragun PRO Plus",
    brand: "Therabody",
    price: "$599",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop",
    category: "home",
    description: "6 attachments, smart app integration, and enough percussion force to turn granite into sand. Your muscles will thank you.",
    affiliateUrl: amznDirect("B0CDQ49NY1"),
    tags: ["wellness", "recovery", "smart"],
  },
  {
    id: "vitamix-a3500",
    name: "Ascent A3500",
    brand: "Vitamix",
    price: "$649",
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&h=600&fit=crop",
    category: "home",
    description: "2.2 HP motor that pulverizes anything you throw at it. Touchscreen, self-detect containers, and built-in WiFi because even blenders need internet now.",
    affiliateUrl: amznDirect("B085F48VLX"),
    tags: ["kitchen", "blender", "professional"],
  },
  {
    id: "le-creuset-dutch-oven",
    name: "Signature Round Dutch Oven 7.25 qt",
    brand: "Le Creuset",
    price: "$420",
    image: "https://images.unsplash.com/photo-1585837146751-a44118595079?w=600&h=600&fit=crop",
    category: "home",
    description: "Enameled cast iron that lasts generations. Comes in 15 colors. The pot your grandma had, your mom borrowed, and you'll fight your siblings over.",
    affiliateUrl: amznDirect("B00004S56M"),
    tags: ["cookware", "cast-iron", "heirloom"],
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
    affiliateUrl: amznDirect("B0DGJ9B6PF"),
    tags: ["headphones", "anc", "wireless"],
  },
  {
    id: "focal-utopia",
    name: "Utopia 2022",
    brand: "Focal",
    price: "$4,999",
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=600&h=600&fit=crop",
    category: "audio",
    description: "Open-back, beryllium drivers, and audiophile-grade sound that makes you hear things in songs you've listened to 1,000 times.",
    affiliateUrl: amznDirect("B09Z2MH4YM"),
    tags: ["audiophile", "open-back", "reference"],
  },
  {
    id: "sonos-arc-ultra",
    name: "Arc Ultra",
    brand: "Sonos",
    price: "$999",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
    category: "audio",
    description: "Dolby Atmos, 14 drivers, Trueplay room calibration. One soundbar to replace your entire surround system.",
    affiliateUrl: amznDirect("B0DHZ88XH4"),
    tags: ["soundbar", "atmos", "home-theater"],
  },
  {
    id: "technics-sl1200",
    name: "SL-1200GR2",
    brand: "Technics",
    price: "$1,699",
    image: "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=600&h=600&fit=crop",
    category: "audio",
    description: "The turntable that built DJ culture. Direct drive, coreless motor, and build quality that will outlast you.",
    affiliateUrl: amznDirect("B0C9BY6NR1"),
    tags: ["vinyl", "turntable", "legendary"],
  },
  {
    id: "bose-qc-ultra",
    name: "QuietComfort Ultra Headphones",
    brand: "Bose",
    price: "$429",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    category: "audio",
    description: "Immersive Audio with head tracking, world-class ANC, and comfort so good you forget you're wearing them. The noise-canceling king reclaims the throne.",
    affiliateUrl: amznDirect("B0CCZ26B5V"),
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
    affiliateUrl: amznDirect("B07FHMSQJF"),
    tags: ["cooler", "camping", "indestructible"],
  },
  {
    id: "garmin-fenix-8",
    name: "fēnix 8 Solar",
    brand: "Garmin",
    price: "$1,099",
    image: "https://images.unsplash.com/photo-1510017803350-acf090956b72?w=600&h=600&fit=crop",
    category: "outdoors",
    description: "AMOLED display, solar charging, topo maps, and every sport mode known to humanity. The watch for people who actually go outside.",
    affiliateUrl: amznDirect("B0D6MR2C4S"),
    tags: ["smartwatch", "gps", "adventure"],
  },
  {
    id: "traeger-ironwood",
    name: "Ironwood XL WiFIRE Pellet Grill",
    brand: "Traeger",
    price: "$2,199",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=600&fit=crop",
    category: "outdoors",
    description: "WiFi-enabled, app-controlled, super smoke mode. 880 sq in of cooking space. Your backyard is now a Michelin-star restaurant.",
    affiliateUrl: amznDirect("B0854ZG2J4"),
    tags: ["grilling", "bbq", "smart"],
  },

  // ============================================================
  // SPIRITS & WINE
  // ============================================================

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
    affiliateUrl: amznDirect("B0DG5SMZYJ"),
    tags: ["gaming", "console", "8k"],
  },
  {
    id: "lego-technic-bugatti",
    name: "Technic Bugatti Chiron",
    brand: "LEGO",
    price: "$449",
    image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=600&h=600&fit=crop",
    category: "toys",
    description: "3,599 pieces, working W16 engine with moving pistons, and a functional 8-speed gearbox. The closest most of us will get to owning a Chiron.",
    affiliateUrl: amznDirect("B0792RB3B6"),
    tags: ["lego", "technic", "supercar"],
  },
  {
    id: "nintendo-switch-2",
    name: "Switch 2",
    brand: "Nintendo",
    price: "$449",
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&h=600&fit=crop",
    category: "toys",
    description: "Magnetic Joy-Cons, 8-inch LCD, and backwards compatibility with your entire Switch library. Nintendo finally gave us what we wanted. Almost.",
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
