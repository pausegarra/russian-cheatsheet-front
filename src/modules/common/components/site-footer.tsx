import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 sm:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-8 text-xs text-faint">
        <p>Made for the moments between lessons.</p>
        <div className="flex flex-wrap gap-4">
          <Link to="/">Russian Cheatsheet</Link>
          <a
            className="hover:text-sage"
            href="https://en.openrussian.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dictionary data: OpenRussian ↗
          </a>
          <span>By pausegarra</span>
        </div>
      </div>
    </footer>
  );
}
