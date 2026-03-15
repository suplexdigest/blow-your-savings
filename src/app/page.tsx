"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import SearchAndFilter, { Filters } from "@/components/SearchAndFilter";
import InfiniteProductFeed from "@/components/InfiniteProductFeed";
import AdSlot from "@/components/AdSlot";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    category: "all",
    priceRange: { min: 0, max: Infinity },
    sort: "random",
  });

  return (
    <>
      <Navbar />
      <AffiliateDisclosure />

      {/* Hero */}
      <div className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:py-8">
          <h1 className="text-xl font-black sm:text-3xl md:text-4xl">
            <span className="text-gold">Luxury</span> That Ruins Your Budget
          </h1>
          <p className="mt-1 text-xs text-muted sm:text-base">
            Curated for expensive taste and zero self-control.
          </p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="sticky top-14 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <SearchAndFilter filters={filters} onChange={setFilters} />
        </div>
      </div>

      <AdSlot slot="header-banner" className="mx-auto mt-4 max-w-7xl px-4" />

      {/* Product Feed */}
      <main className="mx-auto max-w-7xl px-4 py-4 sm:py-6">
        <InfiniteProductFeed filters={filters} />
      </main>

      <Footer />
    </>
  );
}
