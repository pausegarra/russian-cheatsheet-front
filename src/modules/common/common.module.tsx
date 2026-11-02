import { Route } from "react-router-dom";
import { Presentation } from "./pages/presentation.tsx";
import { NotFound } from "./pages/not-found.tsx";
export const commonRoutes = [
  <Route key="home" path="/" element={<Presentation />} />,
  <Route key="not-found" path="*" element={<NotFound />} />,
];
