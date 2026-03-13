import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <a
        href="#main-content"
        className="sr-only absolute left-4 top-4 z-[60] rounded-full bg-deep px-4 py-2 text-sm font-semibold text-sand focus:not-sr-only"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}
