import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";
import { NavBar } from "./nav-bar.tsx";
import { SiteFooter } from "./site-footer.tsx";
import classes from "./layout.module.css";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <AppShell
        header={{ height: 50 }}
        navbar={{
          width: 240,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
      >
        <AppShell.Header className={classes.header}>
          <Group gap="sm">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              aria-label="Toggle navigation"
            />
            <Link to="/" className={classes.brand}>
              <img src="/logo.svg" alt="Russian Cheatsheet" width={112} height={40} />
            </Link>
          </Group>
          <div className={classes.statusBadge}>
            LEXICON v1.1
          </div>
        </AppShell.Header>

        <AppShell.Navbar className={classes.navbar}>
          <NavBar onNavigate={() => opened && toggle()} />
        </AppShell.Navbar>

        <AppShell.Main className={classes.main}>
          <div id="main-content" className={classes.mainContent}>
            {children}
          </div>
          <SiteFooter />
        </AppShell.Main>
      </AppShell>
    </>
  );
}
