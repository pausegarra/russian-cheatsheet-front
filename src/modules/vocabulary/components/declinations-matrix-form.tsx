import { UseFormReturnType } from "@mantine/form";
import { WordEntity } from "../entities/word.entity.ts";
import { Table, TextInput } from "@mantine/core";

type props = {
  form: UseFormReturnType<WordEntity>;
}

export function WordDeclinationMatrixForm({form}: props) {
  return (
    <>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th></Table.Th>
            <Table.Th>Masculine</Table.Th>
            <Table.Th>Feminine</Table.Th>
            <Table.Th>Neuter</Table.Th>
            <Table.Th>Plural</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td><strong>Nominative</strong></Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.nominativeMasculine')} size={"xs"}/>
            </Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.nominativeFeminine')} size={"xs"}/>
            </Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.nominativeNeuter')} size={"xs"}/>
            </Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.nominativePlural')} size={"xs"}/>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><strong>Accusative</strong></Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.accusativeMasculine')} size={"xs"}/>
            </Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.accusativeFeminine')} size={"xs"}/>
            </Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.accusativeNeuter')} size={"xs"}/>
            </Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.accusativePlural')} size={"xs"}/>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><strong>Genitive</strong></Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.genitiveMasculine')} size={"xs"}/>
            </Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.genitiveFeminine')} size={"xs"}/>
            </Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.genitiveNeuter')} size={"xs"}/>
            </Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.genitivePlural')} size={"xs"}/>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><strong>Dative</strong></Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.dativeMasculine')} size={"xs"}/>
            </Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.dativeFeminine')} size={"xs"}/>
            </Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.dativeNeuter')} size={"xs"}/>
            </Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.dativePlural')} size={"xs"}/>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><strong>Instrumental</strong></Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.instrumentalMasculine')} size={"xs"}/>
            </Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.instrumentalFeminine')} size={"xs"}/>
            </Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.instrumentalNeuter')} size={"xs"}/>
            </Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.instrumentalPlural')} size={"xs"}/>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><strong>Prepositional</strong></Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.prepositionalMasculine')} size={"xs"}/>
            </Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.prepositionalFeminine')} size={"xs"}/>
            </Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.prepositionalNeuter')} size={"xs"}/>
            </Table.Td>
            <Table.Td>
              <TextInput {...form.getInputProps('declinationMatrix.prepositionalPlural')} size={"xs"}/>
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </>
  )
}