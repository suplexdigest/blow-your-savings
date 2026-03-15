"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-xl font-black tracking-tight text-gold">BLOW</span>
          <span className="text-xl font-black tracking-tight text-foreground">YOUR</span>
          <span className="text-xl font-black tracking-tight text-gold">SAVINGS</span>
        </Link>
        <div className="flex items-center gap-4 text-xs text-muted">
          <span className="hidden sm:inline">Luxury items you didn&apos;t know you needed</span>
        </div>
      </div>
    </nav>
  );
}
