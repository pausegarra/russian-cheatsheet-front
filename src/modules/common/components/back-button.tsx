import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  fallbackTo: string;
};

export function BackButton({ fallbackTo }: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { fromApp?: boolean } | null;

  return (
    <Button
      variant="subtle"
      leftSection={<IconArrowLeft size={16} />}
      onClick={() => state?.fromApp ? navigate(-1) : navigate(fallbackTo)}
    >
      Back
    </Button>
  );
}
