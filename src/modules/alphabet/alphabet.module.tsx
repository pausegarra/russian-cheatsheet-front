import { Route } from "react-router-dom";
import { ListAlphabet } from "./pages/list.tsx";

export const alphabetRoutes = [
  <Route path="/alphabet" element={<ListAlphabet/>}/>,
];