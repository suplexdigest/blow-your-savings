"use client";

const AMAZON_TAG = "hookandhull20-20";

const PROMO_LINKS = [
  { text: "Top Deals on Luxury Watches", search: "luxury watches men" },
  { text: "Premium Tech Deals", search: "premium tech gadgets" },
  { text: "Designer Fashion Sale", search: "designer fashion men women" },
  { text: "Home Bar Essentials", search: "premium home bar accessories" },
  { text: "Audiophile Headphones", search: "audiophile headphones" },
  { text: "Outdoor Adventure Gear", search: "premium outdoor gear" },
  { text: "Luxury Gift Ideas", search: "luxury gifts" },
  { text: "Gaming Setup Essentials", search: "premium gaming setup" },
];

export default function AdSlot({
  slot,
  className = "",
}: {
  slot: string;
  className?: string;
}) {
  // Pick a promo based on slot name hash
  const hash = slot.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const promo = PROMO_LINKS[hash % PROMO_LINKS.length];

  return (
    <a
      href={`https://www.amazon.com/s?k=${encodeURIComponent(promo.search)}&tag=${AMAZON_TAG}`}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className={`flex items-center justify-center rounded-lg border border-gold/20 bg-gold/5 text-xs font-medium text-gold transition-colors hover:bg-gold/10 ${className}`}
      data-ad-slot={slot}
    >
      <span className="py-3">{promo.text} &rarr;</span>
    </a>
  );
}
