import { Route } from "react-router-dom";
import { LoginPage } from "./pages/login.page.tsx";

export const authRoutes = [
  <Route path="/auth/login" element={<LoginPage />} />,
];