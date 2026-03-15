import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — BlowYourSavings",
  description: "About BlowYourSavings — a curated collection of the world's most luxurious items.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold">About BlowYourSavings</h1>
        <div className="space-y-6 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">What Is This?</h2>
            <p>
              BlowYourSavings is a curated collection of the most ridiculous, beautiful, and
              outrageously luxurious items money can buy. We scour the internet for high-end watches,
              supercars, cutting-edge tech, premium spirits, designer fashion, and everything in
              between — then present them in an addictive, endlessly scrollable feed designed to
              separate you from your money.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">How It Works</h2>
            <p>
              Browse by category, scroll endlessly, and click through to purchase anything that
              catches your eye. We include affiliate links to reputable retailers — when you buy
              something through our links, we earn a small commission at no extra cost to you. This
              helps us keep the lights on and continue curating the finest things in life.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Editorial Independence</h2>
            <p>
              Every product on BlowYourSavings is hand-picked by our team. We are not paid to
              feature any specific product — our selections are based purely on quality, desirability,
              and the &quot;wow&quot; factor. We feature items we genuinely think are worth your
              attention (and your savings).
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Contact</h2>
            <p>
              Questions, suggestions, or just want to show off what you bought?{" "}
              <a href="mailto:hello@blowyoursavings.com" className="text-gold hover:underline">
                hello@blowyoursavings.com
              </a>
            </p>
          </section>
          <p className="pt-6 font-display text-[8px] italic tracking-[0.3em] text-border/40 select-none">
            because you got it like that
          </p>
          <div className="pt-4">
            <Link href="/" className="text-sm font-semibold text-gold hover:underline">
              &larr; Back to browsing
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
