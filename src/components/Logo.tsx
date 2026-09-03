export default function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0756a8" />
            <stop offset="0.55" stopColor="#0a6fd0" />
            <stop offset="1" stopColor="#054486" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="13" fill="url(#logoGrad)" />
        <circle cx="24" cy="15" r="4" fill="#fff" />
        <circle cx="13" cy="31" r="3" fill="#fff" opacity="0.85" />
        <circle cx="35" cy="31" r="3" fill="#fff" opacity="0.85" />
        <path d="M24 19v11M24 19L13.5 28M24 19l10.5 9M15.5 29.5h17" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="33" r="2.5" fill="#b2ebf2" />
      </svg>
      {!compact && (
        <div className="leading-none">
          <p className={`text-lg font-bold tracking-tight ${light ? "text-white" : "text-zinc-900"}`}>
            Code<span className={light ? "text-[#8BD4FA]" : "text-[#35A6EF]"}>Qor</span>
          </p>
          <p className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.3em] ${light ? "text-white/70" : "text-primary-600"}`}>
            Technologies
          </p>
        </div>
      )}
    </div>
  );
}