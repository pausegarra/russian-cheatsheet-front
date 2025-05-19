import { Card, Grid, List, Stack, Table, Text, Title } from "@mantine/core";
import { Layout } from "../components/layout";

export default function MotionVerbs() {
  return (
    <Layout>
      <Stack gap="xl">
        <Title order={1}>Russian Motion Verbs</Title>

        <Text size="lg">
          Russian motion verbs change depending on direction, frequency, and
          means of travel. Below you'll find their types, prefixes, examples,
          and common pitfalls.
        </Text>

        <Card shadow="sm" padding="lg" radius="md">
          <Stack gap="md">
            <Title order={2}>1. Full List of Base Motion Verbs</Title>
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

        <Card shadow="sm" padding="lg" radius="md">
          <Stack gap="md">
            <Title order={2}>4. Common Pitfalls</Title>

            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <List spacing="sm" size="sm" withPadding>
                  <List.Item>
                    <Text>
                      ❌ <strong>Я иду в школу каждый день</strong>
                      <br />"I go to school every day"
                      <br />
                      ✅ <strong>Я хожу в школу каждый день</strong>
                      <br />"I go to school every day"
                      <br />
                      → Use <i>ходить</i> (multidirectional) for repeated actions.
                    </Text>
                  </List.Item>

                  <List.Item>
                    <Text>
                      ❌ <strong>Я ходил в кино вчера</strong>
                      <br />"I went to the cinema yesterday" (incorrect aspect)
                      <br />
                      ✅ <strong>Я сходил в кино вчера</strong>
                      <br />"I went to the cinema yesterday" (completed action)
                      <br />
                      → Use perfective form (e.g., <i>сходил</i>) for one-time completed actions.
                    </Text>
                  </List.Item>

                  <List.Item>
                    <Text>
                      ❌ <strong>Я могу идти туда на автобусе</strong>
                      <br />"I can go there by bus"
                      <br />
                      ✅ <strong>Я могу поехать туда на автобусе</strong>
                      <br />"I can go there by bus"
                      <br />
                      → Use <i>ехать</i> or <i>поехать</i> for transport, not <i>идти</i>.
                    </Text>
                  </List.Item>
                </List>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <List spacing="sm" size="sm" withPadding>
                  <List.Item>
                    <Text>
                      ❌ <strong>Он пришёл в офис и потом ушёл домой</strong>
                      <br />"He arrived at the office and then left for home"
                      <br />
                      ✅ <strong>Он сначала пришёл в офис, а потом ушёл домой</strong>
                      <br />"He first came to the office, and then left for home"
                      <br />
                      → Clarify sequence when using multiple motion verbs.
                    </Text>
                  </List.Item>

                  <List.Item>
                    <Text>
                      ❌ <strong>Мы едем в лес и обратно каждый день</strong>
                      <br />"We go to the forest and back every day"
                      <br />
                      ✅ <strong>Мы ездим в лес и обратно каждый день</strong>
                      <br />"We go to the forest and back every day"
                      <br />
                      → Use <i>ездим</i> (multidirectional) for habitual round-trips.
                    </Text>
                  </List.Item>

                  <List.Item>
                    <Text>
                      ❌ <strong>Я ушёл в магазин</strong> (while still at home)
                      <br />"I left for the store" (but you haven’t yet)
                      <br />
                      ✅ <strong>Я собираюсь уйти в магазин</strong>
                      <br />"I'm about to leave for the store"
                      <br />
                      → Don’t use perfective past unless the action is completed.
                    </Text>
                  </List.Item>
                </List>
              </Grid.Col>
            </Grid>
          </Stack>
        </Card>


      </Stack>
    </Layout>
  );
}
