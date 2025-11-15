import { NavLink as MNavLink } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { ReactNode } from "react";
import { IconChevronRight } from "@tabler/icons-react";

export function NavBar() {
  return (
    <>
      <Nav
        to="/"
      >
        Home
      </Nav>
      <Nav
        to="/alphabet"
      >
        Alphabet
      </Nav>
      <Nav
        to="/russian-cases"
      >
        Russian Cases
      </Nav>
      <Nav
        to="/vocabulary"
      >
        Vocabulary
      </Nav>
      <Nav
        to="/motion-verbs"
      >
        Motion Verbs
      </Nav>
    </>
  )
}

type NavLinkProps = {
  to: string;
  children: ReactNode;
}

function Nav ({ to, children }: NavLinkProps) {
  return <MNavLink
      to={to}
      label={children}
      rightSection={<IconChevronRight size={16} stroke={1.6}/>}
      component={NavLink}
    />
}