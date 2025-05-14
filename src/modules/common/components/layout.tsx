import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";
import { NavBar } from "./nav-bar.tsx";
import { UserButton } from "../../auth/components/user-button.component.tsx";

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
        <Group h="100%" px="md" justify="space-between">
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />
          <div className="logo">
            <img src="/logo.svg" alt="logo" width={120} />
          </div>
          <UserButton/>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavBar/>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}