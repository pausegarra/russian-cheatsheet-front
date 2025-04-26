import { BrowserRouter } from "react-router-dom";
import { Layout } from "./modules/common/components/layout.tsx";
import { CommonModule } from "./modules/common/common.module.tsx";
import "./app.css"
import { AlphabetModule } from "./modules/alphabet/alphabet.module.tsx";
import { VocabularyModule } from "./modules/vocabulary/vocabulary.module.tsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <CommonModule/>
        <AlphabetModule/>
        <VocabularyModule/>
      </Layout>
    </BrowserRouter>
  )
}

export default App
