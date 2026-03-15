"use client";

import { CATEGORIES } from "@/data/products";

const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $500", min: 0, max: 500 },
  { label: "$500 – $1K", min: 500, max: 1000 },
  { label: "$1K – $5K", min: 1000, max: 5000 },
  { label: "$5K – $25K", min: 5000, max: 25000 },
  { label: "$25K – $100K", min: 25000, max: 100000 },
  { label: "$100K+", min: 100000, max: Infinity },
];

const SORT_OPTIONS = [
  { label: "Random", value: "random" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A–Z", value: "name-asc" },
];

export type Filters = {
  search: string;
  category: string;
  priceRange: { min: number; max: number };
  sort: string;
};

export default function SearchAndFilter({
  filters,
  onChange,
}: {
  filters: Filters;
  onChange: (f: Filters) => void;
}) {
  return (
    <div className="space-y-3">
      {/* Search bar */}
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search luxury items..."
          value={filters.search}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
          className="w-full rounded-xl border border-border bg-surface py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
        {filters.search && (
          <button
            onClick={() => onChange({ ...filters, search: "" })}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Filter row */}
      <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
        {/* Category pills */}
        {CATEGORIES.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => onChange({ ...filters, category: cat.slug })}
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
              filters.category === cat.slug
                ? "bg-gold text-background"
                : "border border-border text-muted hover:border-gold/40 hover:text-foreground"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Price + Sort row */}
      <div className="flex gap-2">
        <select
          value={`${filters.priceRange.min}-${filters.priceRange.max}`}
          onChange={(e) => {
            const [min, max] = e.target.value.split("-").map(Number);
            onChange({ ...filters, priceRange: { min, max } });
          }}
          className="flex-1 rounded-lg border border-border bg-surface px-3 py-2 text-xs text-foreground focus:border-gold focus:outline-none"
        >
          {PRICE_RANGES.map((r) => (
            <option key={r.label} value={`${r.min}-${r.max}`}>
              {r.label}
            </option>
          ))}
        </select>
        <select
          value={filters.sort}
          onChange={(e) => onChange({ ...filters, sort: e.target.value })}
          className="flex-1 rounded-lg border border-border bg-surface px-3 py-2 text-xs text-foreground focus:border-gold focus:outline-none"
        >
          {SORT_OPTIONS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
