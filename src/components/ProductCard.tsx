"use client";

import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className="group block overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5"
    >
      <div className="relative aspect-square overflow-hidden bg-black">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            {product.brand}
          </p>
        </div>
        <div className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-sm font-bold text-gold backdrop-blur">
          {product.price}
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-1 text-base font-bold text-foreground group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <p className="mb-3 text-xs leading-relaxed text-muted line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            {product.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gold/10 px-2 py-0.5 text-[10px] font-medium text-gold"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-xs font-semibold text-gold group-hover:underline">
            View Deal &rarr;
          </span>
        </div>
      </div>
    </a>
  );
}
