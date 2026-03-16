"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="font-display text-3xl font-black italic sm:text-5xl md:text-6xl">
          <span className="text-gold">Luxury</span> Is Loading
        </h1>
        <p className="mt-4 max-w-md text-sm text-muted sm:text-base">
          We&apos;re curating the finest products from across the internet.
          Real items, real prices, real links. No fakes. Coming very soon.
        </p>
        <p className="mt-8 font-display text-[9px] italic tracking-[0.25em] text-border select-none sm:text-[10px]">
          because you got it like that
        </p>
      </div>

      <Footer />
    </>
  );
}
