import { Route } from "react-router-dom";
import { ListVocabulary } from "./pages/list.tsx";
import { ShowVocabulary } from "./pages/show.tsx";

export const vocabularyRoutes = [
  <Route path="/vocabulary" element={<ListVocabulary/>}/>,
  <Route path="/vocabulary/:id" element={<ShowVocabulary/>}/>,
];