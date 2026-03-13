type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, light = false }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3 sm:space-y-4">
      <p className={light ? "eyebrow border-white/12 bg-white/10 text-white" : "eyebrow"}>{eyebrow}</p>
      <h2
        className={`font-display text-[1.9rem] font-semibold leading-tight tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <p className={`text-base leading-7 sm:text-lg sm:leading-8 ${light ? "text-white/70" : "text-slate"}`}>
        {description}
      </p>
    </div>
  );
}
