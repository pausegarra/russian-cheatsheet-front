import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { KeycloakProfile } from "keycloak-js";
import { authService } from "./modules/auth/root.ts";
import { Layout } from "./modules/common/components/layout.tsx";
import { CommonModule } from "./modules/common/common.module.tsx";

function App() {
  const [user, setUser] = useState<KeycloakProfile>({});

  useEffect(() => {
    authService.loadUserProfile().then(setUser)
  } , [])

  return (
    <BrowserRouter>
      <Layout>
        <CommonModule/>
        <Routes>
          <Route path="/alphabet" element={<pre>{JSON.stringify(user, null, 2)}</pre>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
