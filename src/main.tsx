import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css'
import {MantineProvider} from "@mantine/core";
import {initKeycloak} from "./keycloak.ts";

function render() {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <MantineProvider forceColorScheme="dark">
        <App />
      </MantineProvider>
    </StrictMode>
  );
}

initKeycloak(render);

