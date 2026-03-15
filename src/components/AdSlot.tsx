"use client";

export default function AdSlot({
  slot,
  className = "",
}: {
  slot: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border border-dashed border-border bg-surface/50 text-xs text-muted ${className}`}
      data-ad-slot={slot}
    >
      {/* Replace with AdSense code:
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXX"
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true" />
      */}
      <span className="py-4 opacity-40">Ad Space</span>
    </div>
  );
}
