export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className="h-6 w-6 sm:h-7 sm:w-7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="6" fill="#d4a853" />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontWeight="900"
          fontSize="18"
          fill="#0a0a0a"
        >
          B
        </text>
      </svg>
      <span className="font-display text-base font-black italic tracking-tight sm:text-lg">
        <span className="text-gold">Blow</span>
        <span className="text-foreground">Your</span>
        <span className="text-gold">Savings</span>
      </span>
    </div>
  );
}
