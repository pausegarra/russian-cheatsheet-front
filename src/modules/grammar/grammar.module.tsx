import { Route } from "react-router-dom";
import { CasesPage } from "./pages/cases.tsx";

export const grammarRoutes = [
  <Route key="russian-cases" path="/grammar/cases" element={<CasesPage />} />,
];
