import { Route, Routes } from "react-router-dom";
import { ListVocabulary } from "./pages/list.tsx";
import { ShowVocabulary } from "./pages/show.tsx";

export function VocabularyModule() {
  return (
    <Routes>
      <Route path="/vocabulary" element={<ListVocabulary/>}/>
      <Route path="/vocabulary/:id" element={<ShowVocabulary/>}/>
    </Routes>
  )
}