import { Button, Stack } from "@mantine/core";
import { authService } from "../root.ts";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (authService.isAuthenticated()) {
      navigate("/");
    }
  }, [navigate])

  return (
    <Stack align="center" justify="center" h="100vh">
      <Button variant={"gradient"} gradient={{ from: "blue", to: "cyan" }} onClick={() => authService.login()}>
        Login
      </Button>
    </Stack>
  )
}