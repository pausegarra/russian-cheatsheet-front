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

      <div className={classes.categoryTitle}>Grammar</div>
      <NavItem to="/russian-cases" badge="03" onNavigate={onNavigate}>Russian Cases</NavItem>
      <NavItem to="/motion-verbs" badge="04" onNavigate={onNavigate}>Motion Verbs</NavItem>

      <div className={classes.categoryTitle}>Lexicon</div>
      <NavItem to="/vocabulary" badge="05" onNavigate={onNavigate}>Vocabulary</NavItem>
    </>
  );
}

type NavItemProps = {
  to: string;
  badge: string;
  children: ReactNode;
  onNavigate?: () => void;
};

function NavItem({ to, badge, children, onNavigate }: NavItemProps) {
  return (
    <NavLink
      to={to}
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