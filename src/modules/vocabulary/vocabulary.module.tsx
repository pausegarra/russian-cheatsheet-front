import { Route } from "react-router-dom";
import { ListVocabulary } from "./pages/list.tsx";
import { ShowVocabulary } from "./pages/show.tsx";
import { CreateVocabulary } from "./pages/create.tsx";
import { Protected } from "../common/components/protected.tsx";
import { EditWordPage } from "./pages/edit.tsx";

export const vocabularyRoutes = [
  <Route path="/vocabulary" element={<ListVocabulary/>}/>,
  <Route path="/vocabulary/create" element={<Protected permission={"words#create"}><CreateVocabulary/></Protected>}/>,
  <Route path="/vocabulary/:id/edit" element={<Protected permission={"words#update"}><EditWordPage/></Protected>}/>,
  <Route path="/vocabulary/:id" element={<ShowVocabulary/>}/>,
];