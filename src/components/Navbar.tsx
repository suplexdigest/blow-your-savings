"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-3 sm:h-14 sm:px-4">
        <Link href="/" className="flex items-center gap-0.5 sm:gap-1">
          <span className="text-base font-black tracking-tight text-gold sm:text-xl">BLOW</span>
          <span className="text-base font-black tracking-tight text-foreground sm:text-xl">YOUR</span>
          <span className="text-base font-black tracking-tight text-gold sm:text-xl">SAVINGS</span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="hidden text-xs text-muted sm:inline">
            Luxury items you didn&apos;t know you needed
          </span>
          <Link
            href="/about"
            className="text-[10px] text-muted hover:text-gold sm:text-xs"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
