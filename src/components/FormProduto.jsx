import { useState } from "react"
import FormularioInput from "./FormularioInput"
import FormularioTextArea from "./FormularioTextArea"
import ButtonOutline from "./ButtonOutline"

function FormProduto({ onProdutoFormSubmit }) {
    const [produtoNome, setProdutoNome] = useState("")
    const [produtoPreco, setProdutoPreco] = useState(0.0)
    const [produtoDescricao, setProdutoDescricao] = useState("")

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            onProdutoFormSubmit(produtoNome, produtoPreco, produtoDescricao)
        }}>
            <FormularioInput
                label={"Nome do Produto"}
                type={"text"}
                placeholder={"Cadeira"}
                value={produtoNome}
                onChange={(e) => setProdutoNome(e.target.value)}
                name={"produtoNome"}
            />
            <FormularioInput
                label={"Preço do Produto"}
                type={"number"}
                placeholder={"50,0"}
                value={produtoPreco}
                onChange={(e) => setProdutoPreco(Number(e.target.value))}
            />
            <FormularioTextArea
                label={"Descrição do Produto"}
                type={"text"}
                placeholder={"Madeira, com almofada"}
                value={produtoDescricao}
                onChange={(e) => setProdutoDescricao(e.target.value)}
            />
            <div className="d-flex gap-3">
                <ButtonOutline
                    type={"submit"}
                    outlineType={"success"}>Enviar
                </ButtonOutline>
                <ButtonOutline
                    type={"reset"}
                    outlineType={"warning"}>Limpar
                </ButtonOutline>
            </div>
        </form>
    )
}
export default FormProduto