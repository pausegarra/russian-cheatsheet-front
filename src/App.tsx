import { Button } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { KeycloakProfile } from "keycloak-js";
import { authService } from "./modules/auth/root.ts";

function App() {
  const [user, setUser] = useState<KeycloakProfile>({});

  useEffect(() => {
    authService.loadUserProfile().then(setUser)
  } , [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Button onClick={() => authService.login()}>Login</Button>}/>
        <Route path="/alphabet" element={<pre>{JSON.stringify(user, null, 2)}</pre>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
