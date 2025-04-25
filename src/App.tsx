import {Button} from "@mantine/core";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {keycloak} from "./keycloak.ts";
import * as React from "react";

function App() {
  const [user, setUser] = React.useState<any>(null);

  React.useEffect(() => {
    keycloak.loadUserProfile().then((user) => {
      setUser(user);
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Button onClick={() => keycloak.login()}>Login</Button>} />
        <Route path="/alphabet" element={<pre>{JSON.stringify(user, null, 2)}</pre>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
