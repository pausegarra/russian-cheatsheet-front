import { Navigate, useSearchParams } from "react-router-dom";
export function ListVocabulary() {
  const [params] = useSearchParams();
  return <Navigate replace to={{ pathname: "/", search: params.toString() }} />;
}
