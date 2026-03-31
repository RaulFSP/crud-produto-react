import { useContext } from "react"
import ProdutoCard from "./ProdutoCard/ProdutoCard"
import { ProdutoContext } from "../context/ProdutoContext"
function ListProdutoCard() {
    const { produtos } = useContext(ProdutoContext)
    return (
        <div className="container text-center">
            <div className="row">
                {produtos.map((p, index) => (
                    <div className="col-md-4 col-sm-6 col-12 mb-3" key={index}>
                        <ProdutoCard
                            nome={p.nome}
                            preco={p.preco}
                            descricao={p.descricao}
                        />
                    </div>
                ))}
            </div>
        </div>)
}
export default ListProdutoCard