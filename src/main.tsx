import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css'
import {MantineProvider} from "@mantine/core";
import {keycloakService} from "./modules/auth/root.ts";

async function main() {
  await keycloakService.init();

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <MantineProvider forceColorScheme="dark">
        <App />
      </MantineProvider>
    </StrictMode>
  );
}

main();