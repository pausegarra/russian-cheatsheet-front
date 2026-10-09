import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { workbenchResolver, workbenchTheme } from './modules/common/theme.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider
      theme={workbenchTheme}
      cssVariablesResolver={workbenchResolver}
      forceColorScheme="dark"
    >
      <App />
    </MantineProvider>
  </StrictMode>
);
