import { UseFormReturnType } from "@mantine/form";
import { WordEntity } from "../entities/word.entity.ts";
import { Table, TextInput } from "@mantine/core";

type props = {
  form: UseFormReturnType<WordEntity>;
}

export function CasesForm({form}: props) {
  return (
    <>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Case</Table.Th>
            <Table.Th>Value</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td><strong>Nominative</strong></Table.Td>
            <Table.Td>
              <TextInput
                {...form.getInputProps('cases.nominative')}
                size={"xs"}
              />
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><strong>Genitive</strong></Table.Td>
            <Table.Td><TextInput {...form.getInputProps('cases.genitive')} size={"xs"}/></Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><strong>Dative</strong></Table.Td>
            <Table.Td><TextInput {...form.getInputProps('cases.dative')} size={"xs"}/></Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><strong>Accusative</strong></Table.Td>
            <Table.Td><TextInput {...form.getInputProps('cases.accusative')} size={"xs"}/></Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><strong>Instrumental</strong></Table.Td>
            <Table.Td><TextInput {...form.getInputProps('cases.instrumental')} size={"xs"}/></Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><strong>Prepositional</strong></Table.Td>
            <Table.Td><TextInput {...form.getInputProps('cases.prepositional')} size={"xs"}/></Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </>
  )
}