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

export const CATEGORIES: Category[] = [
  { slug: "all", name: "All", tagline: "Everything you never knew you needed", icon: "sparkles" },
  { slug: "tech", name: "Tech", tagline: "Bleeding-edge toys for grown-ups", icon: "cpu" },
  { slug: "home", name: "Home", tagline: "Make your neighbors weep", icon: "home" },
  { slug: "outdoors", name: "Outdoors", tagline: "Rich people touch grass too", icon: "mountain" },
  { slug: "gaming", name: "Gaming", tagline: "Level up your setup", icon: "gamepad" },
  { slug: "fashion", name: "Fashion", tagline: "Dress expensive, look expensive", icon: "shirt" },
  { slug: "kitchen", name: "Kitchen", tagline: "Cook like a Michelin chef", icon: "home" },
  { slug: "weird", name: "Weird & Cool", tagline: "Things you didn't know existed", icon: "sparkles" },
  { slug: "fitness", name: "Fitness", tagline: "Sweat in style", icon: "mountain" },
  { slug: "gifts", name: "Gift Ideas", tagline: "Make someone's year", icon: "sparkles" },
];
