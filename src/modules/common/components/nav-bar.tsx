import { NavLink } from "react-router-dom";
import { ReactNode } from "react";
import classes from "./layout.module.css";

type Props = {
  onNavigate?: () => void;
};

export function NavBar({ onNavigate }: Props) {
  return (
    <>
      <div className={classes.categoryTitle}>Reference</div>
      <NavItem to="/" badge="01" onNavigate={onNavigate}>Home</NavItem>
      <NavItem to="/alphabet" badge="02" onNavigate={onNavigate}>Alphabet</NavItem>

      <div className={classes.categoryTitle}>Lexicon</div>
      <NavItem to="/vocabulary" badge="03" onNavigate={onNavigate}>Vocabulary</NavItem>

      <div className={classes.categoryTitle}>Grammar</div>
      <NavItem to="/grammar" badge="04" end onNavigate={onNavigate}>Overview</NavItem>
      <NavItem to="/grammar/cases" badge="05" onNavigate={onNavigate}>Cases</NavItem>
      <NavItem to="/grammar/declensions" badge="06" onNavigate={onNavigate}>Declensions</NavItem>
      <NavItem to="/grammar/pronouns" badge="07" onNavigate={onNavigate}>Pronouns</NavItem>
      <NavItem to="/grammar/numbers" badge="08" onNavigate={onNavigate}>Numbers</NavItem>
      <NavItem to="/grammar/verbs" badge="09" onNavigate={onNavigate}>Verbs</NavItem>
      <NavItem to="/grammar/motion-verbs" badge="10" onNavigate={onNavigate}>Motion verbs</NavItem>
    </>
  );
}

type NavItemProps = {
  to: string;
  badge: string;
  children: ReactNode;
  end?: boolean;
  onNavigate?: () => void;
};

function NavItem({ to, badge, children, end, onNavigate }: NavItemProps) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      className={({ isActive }) =>
        `${classes.navLink} ${isActive ? classes.navLinkActive : ''}`
      }
    >
      <span>{children}</span>
      <span className={classes.navBadge}>{badge}</span>
    </NavLink>
  );
}
