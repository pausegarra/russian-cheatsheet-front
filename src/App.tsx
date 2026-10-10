import { BrowserRouter, Routes } from "react-router-dom";
import { commonRoutes } from "./modules/common/common.module.tsx";
import "./app.css"
import { alphabetRoutes } from "./modules/alphabet/alphabet.module.tsx";
import { grammarRoutes } from "./modules/grammar/grammar.module.tsx";
import { vocabularyRoutes } from "./modules/vocabulary/vocabulary.module.tsx";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./modules/common/components/error.tsx";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          {...commonRoutes}
          {...grammarRoutes}
          {...alphabetRoutes}
          {...vocabularyRoutes}
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
