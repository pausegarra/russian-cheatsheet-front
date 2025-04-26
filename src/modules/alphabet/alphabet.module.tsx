import { Route, Routes } from "react-router-dom";
import { ListAlphabet } from "./pages/list.tsx";

export function AlphabetModule() {
  return (
    <Routes>
      <Route path="/alphabet" element={<ListAlphabet/>}/>
    </Routes>
  )
}