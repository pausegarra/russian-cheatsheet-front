import { Button, Center, Stack, Text, Title } from "@mantine/core";
import { FallbackProps } from "react-error-boundary";
import { Link } from "react-router-dom";

export function ErrorFallback({error}: FallbackProps) {
  return (
    <Center h="100vh">
      <Stack align={"center"}>
        <Title order={2}>Something went wrong</Title>
        <Text c="red" ta="center">
          {JSON.stringify(error)}
        </Text>
        <Button variant="light" color="red" component={Link} to={"/"}>
          Go to home
        </Button>
      </Stack>
    </Center>
  )
}