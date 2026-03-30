import './index.css'
import FormProduto from '../components/FormProduto'
import ListProdutoCard from "../components/ListProdutoCard"
import TituloSection from '../components/TituloSection'
import { useEffect, useState } from 'react'
function App() {

  const [produtos, setProdutos] = useState(JSON.parse(localStorage.getItem("produtos")) || [])

  useEffect(() => {
    localStorage.setItem("produtos", JSON.stringify(produtos))
  }, [produtos])

  function onProdutoFormSubmit(nome, preco, descricao) {
    if (!nome.trim() || !descricao.trim() || preco <= 0) {
      return
    }
    const novoProduto = {
      nome: nome,
      preco: preco,
      descricao: descricao
    }
    setProdutos([...produtos, novoProduto])
  }

  return (
    <div className="container">
      <div className="py-4">
        <TituloSection>Formulário Produto</TituloSection>
        <FormProduto onProdutoFormSubmit={onProdutoFormSubmit} />
      </div>
      <div>
        <TituloSection>Produtos Presentes</TituloSection>
        <ListProdutoCard produtos={produtos} />
      </div>
    </div>
  )
}

export default App
