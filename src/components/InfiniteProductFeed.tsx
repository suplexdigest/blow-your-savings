"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Product } from "@/data/products";
import { ALL_PRODUCTS as PRODUCTS } from "@/data/all-products";
import ProductCard from "./ProductCard";
import { Filters } from "./SearchAndFilter";

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function parsePrice(price: string): number {
  return parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
}

// Deduplicate by image URL — if two products share the same image, only keep the first
function deduplicateByImage(products: Product[]): Product[] {
  const seen = new Set<string>();
  return products.filter((p) => {
    if (seen.has(p.image)) return false;
    seen.add(p.image);
    return true;
  });
}

export default function InfiniteProductFeed({ filters }: { filters: Filters }) {
  const filtered = useMemo(() => {
    let list = PRODUCTS;

    // Category
    if (filters.category !== "all") {
      list = list.filter((p) => p.category === filters.category);
    }

    // Search
    if (filters.search.trim()) {
      const q = filters.search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Price range
    if (filters.priceRange.max !== Infinity || filters.priceRange.min > 0) {
      list = list.filter((p) => {
        const price = parsePrice(p.price);
        return price >= filters.priceRange.min && price <= filters.priceRange.max;
      });
    }

    // Deduplicate by image
    list = deduplicateByImage(list);

    // Sort
    if (filters.sort === "price-asc") {
      list = [...list].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (filters.sort === "price-desc") {
      list = [...list].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (filters.sort === "name-asc") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      list = shuffleArray(list);
    }

    return list;
  }, [filters]);

  const [items, setItems] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const pageSize = 12;

  // Reset when filters change
  useEffect(() => {
    setItems(filtered.slice(0, pageSize));
    setPage(1);
    setAllLoaded(filtered.length <= pageSize);
  }, [filtered]);

  const loadMore = useCallback(() => {
    const start = page * pageSize;
    if (start >= filtered.length) {
      setAllLoaded(true);
      return;
    }
    const nextBatch = filtered.slice(start, start + pageSize);
    setItems((prev) => [...prev, ...nextBatch]);
    setPage((p) => p + 1);
    if (start + pageSize >= filtered.length) {
      setAllLoaded(true);
    }
  }, [page, filtered]);

  // Infinite scroll observer
  useEffect(() => {
    if (allLoaded) return;
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
  }, [loadMore, allLoaded]);

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-lg font-bold text-foreground">No items found</p>
        <p className="mt-1 text-sm text-muted">Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div>
      <p className="mb-4 text-xs text-muted">
        {filtered.length} item{filtered.length !== 1 ? "s" : ""}
      </p>
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {!allLoaded && (
        <div id="scroll-sentinel" className="flex flex-col items-center justify-center py-12">
          <div className="flex items-center gap-3 text-sm text-muted">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-gold border-t-transparent" />
            Loading more luxury...
          </div>
          <p className="mt-3 font-display text-[7px] italic tracking-[0.35em] text-border/30 select-none">
            ...because you got it like that
          </p>
        </div>
      )}

      {allLoaded && items.length > 0 && (
        <div className="py-12 text-center">
          <p className="text-sm text-muted">
            You&apos;ve seen all {filtered.length} items. Your wallet thanks you for stopping.
          </p>
          <p className="mt-2 font-display text-[8px] italic tracking-[0.3em] text-border/40 select-none">
            because you got it like that
          </p>
        </div>
      )}
    </div>
  );
}
