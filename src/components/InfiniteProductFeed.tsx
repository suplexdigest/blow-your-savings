"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { PRODUCTS, Product } from "@/data/products";
import ProductCard from "./ProductCard";
import AdSlot from "./AdSlot";

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function InfiniteProductFeed({ category }: { category: string }) {
  const filtered = useMemo(
    () =>
      category === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === category),
    [category]
  );

  const [items, setItems] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const pageSize = 8;

  // Reset when category changes
  useEffect(() => {
    const shuffled = shuffleArray(filtered);
    setItems(shuffled.slice(0, pageSize));
    setPage(1);
  }, [filtered]);

  const loadMore = useCallback(() => {
    setItems((prev) => {
      const start = page * pageSize;
      // Loop products infinitely by recycling and reshuffling
      let nextBatch: Product[] = [];
      for (let i = 0; i < pageSize; i++) {
        nextBatch.push(filtered[(start + i) % filtered.length]);
      }
      return [...prev, ...nextBatch];
    });
    setPage((p) => p + 1);
  }, [page, filtered]);

  // Infinite scroll observer
  useEffect(() => {
    const sentinel = document.getElementById("scroll-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "600px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((product, i) => (
          <div key={`${product.id}-${i}`}>
            <ProductCard product={product} />
            {/* Insert ad every 8 items */}
            {(i + 1) % 8 === 0 && (
              <div className="mt-4">
                <AdSlot slot={`feed-${Math.floor(i / 8)}`} className="min-h-[90px]" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Infinite scroll sentinel */}
      <div id="scroll-sentinel" className="flex items-center justify-center py-12">
        <div className="flex items-center gap-3 text-sm text-muted">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-gold border-t-transparent" />
          Loading more luxury...
        </div>
      </div>
    </div>
  );
}
