import { Route } from "react-router-dom";
import { Presentation } from "./pages/presentation.tsx";
import RussianCasesForDummies from "./pages/russian-cases.tsx";

export const commonRoutes = [
  <Route path="/" element={<Presentation/>}/>,
  <Route path="/russian-cases" element={<RussianCasesForDummies/>}/>,
];