import ButtonOutline from "./ButtonOutline"
function ProdutoCard({ nome, preco, descricao }) {
    return (
        <div className="card" style={{ width: "18rem " }}>
            <div className="card-body">
                <h5 className="card-title">{nome}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{preco}</h6>
                <p className="card-text">
                    {descricao}
                </p>

                <div className="d-flex gap-2">
                    <ButtonOutline type={"button"} outlineType={"primary"}>Card link</ButtonOutline>
                    <ButtonOutline type={"button"} outlineType={"primary"}>Another link</ButtonOutline>
                </div>
            </div>
        </div>)
}
export default ProdutoCard