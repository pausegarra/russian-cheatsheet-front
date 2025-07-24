import { Route } from "react-router-dom";
import { Presentation } from "./pages/presentation.tsx";
import RussianCasesForDummies from "./pages/russian-cases.tsx";
import MotionVerbs from "./pages/motion-verbs.tsx";
import { Prepositions } from "./pages/prepositions.tsx";

export const commonRoutes = [
  <Route path="/" element={<Presentation/>}/>,
  <Route path="/russian-cases" element={<RussianCasesForDummies/>}/>,
  <Route path="/motion-verbs" element={<MotionVerbs/>}/>,
  <Route path="/prepositions" element={<Prepositions/>}/>,
];