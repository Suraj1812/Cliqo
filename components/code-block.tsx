type CodeBlockProps = {
  title: string;
  language: string;
  code: string;
};

export function CodeBlock({ title, language, code }: CodeBlockProps) {
  return (
    <div className="card-lift overflow-hidden rounded-[2rem] border border-deep/10 bg-[#07211f] text-sm text-[#d5f0ea] shadow-panel">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <p className="font-semibold text-white">{title}</p>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/70">
          {language}
        </span>
      </div>
      <pre className="overflow-x-auto p-5 leading-7">
        <code>{code}</code>
      </pre>
    </div>
  );
}
