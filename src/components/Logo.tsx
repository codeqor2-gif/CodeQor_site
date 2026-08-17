export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="42" height="42" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a78bfa" />
            <stop offset="0.55" stopColor="#7c3aed" />
            <stop offset="1" stopColor="#d946ef" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="13" fill="url(#logoGrad)" />
        <circle cx="24" cy="15" r="4" fill="#fff" />
        <circle cx="13" cy="31" r="3" fill="#fff" opacity="0.85" />
        <circle cx="35" cy="31" r="3" fill="#fff" opacity="0.85" />
        <path d="M24 19v11M24 19L13.5 28M24 19l10.5 9M15.5 29.5h17" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="33" r="2.5" fill="#f0abfc" />
      </svg>
      {!compact && (
        <div className="leading-none">
          <p className="text-lg font-bold tracking-tight text-zinc-900">
            Net<span className="text-primary-600">Roots</span>
          </p>
          <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-500">
            Technologies
          </p>
        </div>
      )}
    </div>
  );
}
