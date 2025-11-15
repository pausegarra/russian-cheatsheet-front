import { Route } from "react-router-dom";
import { ListVocabulary } from "./pages/list.tsx";
import { ShowVocabulary } from "./pages/show.tsx";
import { Protected } from "../common/components/protected.tsx";
import { EditWordPage } from "./pages/edit.tsx";
import { ListUnpublished } from "./pages/list-unpublished.tsx";

export const vocabularyRoutes = [
  <Route path="/vocabulary" element={<ListVocabulary/>}/>,
  <Route path="/vocabulary/unpublished" element={<Protected permission={"words#publish"}><ListUnpublished/></Protected>}/>,
  <Route path="/vocabulary/:id/edit" element={<Protected permission={"words#update"}><EditWordPage/></Protected>}/>,
  <Route path="/vocabulary/:id" element={<ShowVocabulary/>}/>,
];