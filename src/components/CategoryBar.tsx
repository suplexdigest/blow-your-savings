"use client";

import { CATEGORIES } from "@/data/products";

const ICONS: Record<string, string> = {
  sparkles: "\u2728",
  watch: "\u231A",
  cpu: "\uD83D\uDCBB",
  car: "\uD83C\uDFCE\uFE0F",
  shirt: "\uD83D\uDC54",
  home: "\uD83C\uDFE0",
  headphones: "\uD83C\uDFA7",
  mountain: "\u26F0\uFE0F",
  wine: "\uD83C\uDF77",
  gamepad: "\uD83C\uDFAE",
};

export default function CategoryBar({
  active,
  onChange,
}: {
  active: string;
  onChange: (slug: string) => void;
}) {
  return (
    <div className="no-scrollbar overflow-x-auto border-b border-border bg-surface">
      <div className="mx-auto flex max-w-7xl gap-1 px-4 py-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => onChange(cat.slug)}
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
              active === cat.slug
                ? "bg-gold text-background"
                : "text-muted hover:bg-surface-hover hover:text-foreground"
            }`}
          >
            <span>{ICONS[cat.icon] || ""}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
