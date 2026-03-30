import ProdutoCard from "./ProdutoCard"
function ListProdutoCard({ produtos }) {
    return (
        <div className="container text-center">
            <div className="row">
                {produtos.map((p, index) => {
                    <ProdutoCard key={index} nome={p.nome} preco={p.preco} descricao={p.descricao} />
                })}


            </div>
        </div>)
}
export default ListProdutoCard