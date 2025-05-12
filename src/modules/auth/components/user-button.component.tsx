import { Avatar, Button, Group, Menu, Text } from "@mantine/core";
import { AuthContext } from "../contexts/auth.provider";
import { useContext } from "react";
import { IconChevronDown, IconLogout } from "@tabler/icons-react";
import { authService } from "../root.ts";

export function UserButton() {
  const user = useContext(AuthContext);

  if (user === null) {
    return null;
  }

  return (
    <Menu shadow="md" width={200} position="bottom-end">
      <Menu.Target>
        <Button variant="subtle" color="gray" rightSection={<IconChevronDown size={14} />}>
          <Group gap="xs">
            <Avatar radius="xl" size="sm" />
            <Text size="sm">{user?.user.fullName}</Text>
          </Group>
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={<IconLogout size={14} />}
          onClick={() => authService.logout()}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}