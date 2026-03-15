import { ALL_PRODUCTS as PRODUCTS } from "@/data/all-products";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";
import ProductPageClient from "./ProductPageClient";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return {};
  return {
    title: `${product.name} by ${product.brand}`,
    description: product.description,
    openGraph: {
      title: `${product.name} by ${product.brand} — BlowYourSavings`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) notFound();

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-6 sm:py-10">
        <Link
          href="/"
          className="mb-4 inline-flex items-center gap-1 text-xs text-muted hover:text-gold sm:mb-6 sm:text-sm"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to browsing
        </Link>

        <div className="grid gap-6 sm:gap-10 md:grid-cols-2">
          {/* Image */}
          <ProductPageClient product={product} />

          {/* Details */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
              {product.brand}
            </p>
            <h1 className="mt-1 text-2xl font-black leading-tight sm:text-3xl md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 text-lg font-bold text-gold sm:mt-3 sm:text-xl">
              Check price on Amazon
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
              {product.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-base font-bold text-background transition-colors hover:bg-gold-light sm:mt-8 sm:py-4 sm:text-lg"
            >
              Shop on Amazon
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <p className="mt-3 text-center text-[10px] text-muted sm:text-xs">
              As an Amazon Associate, we earn from qualifying purchases.
              Price and availability subject to change.
            </p>
            <p className="mt-4 text-center font-display text-[8px] italic tracking-[0.3em] text-border/50 select-none">
              because you got it like that
            </p>

            <AdSlot slot="product-sidebar" className="mt-6" />
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-10 sm:mt-16">
            <h2 className="mb-4 text-lg font-bold sm:mb-6 sm:text-xl">
              More <span className="text-gold">{product.category}</span> you&apos;ll love
            </h2>
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.id}`}
                  className="group overflow-hidden rounded-xl border border-border bg-surface transition-all hover:border-gold/40"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute right-2 top-2 rounded-full bg-black/70 px-2 py-0.5 text-xs font-bold text-gold backdrop-blur">
                      See Price
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gold">{p.brand}</p>
                    <h3 className="mt-0.5 text-sm font-bold leading-tight text-foreground group-hover:text-gold">
                      {p.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <AdSlot slot="product-bottom" className="mt-8" />
      </main>
      <Footer />
    </>
  );
}
