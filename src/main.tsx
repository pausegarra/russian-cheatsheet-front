import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css'
import { MantineProvider } from "@mantine/core";
import { authService } from "./modules/auth/root.ts";
import { Notifications } from '@mantine/notifications';

function render() {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <MantineProvider forceColorScheme="dark">
        <Notifications/>
        <App/>
      </MantineProvider>
    </StrictMode>
  );
}

authService.init(render);
