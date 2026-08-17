import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  center = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`${center ? "text-center" : ""} max-w-3xl ${center ? "mx-auto" : ""} mb-12 ${className}`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl md:text-[2.6rem]">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">{subtitle}</p>
      )}
    </Reveal>
  );
}
