import { BrowserRouter, Routes } from "react-router-dom";
import { commonRoutes } from "./modules/common/common.module.tsx";
import "./app.css"
import { alphabetRoutes } from "./modules/alphabet/alphabet.module.tsx";
import { vocabularyRoutes } from "./modules/vocabulary/vocabulary.module.tsx";
import { authRoutes } from "./modules/auth/auth.module.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {...commonRoutes}
        {...alphabetRoutes}
        {...vocabularyRoutes}
        {...authRoutes}
      </Routes>
    </BrowserRouter>
  )
}

export default App
