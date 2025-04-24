import {Button} from "@mantine/core";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {keycloakService} from "./modules/auth/root.ts";
import {useEffect} from "react";

function App() {

  useEffect(() => {
    console.log(keycloakService.getToken())
  }, [])

  async function login() {
    await keycloakService.init();
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Button onClick={login}>Login</Button>} />
        <Route path="/alphabet" element={<h1>Alphabet</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
