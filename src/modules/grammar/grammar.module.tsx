import { Route } from "react-router-dom";
import { CasesPage } from "./pages/cases.tsx";
import { MotionVerbsPage } from "./pages/motion-verbs.tsx";
import { DeclensionsPage } from "./pages/declensions.tsx";
import { NumbersPage } from "./pages/numbers.tsx";
import { GrammarIndexPage } from "./pages/index.tsx";
import { PronounsPage } from "./pages/pronouns.tsx";
import { VerbsPage } from "./pages/verbs.tsx";

export const grammarRoutes = [
  <Route key="grammar-index" path="/grammar" element={<GrammarIndexPage />} />,
  <Route key="russian-cases" path="/grammar/cases" element={<CasesPage />} />,
  <Route
    key="russian-declensions"
    path="/grammar/declensions"
    element={<DeclensionsPage />}
  />,
  <Route
    key="russian-pronouns"
    path="/grammar/pronouns"
    element={<PronounsPage />}
  />,
  <Route
    key="russian-numbers"
    path="/grammar/numbers"
    element={<NumbersPage />}
  />,
  <Route key="russian-verbs" path="/grammar/verbs" element={<VerbsPage />} />,
  <Route
    key="russian-motion-verbs"
    path="/grammar/motion-verbs"
    element={<MotionVerbsPage />}
  />,
];
