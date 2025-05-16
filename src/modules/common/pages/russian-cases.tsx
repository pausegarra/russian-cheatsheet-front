import { Card, Divider, List, Stack, Table, Text, Title } from '@mantine/core';
import { Layout } from "../components/layout.tsx";

export default function RussianCasesWithEndings() {
  return (
    <Layout>
      <Stack gap="xl">
        <Title order={1}>Russian Cases — Simplified</Title>

        <Text size="lg">
          Russian grammar uses cases to indicate the role a word plays in a sentence.
          This cheat sheet explains their purpose, typical endings, and examples.
        </Text>

        <Card shadow="md" padding="lg" radius="md">
          <Stack gap="md">

            {/* Nominative */}
            <Title order={2}>Nominative — Who? What?</Title>
            <Text><em>Used to mean “Who? What?”</em></Text>
            <List withPadding>
              <List.Item>to name an object</List.Item>
              <List.Item>to indicate a subject of an action</List.Item>
            </List>
            <Text><strong>Example:</strong> Это студент. (This is a student.)</Text>
            <Table striped highlightOnHover>
              <thead><tr><th>Gender</th><th>Ending</th></tr></thead>
              <tbody>
              <tr><td>Masculine</td><td>–</td></tr>
              <tr><td>Feminine</td><td>–а / –я</td></tr>
              <tr><td>Neuter</td><td>–о / –е</td></tr>
              <tr><td>Plural</td><td>–ы / –и</td></tr>
              </tbody>
            </Table>

            <Divider />

            {/* Genitive */}
            <Title order={2}>Genitive — Whose? Of what?</Title>
            <Text><em>Used to express possession, absence, and quantity.</em></Text>
            <List withPadding>
              <List.Item>possession (with nouns)</List.Item>
              <List.Item>absence of something (with negation)</List.Item>
              <List.Item>part of a whole</List.Item>
              <List.Item>used after numbers (2, 3, 4 → singular; 5+ → plural)</List.Item>
              <List.Item>used with prepositions (из, до, около, после, без...)</List.Item>
            </List>
            <Text><strong>Example:</strong> У меня нет книги. (I don’t have a book.)</Text>
            <Table striped highlightOnHover>
              <thead><tr><th>Gender</th><th>Ending</th></tr></thead>
              <tbody>
              <tr><td>Masculine</td><td>–а / –я</td></tr>
              <tr><td>Feminine</td><td>–ы / –и</td></tr>
              <tr><td>Neuter</td><td>–а / –я</td></tr>
              <tr><td>Plural</td><td>–ов / –ей / –</td></tr>
              </tbody>
            </Table>

            <Divider />

            {/* Dative */}
            <Title order={2}>Dative — To whom? To what?</Title>
            <Text><em>Used to indicate the indirect object or the destination of motion.</em></Text>
            <List withPadding>
              <List.Item>to indicate an object of an action (e.g. дать, сказать, позвонить)</List.Item>
              <List.Item>to show the aim of motion (with verbs + к, по)</List.Item>
            </List>
            <Text><strong>Example:</strong> Скажи студенту. (Tell the student.)</Text>
            <Table striped highlightOnHover>
              <thead><tr><th>Gender</th><th>Ending</th></tr></thead>
              <tbody>
              <tr><td>Masculine</td><td>–у / –ю</td></tr>
              <tr><td>Feminine</td><td>–е</td></tr>
              <tr><td>Neuter</td><td>–у / –ю</td></tr>
              <tr><td>Plural</td><td>–ам</td></tr>
              </tbody>
            </Table>

            <Divider />

            {/* Accusative */}
            <Title order={2}>Accusative — Whom? What?</Title>
            <Text><em>Used for direct objects and direction of motion.</em></Text>
            <List withPadding>
              <List.Item>to show the object of an action</List.Item>
              <List.Item>to show the point of destination (в, на + verbs of motion)</List.Item>
            </List>
            <Text><strong>Example:</strong> Я пью чай. (I am drinking tea.)</Text>
            <Table striped highlightOnHover>
              <thead><tr><th>Gender</th><th>Ending</th></tr></thead>
              <tbody>
              <tr><td>Masculine (Animate)</td><td>Like Genitive</td></tr>
              <tr><td>Masculine (Inanimate)</td><td>Like Nominative</td></tr>
              <tr><td>Feminine</td><td>–у / –ю</td></tr>
              <tr><td>Neuter</td><td>Like Nominative</td></tr>
              <tr><td>Plural (Animate)</td><td>Like Genitive Plural</td></tr>
              </tbody>
            </Table>

            <Divider />

            {/* Instrumental */}
            <Title order={2}>Instrumental — With whom? With what?</Title>
            <Text><em>Used to indicate tools, means, or companions of action.</em></Text>
            <List withPadding>
              <List.Item>to express the instrument or agent of an action</List.Item>
              <List.Item>with the preposition с = with</List.Item>
              <List.Item>to show approximate place (под, над, перед, рядом с)</List.Item>
              <List.Item>to express a time period (e.g. утром, зимой)</List.Item>
            </List>
            <Text><strong>Example:</strong> Я пишу ручкой. (I write with a pen.)</Text>
            <Table striped highlightOnHover>
              <thead><tr><th>Gender</th><th>Ending</th></tr></thead>
              <tbody>
              <tr><td>Masculine</td><td>–ом / –ем</td></tr>
              <tr><td>Feminine</td><td>–ой / –ей</td></tr>
              <tr><td>Neuter</td><td>–ом / –ем</td></tr>
              <tr><td>Plural</td><td>–ами</td></tr>
              </tbody>
            </Table>

            <Divider />

            {/* Prepositional */}
            <Title order={2}>Prepositional — About whom? About what?</Title>
            <Text><em>Used to indicate location, time, or topic (with в, на, о).</em></Text>
            <List withPadding>
              <List.Item>to express place or position (в, на)</List.Item>
              <List.Item>to express time (e.g. в январе, на неделе)</List.Item>
              <List.Item>to show topic of thought/conversation (о брате)</List.Item>
            </List>
            <Text><strong>Example:</strong> Думаю о брате. (I am thinking about my brother.)</Text>
            <Table striped highlightOnHover>
              <thead><tr><th>Gender</th><th>Ending</th></tr></thead>
              <tbody>
              <tr><td>Masculine</td><td>–е</td></tr>
              <tr><td>Feminine</td><td>–е</td></tr>
              <tr><td>Neuter</td><td>–е</td></tr>
              <tr><td>Plural</td><td>–ах / –ях</td></tr>
              </tbody>
            </Table>
          </Stack>
        </Card>

        <Text size="sm" c="dimmed" mt="xl">
          Memorizing all this might seem overwhelming, but once it clicks, Russian becomes beautifully logical. Успехов, мой повелитель!
        </Text>
      </Stack>
    </Layout>
  );
}
