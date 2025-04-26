import { Route, Routes } from "react-router-dom";
import { ListVocabulary } from "./pages/list.tsx";

export function VocabularyModule() {
  return (
    <Routes>
      <Route path="/vocabulary" element={<ListVocabulary/>}/>
    </Routes>
  )
}