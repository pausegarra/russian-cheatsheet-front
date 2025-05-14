import { Button, Group, Modal, Stack, Text, Title } from "@mantine/core";
import { Layout } from "../../common/components/layout.tsx";
import { WordForm } from "../components/word-form.tsx";
import { WordEntity } from "../entities/word.entity.ts";
import { wordService } from "../root.ts";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useForm } from "@mantine/form";

export function CreateVocabulary() {
  const form = useForm<WordEntity>({
    initialValues: {
      id: '',
      russian: '',
      english: '',
      spanish: '',
      type: '',
      conjugations: {
        imperfectivePresentFirstPersonSingular: '',
        imperfectivePresentSecondPersonSingular: '',
        imperfectivePresentThirdPersonSingular: '',
        imperfectivePresentFirstPersonPlural: '',
        imperfectivePresentSecondPersonPlural: '',
        imperfectivePresentThirdPersonPlural: '',
        imperfectivePastMasculine: '',
        imperfectivePastFeminine: '',
        imperfectivePastNeuter: '',
        imperfectivePastPlural: '',
        imperfectiveFutureFirstPersonSingular: '',
        imperfectiveFutureSecondPersonSingular: '',
        imperfectiveFutureThirdPersonSingular: '',
        imperfectiveFutureFirstPersonPlural: '',
        imperfectiveFutureSecondPersonPlural: '',
        imperfectiveFutureThirdPersonPlural: '',
        perfectivePresentFirstPersonSingular: '',
        perfectivePresentSecondPersonSingular: '',
        perfectivePresentThirdPersonSingular: '',
        perfectivePresentFirstPersonPlural: '',
        perfectivePresentSecondPersonPlural: '',
        perfectivePresentThirdPersonPlural: '',
        perfectivePastMasculine: '',
        perfectivePastFeminine: '',
        perfectivePastNeuter: '',
        perfectivePastPlural: '',
        perfectiveFutureFirstPersonSingular: '',
        perfectiveFutureSecondPersonSingular: '',
        perfectiveFutureThirdPersonSingular: '',
        perfectiveFutureFirstPersonPlural: '',
        perfectiveFutureSecondPersonPlural: '',
        perfectiveFutureThirdPersonPlural: ''
      }
    }
  })
  const [opened, {open, close}] = useDisclosure(false);
  const wordIdRef = useRef<string | null>(null);

  async function handleSubmit(values: WordEntity) {
    wordIdRef.current = await wordService.createWord(values);
    open()
  }

  function handleReset() {
    form.reset();
    close();
  }

  return (
    <>
      <Layout>
        <Title mb={10} order={2}>Create vocabulary</Title>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <WordForm form={form}/>
        </form>
      </Layout>

      <Modal opened={opened} onClose={close} withCloseButton={false} centered={true}>
        <Stack gap="md" align="center">
          <Title>Word created!</Title>
          <Text>What do you want to do next?</Text>
          <Group align={"center"} justify={"center"}>
            <Button onClick={close} component={Link} to={`/vocabulary/${wordIdRef.current}`} variant={"gradient"} c={"black"} gradient={{ from: "yellow", to: "orange" }}>View word</Button>
            <Button onClick={handleReset} variant={"gradient"} gradient={{ from: "blue", to: "cyan" }}>Create another</Button>
            <Button onClick={close} component={Link} to={"/vocabulary"} variant={"gradient"} gradient={{ from: "blue", to: "cyan" }}>View all words</Button>
          </Group>
        </Stack>
      </Modal>
    </>
  )
}