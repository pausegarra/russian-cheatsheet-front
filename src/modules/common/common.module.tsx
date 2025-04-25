import { Route, Routes } from "react-router-dom";
import { Presentation } from "./pages/presentation.tsx";

export function CommonModule() {
  return (
    <Routes>
      <Route path="/" element={<Presentation/>}/>
    </Routes>
  )
}