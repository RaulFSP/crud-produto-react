import './index.css'
import FormProduto from '../components/FormProduto'
import ListProdutoCard from "../components/ListProdutoCard"
import TituloSection from '../components/TituloSection'

import { ProdutoContext, ProdutoProvider } from '../context/ProdutoContext'
function App() {

  return (
    <ProdutoProvider>
      <div className="container">
        <div className="py-4">
          <TituloSection>Formulário Produto</TituloSection>
          <FormProduto />
        </div>
        <div>
          <TituloSection>Produtos Presentes</TituloSection>
          <ListProdutoCard />
        </div>
      </div>
    </ProdutoProvider>
  )
}

export default App
