import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-1">
              <span className="text-lg font-black text-gold">BLOW</span>
              <span className="text-lg font-black text-foreground">YOUR</span>
              <span className="text-lg font-black text-gold">SAVINGS</span>
            </Link>
            <p className="mt-2 text-xs text-muted">
              Luxury items you didn&apos;t know you needed. Curated for expensive taste.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Categories
            </h4>
            <div className="space-y-1">
              {["Watches", "Tech & Gadgets", "Supercars", "Fashion", "Home & Design"].map((cat) => (
                <Link
                  key={cat}
                  href="/"
                  className="block text-sm text-muted hover:text-gold"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              More
            </h4>
            <div className="space-y-1">
              {["Audio", "Outdoors", "Spirits & Wine", "Toys & Collectibles"].map((cat) => (
                <Link
                  key={cat}
                  href="/"
                  className="block text-sm text-muted hover:text-gold"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Legal
            </h4>
            <div className="space-y-1">
              <Link href="/about" className="block text-sm text-muted hover:text-gold">About</Link>
              <Link href="/privacy" className="block text-sm text-muted hover:text-gold">Privacy Policy</Link>
              <Link href="/terms" className="block text-sm text-muted hover:text-gold">Terms of Service</Link>
              <Link href="/disclaimer" className="block text-sm text-muted hover:text-gold">Disclaimer</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted">
          <p>
            &copy; {new Date().getFullYear()} BlowYourSavings.com. All product names, logos, and
            brands are property of their respective owners.
          </p>
          <p className="mt-1">
            As an affiliate, we may earn from qualifying purchases. See our{" "}
            <Link href="/disclaimer" className="text-gold hover:underline">disclaimer</Link> for details.
          </p>
        </div>
      </div>
    </footer>
  );
}
