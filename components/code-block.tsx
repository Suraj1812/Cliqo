type CodeBlockProps = {
  title: string;
  language: string;
  code: string;
};

export function CodeBlock({ title, language, code }: CodeBlockProps) {
  return (
    <div className="card-lift equal-card min-w-0 overflow-hidden rounded-[1.6rem] border border-deep/10 bg-[#07211f] text-[#d5f0ea] shadow-panel sm:rounded-[2rem]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5 sm:py-4">
        <p className="font-semibold text-sm text-white sm:text-base">{title}</p>
        <span className="rounded-full bg-white/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.22em] text-white/70 sm:text-xs sm:tracking-[0.28em]">
          {language}
        </span>
      </div>
      <pre className="overflow-x-auto px-4 pb-5 pt-4 text-[0.72rem] leading-6 sm:p-5 sm:text-sm sm:leading-7">
        <code className="font-mono whitespace-pre-wrap break-words sm:whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}
