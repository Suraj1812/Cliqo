type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, light = false }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className={light ? "eyebrow border-white/12 bg-white/10 text-white" : "eyebrow"}>{eyebrow}</p>
      <h2 className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      <p className={`text-lg leading-8 ${light ? "text-white/70" : "text-slate"}`}>{description}</p>
    </div>
  );
}
