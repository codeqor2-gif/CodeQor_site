export default function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <div
      className={`${compact ? "h-9 w-9" : "h-10 w-36"} relative overflow-hidden bg-white ${
        light ? "rounded-md p-0.5" : ""
      }`}
    >
      <img
        src="/CodeQorLogo-transparent-600.png"
        alt="CodeQor Technologies"
        width={compact ? 144 : 144}
        height={compact ? 72 : 72}
        className={`absolute max-w-none ${compact ? "-left-[61px] -top-[22px]" : "left-0 -top-4"}`}
      />
    </div>
  );
}
