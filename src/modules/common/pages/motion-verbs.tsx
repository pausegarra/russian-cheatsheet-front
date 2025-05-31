import { Card, Grid, List, Stack, Table, Text, Title } from "@mantine/core";
import { Layout } from "../components/layout";

export default function MotionVerbs() {
  return (
    <Layout>
      <Stack gap="xl">
        <Title order={1}>Russian Motion Verbs</Title>

        <Text size="lg">
          Russian motion verbs are a huge headache — trust me.
          They change depending on direction, frequency, purpose, and whether you're walking or using transport.
          Below you'll find structured tables, common prefixes, examples, and typical mistakes to help you survive them.
        </Text>

        <Card shadow="sm" padding="lg" radius="md">
          <Stack gap="md">
            <Title order={2}>1. List of Basic Motion Verbs</Title>
            <Text>
              These verbs form the core. Most of them exist in a pair:
              unidirectional (once, toward a goal) and multidirectional (habitual or general movement).
            </Text>

            <List withPadding size="sm">
              <List.Item><strong>идти / ходить</strong> – to go (on foot)</List.Item>
              <List.Item><strong>ехать / ездить</strong> – to go (by transport)</List.Item>
              <List.Item><strong>бежать / бегать</strong> – to run</List.Item>
              <List.Item><strong>лететь / летать</strong> – to fly</List.Item>
              <List.Item><strong>плыть / плавать</strong> – to swim, to sail</List.Item>
              <List.Item><strong>ползти / ползать</strong> – to crawl</List.Item>
              <List.Item><strong>тащить / таскать</strong> – to drag, pull</List.Item>
              <List.Item><strong>нести / носить</strong> – to carry (by hand)</List.Item>
              <List.Item><strong>везти / возить</strong> – to carry (by vehicle)</List.Item>
              <List.Item><strong>гнать / гонять</strong> – to drive, chase</List.Item>
              <List.Item><strong>катить / катать</strong> – to roll</List.Item>
              <List.Item><strong>брести / бродить</strong> – to wander</List.Item>
            </List>
          </Stack>
        </Card>

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="lg" radius="md">
              <Stack gap="md">
                <Title order={2}>2. Base Verb Comparison</Title>

                <Table striped highlightOnHover withColumnBorders>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Verb</Table.Th>
                      <Table.Th>Type</Table.Th>
                      <Table.Th>Example</Table.Th>
                      <Table.Th>Translation</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Td>идти</Table.Td>
                      <Table.Td>Unidirectional (on foot)</Table.Td>
                      <Table.Td>Я иду в парк</Table.Td>
                      <Table.Td>I'm going to the park</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>ходить</Table.Td>
                      <Table.Td>Multidirectional (on foot)</Table.Td>
                      <Table.Td>Я хожу в парк по выходным</Table.Td>
                      <Table.Td>I go to the park on weekends</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>ехать</Table.Td>
                      <Table.Td>Unidirectional (by transport)</Table.Td>
                      <Table.Td>Я еду в Москву</Table.Td>
                      <Table.Td>I'm going to Moscow</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>ездить</Table.Td>
                      <Table.Td>Multidirectional (by transport)</Table.Td>
                      <Table.Td>Я езжу в Москву каждый месяц</Table.Td>
                      <Table.Td>I go to Moscow every month</Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
                </Table>
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="lg" radius="md">
              <Stack gap="md">
                <Title order={2}>3. Common Prefixes</Title>

                <Table striped highlightOnHover withColumnBorders>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Prefix</Table.Th>
                      <Table.Th>Meaning</Table.Th>
                      <Table.Th>Example</Table.Th>
                      <Table.Th>Translation</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Td>при-</Table.Td>
                      <Table.Td>arrival</Table.Td>
                      <Table.Td>приходить / прийти</Table.Td>
                      <Table.Td>to arrive</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>у-</Table.Td>
                      <Table.Td>departure</Table.Td>
                      <Table.Td>уходить / уйти</Table.Td>
                      <Table.Td>to leave</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>в-</Table.Td>
                      <Table.Td>entry</Table.Td>
                      <Table.Td>входить / войти</Table.Td>
                      <Table.Td>to enter</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>вы-</Table.Td>
                      <Table.Td>exit</Table.Td>
                      <Table.Td>выходить / выйти</Table.Td>
                      <Table.Td>to exit</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>до-</Table.Td>
                      <Table.Td>reach</Table.Td>
                      <Table.Td>доходить / дойти</Table.Td>
                      <Table.Td>to reach</Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
                </Table>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>

      </Stack>
    </Layout>
  );
}
