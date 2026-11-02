import { Route } from "react-router-dom";
import { ListVocabulary } from "./pages/list.tsx";
import { ShowVocabulary } from "./pages/show.tsx";

export const vocabularyRoutes = [
  <Route
    key="vocabulary-redirect"
    path="/vocabulary"
    element={<ListVocabulary />}
  />,
  <Route key="word" path="/vocabulary/:id" element={<ShowVocabulary />} />,
];
