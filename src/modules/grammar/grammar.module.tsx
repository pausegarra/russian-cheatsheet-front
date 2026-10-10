import { Route } from "react-router-dom";
import { CasesPage } from "./pages/cases.tsx";
import { MotionVerbsPage } from "./pages/motion-verbs.tsx";

export const grammarRoutes = [
  <Route key="russian-cases" path="/grammar/cases" element={<CasesPage />} />,
  <Route
    key="russian-motion-verbs"
    path="/grammar/motion-verbs"
    element={<MotionVerbsPage />}
  />,
];
