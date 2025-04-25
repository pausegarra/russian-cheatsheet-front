import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './modules/common/App.tsx'
import '@mantine/core/styles.css'
import { MantineProvider } from "@mantine/core";
import { authService } from "./modules/auth/root.ts";

function render() {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <MantineProvider forceColorScheme="dark">
        <App/>
      </MantineProvider>
    </StrictMode>
  );
}

authService.init(render);
