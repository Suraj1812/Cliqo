import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[65vh] w-full max-w-7xl items-center px-6 py-20 lg:px-8">
      <div className="panel w-full p-10 lg:p-14">
        <p className="eyebrow">404</p>
        <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
          This page drifted off the workflow.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">
          The link may be outdated or the page may have moved. The main Cliqo pages below will get you back to the
          live site structure quickly.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="rounded-full bg-deep px-6 py-3 font-semibold text-sand transition hover:-translate-y-0.5">
            Return home
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-deep/15 bg-white/75 px-6 py-3 font-semibold text-ink transition hover:border-deep/30 hover:bg-white"
          >
            Request demo
          </Link>
        </div>
      </div>
    </section>
  );
}
