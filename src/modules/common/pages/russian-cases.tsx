import { Container, Title, Text, Card, Stack, Table, Divider } from '@mantine/core';

export default function RussianCasesWithEndings() {
  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Title order={1}>
          Russian Cases For Dummies
        </Title>

        <Text size="lg">
          In Russian, words change depending on what they are doing in the sentence.
          Below you will find simple explanations, examples, and ending cheat tables.
        </Text>

        <Card shadow="md" padding="lg" radius="md" >
          <Stack gap="md">
            <Title order={2}>Nominative Case — "Who? What?"</Title>
            <Text>
              This is the basic form. Subject of the sentence.
              <br />
              <strong>Example:</strong> Кошка спит. (The cat sleeps.)
            </Text>

            <Table striped highlightOnHover >
              <thead>
              <tr>
                <th>Gender</th>
                <th>Ending</th>
              </tr>
              </thead>
              <tbody>
              <tr><td>Masculine</td><td>–</td></tr>
              <tr><td>Feminine</td><td>–а / –я</td></tr>
              <tr><td>Neuter</td><td>–о / –е</td></tr>
              <tr><td>Plural</td><td>–ы / –и</td></tr>
              </tbody>
            </Table>

            <Divider />

            <Title order={2}>Accusative Case — "Whom? What?"</Title>
            <Text>
              Used for direct objects (the thing being acted on).
              <br />
              <strong>Example:</strong> Я вижу кошку. (I see the cat.)
            </Text>

            <Table striped highlightOnHover >
              <thead>
              <tr>
                <th>Gender</th>
                <th>Ending</th>
              </tr>
              </thead>
              <tbody>
              <tr><td>Masculine (Animate)</td><td>Like Genitive</td></tr>
              <tr><td>Masculine (Inanimate)</td><td>Like Nominative</td></tr>
              <tr><td>Feminine</td><td>–у / –ю</td></tr>
              <tr><td>Neuter</td><td>Like Nominative</td></tr>
              <tr><td>Plural (Animate)</td><td>Like Genitive Plural</td></tr>
              </tbody>
            </Table>

            <Divider />

            <Title order={2}>Genitive Case — "Of whom? Of what?"</Title>
            <Text>
              Shows possession or absence.
              <br />
              <strong>Example:</strong> Хвост кошки пушистый. (The cat’s tail is fluffy.)
            </Text>

            <Table striped highlightOnHover >
              <thead>
              <tr>
                <th>Gender</th>
                <th>Ending</th>
              </tr>
              </thead>
              <tbody>
              <tr><td>Masculine</td><td>–а / –я</td></tr>
              <tr><td>Feminine</td><td>–ы / –и</td></tr>
              <tr><td>Neuter</td><td>–а / –я</td></tr>
              <tr><td>Plural</td><td>–ов / –ей / –</td></tr>
              </tbody>
            </Table>

            <Divider />

            <Title order={2}>Dative Case — "To whom? To what?"</Title>
            <Text>
              Indicates the receiver of an action.
              <br />
              <strong>Example:</strong> Я даю молоко кошке. (I give milk to the cat.)
            </Text>

            <Table striped highlightOnHover>
              <thead>
              <tr>
                <th>Gender</th>
                <th>Ending</th>
              </tr>
              </thead>
              <tbody>
              <tr><td>Masculine</td><td>–у / –ю</td></tr>
              <tr><td>Feminine</td><td>–е</td></tr>
              <tr><td>Neuter</td><td>–у / –ю</td></tr>
              <tr><td>Plural</td><td>–ам</td></tr>
              </tbody>
            </Table>

            <Divider />

            <Title order={2}>Instrumental Case — "With whom? With what?"</Title>
            <Text>
              Describes the tool or means of doing something.
              <br />
              <strong>Example:</strong> Я пишу ручкой. (I write with a pen.)
            </Text>

            <Table striped highlightOnHover>
              <thead>
              <tr>
                <th>Gender</th>
                <th>Ending</th>
              </tr>
              </thead>
              <tbody>
              <tr><td>Masculine</td><td>–ом / –ем</td></tr>
              <tr><td>Feminine</td><td>–ой / –ей</td></tr>
              <tr><td>Neuter</td><td>–ом / –ем</td></tr>
              <tr><td>Plural</td><td>–ами</td></tr>
              </tbody>
            </Table>

            <Divider />

            <Title order={2}>Prepositional Case — "About whom? About what?"</Title>
            <Text>
              Used after certain prepositions (like "in", "on", "about").
              <br />
              <strong>Example:</strong> Я думаю о кошке. (I am thinking about the cat.)
            </Text>

            <Table striped highlightOnHover >
              <thead>
              <tr>
                <th>Gender</th>
                <th>Ending</th>
              </tr>
              </thead>
              <tbody>
              <tr><td>Masculine</td><td>–е</td></tr>
              <tr><td>Feminine</td><td>–е</td></tr>
              <tr><td>Neuter</td><td>–е</td></tr>
              <tr><td>Plural</td><td>–ах</td></tr>
              </tbody>
            </Table>
          </Stack>
        </Card>

        <Text size="sm" c="dimmed" mt="xl">
          Remember: learning Russian cases is like learning to juggle hats. 🎩 It’s confusing at first, but you get better with practice!
        </Text>
      </Stack>
    </Container>
  );
}
