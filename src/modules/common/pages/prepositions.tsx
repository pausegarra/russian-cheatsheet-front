import { Layout } from "../components/layout.tsx";
import { Accordion, Text, Title } from "@mantine/core";
import { prepositions } from "../data/prepositions.ts";

export function Prepositions() {
  return (
    <Layout>
      <Title order={1}>Prepositions</Title>

      <Accordion>
        {prepositions.map(prep => (
          <Accordion.Item value={prep.preposition} key={prep.preposition}>
            <Accordion.Control>
              <Title order={2}>{prep.preposition}</Title>
            </Accordion.Control>
            <Accordion.Panel>
              <Title order={3}>Meaning:</Title>
              <Text size={"md"} mb={10} style={{whiteSpace: "pre-wrap"}}>
                {prep.meaning}
              </Text>

              <Title order={3}>Usage:</Title>
              <Text size={"md"} mb={10} style={{whiteSpace: "pre-wrap"}}>
                {prep.usage}
              </Text>

              {prep.keyRule && prep.keyRule !== "" && (
                <>
                  <Title order={3}>Key rule:</Title>
                  <Text style={{whiteSpace: "pre-wrap"}} size={"md"} mb={10}>
                    {prep.keyRule}
                  </Text>
                </>
              )}

              <Title order={3}>Examples:</Title>
              <Text size={"md"} mb={10} style={{whiteSpace: "pre-wrap"}}>
                {prep.examples}
              </Text>

              {prep.specialNote && prep.specialNote !== "" && (
                <>
                  <Title order={3}>Special note:</Title>
                  <Text size={"md"} mb={10} style={{whiteSpace: "pre-wrap"}}>
                    {prep.specialNote}
                  </Text>
                </>
              )}

              <Title order={3}>Real life situations:</Title>
              <Text size={"md"} mb={10} style={{whiteSpace: "pre-wrap"}}>
                {prep.realLifeSituations}
              </Text>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Layout>
  )
}