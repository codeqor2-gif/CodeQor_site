import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  headingClassName?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  center = false,
  className = "",
  headingClassName = "",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`${center ? "text-center" : ""} max-w-3xl ${center ? "mx-auto" : ""} mb-8 ${className}`}
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-600">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-2xl font-bold leading-snug text-zinc-900 sm:text-3xl ${headingClassName}`}>
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">{subtitle}</p>
      )}
    </Reveal>
  );
}
