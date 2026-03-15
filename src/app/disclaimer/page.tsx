import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Disclaimer — BlowYourSavings",
  description: "Affiliate disclosure and disclaimers for BlowYourSavings.com.",
};

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold">Disclaimer &amp; Affiliate Disclosure</h1>
        <div className="space-y-6 text-sm leading-relaxed text-muted">
          <p className="text-xs">Last updated: March 15, 2026</p>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Affiliate Disclosure</h2>
            <p>
              BlowYourSavings.com is a participant in various affiliate advertising programs,
              including the Amazon Services LLC Associates Program, designed to provide a means for
              sites to earn advertising fees by advertising and linking to retailers. When you click
              on product links and make a purchase, we may receive a small commission at no
              additional cost to you.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Editorial Independence</h2>
            <p>
              All products featured on BlowYourSavings are selected by our editorial team based on
              quality, desirability, and relevance. No brand or retailer can pay to be featured.
              Affiliate relationships do not influence our product selections or descriptions.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Pricing &amp; Availability</h2>
            <p>
              Product prices and availability are subject to change. Prices displayed on
              BlowYourSavings are approximate and may not reflect the current price at the time of
              purchase. Always verify pricing on the retailer&apos;s website before completing a
              purchase.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">No Financial Advice</h2>
            <p>
              Despite the name, BlowYourSavings does not provide financial advice. Product features
              are for entertainment and informational purposes. Please make purchasing decisions
              responsibly and within your means.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Display Advertising</h2>
            <p>
              We use Google AdSense and similar advertising networks to display ads on our site.
              These networks may use cookies to serve personalized ads based on your browsing
              history. You can learn more about opting out through{" "}
              <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                the DAA opt-out page
              </a>.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Trademarks</h2>
            <p>
              All product names, logos, and brands mentioned on BlowYourSavings are property of
              their respective owners. Use of these names does not imply endorsement or affiliation.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Contact</h2>
            <p>
              Questions about this disclosure? Email{" "}
              <a href="mailto:hello@blowyoursavings.com" className="text-gold hover:underline">
                hello@blowyoursavings.com
              </a>.
            </p>
          </section>

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
