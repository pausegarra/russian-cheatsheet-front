import {
  Button,
  Card,
  Container,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export function Presentation() {
  return (
    <Container size="md" py="xl">
      <Stack align="center" gap="xl">
        <img src="logo.svg" alt="logo" width={350}/>
        <Title order={1}>
          Welcome to Russian Cheatsheet
        </Title>
        <Text size="lg">
          Your personal companion to mastering the Russian language.
          This cheatsheet is crafted to support my journey in learning Russian,
          and perhaps it will help others too!
        </Text>
        <Card shadow="md" padding="lg" radius="md" withBorder>
          <Stack>
            <Text size="md">
              📚 Quickly reference essential grammar rules, vocabulary,
              and common expressions.
            </Text>
            <Text size="md">
              🚀 Speed up your study sessions with structured, easy-to-access content.
            </Text>
            <Text size="md">
              🎯 Focus on what's important without getting lost in endless textbooks.
            </Text>
            <Button variant="light" fullWidth mt="md">
              Start Learning
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Container>
  )
}