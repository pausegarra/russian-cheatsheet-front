import {Title} from "@mantine/core";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title>Russian Cheatsheet</Title>} />
        <Route path="/alphabet" element={<h1>Alphabet</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
