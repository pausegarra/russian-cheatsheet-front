import { useEffect } from "react";
import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBar } from "./nav-bar.tsx";
import { SiteFooter } from "./site-footer.tsx";
import { BackButton } from "./back-button.tsx";

type Props = { children: ReactNode; backTo?: string };

export function Layout({ children, backTo }: Props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const titles: Record<string, string> = {
      "/": "Your pocket reference",
      "/alphabet": "The Cyrillic alphabet",
      "/grammar": "Grammar quick references",
      "/grammar/cases": "Russian grammatical cases",
      "/grammar/declensions": "Declensions",
      "/grammar/pronouns": "Pronouns",
      "/grammar/numbers": "Numbers, dates and time",
      "/grammar/verbs": "Verb quick reference",
      "/grammar/motion-verbs": "Verbs of motion",
    };
    document.title = `${titles[pathname] ?? (pathname.startsWith("/vocabulary/") ? "Dictionary entry" : "Page not found")} · Russian Cheatsheet`;
  }, [pathname]);
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line py-6 sm:py-8">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Russian Cheatsheet home"
          >
            <img
              src="/brand/mark.png"
              width="40"
              height="40"
              alt=""
              className="rounded-lg"
            />
            <span className="text-sm font-semibold leading-5">
              Russian
              <br />
              <span className="font-normal text-muted">Cheatsheet</span>
            </span>
          </Link>
          <NavBar />
        </div>
      </header>
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto w-full max-w-6xl flex-1 px-6 pt-8 pb-16 outline-none sm:px-8 sm:pt-12 sm:pb-24"
      >
        {backTo && (
          <div className="mb-8">
            <BackButton fallbackTo={backTo} />
          </div>
        )}
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
