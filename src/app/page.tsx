"use client";

import { useState } from "react";
import { CATEGORIES } from "@/data/products";
import Navbar from "@/components/Navbar";
import CategoryBar from "@/components/CategoryBar";
import InfiniteProductFeed from "@/components/InfiniteProductFeed";
import AdSlot from "@/components/AdSlot";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [category, setCategory] = useState("all");

  const activeCat = CATEGORIES.find((c) => c.slug === category);

  return (
    <>
      <Navbar />
      <CategoryBar active={category} onChange={setCategory} />

      {/* Hero / Category Header */}
      <div className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
          <h1 className="text-2xl font-black sm:text-3xl md:text-4xl">
            {category === "all" ? (
              <>
                <span className="text-gold">Luxury</span> That Ruins Your Budget
              </>
            ) : (
              <>
                <span className="text-gold">{activeCat?.name}</span>
              </>
            )}
          </h1>
          <p className="mt-1 text-sm text-muted sm:text-base">
            {activeCat?.tagline || "Curated for expensive taste and zero self-control."}
          </p>
        </div>
      </div>

      <AdSlot slot="header-banner" className="mx-auto mt-4 max-w-7xl px-4" />

      {/* Product Feed */}
      <main className="mx-auto max-w-7xl px-4 py-6">
        <InfiniteProductFeed category={category} />
      </main>

      <Footer />
    </>
  );
}
