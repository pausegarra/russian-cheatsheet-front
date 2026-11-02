import { Route } from "react-router-dom";
import { ListAlphabet } from "./pages/list.tsx";

export const alphabetRoutes = [
  <Route key="alphabet" path="/alphabet" element={<ListAlphabet />} />,
];
