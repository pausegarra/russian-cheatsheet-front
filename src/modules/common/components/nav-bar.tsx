import { NavLink, useLocation } from "react-router-dom";

export function NavBar() {
  const { pathname } = useLocation();
  return (
    <nav
      aria-label="Main navigation"
      className="flex items-center gap-1 sm:gap-2"
    >
      {[
        ["/", "Dictionary"],
        ["/alphabet", "Alphabet"],
        ["/grammar", "Grammar"],
      ].map(([to, label]) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          state={{ fromApp: true }}
          className={({ isActive }) =>
            `rounded-lg px-3 py-2 text-sm ${isActive || (to === "/" && pathname.startsWith("/vocabulary/")) ? "bg-raised text-sage" : "text-muted hover:text-ink hover:bg-surface"}`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
