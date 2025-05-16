import { Button, Stack } from "@mantine/core";
import { authService } from "../root.ts";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth.provider.ts";

export function LoginPage() {
  const navigate = useNavigate();
  const user = useContext(AuthContext);

  useEffect(() => {
    if (authService.isAuthenticated()) {
      navigate("/");
    }
  }, [navigate, user])

  return (
    <Stack align="center" justify="center" h="100vh">
      <Button variant={"gradient"} gradient={{ from: "blue", to: "cyan" }} onClick={() => authService.login()}>
        Login
      </Button>
    </Stack>
  )
}