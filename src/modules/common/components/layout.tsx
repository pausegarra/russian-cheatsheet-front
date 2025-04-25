import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";
import { NavBar } from "./nav-bar.tsx";

type props = {
  children: ReactNode;
}

export function Layout({children}: props) {
  const [opened, {toggle}] = useDisclosure();

  return (
    <AppShell
      header={{height: 60}}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: {mobile: !opened},
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <div className={"logo"}>
          <img src="logo.svg" alt="logo" width={120}/>
        </div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavBar/>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}