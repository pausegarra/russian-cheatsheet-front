import { Route } from "react-router-dom";
import { Presentation } from "./pages/presentation.tsx";

export const commonRoutes = [
  <Route path="/" element={<Presentation/>}/>,
];
