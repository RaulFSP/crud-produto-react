import { createContext, useEffect, useState } from "react";
export const ProdutoContext = createContext()

export function ProdutoProvider({ children }) {
    const [produtos, setProdutos] = useState(JSON.parse(localStorage.getItem("produtos")) || [])

    useEffect(() => {
        localStorage.setItem("produtos", JSON.stringify(produtos))
    }, [produtos])

    function addProduto({ nome, preco, descricao }) {
        if (!nome.trim() || !descricao.trim() || preco <= 0) return
        const novoProduto = { nome, preco, descricao }
        setProdutos(prev => [...prev, novoProduto])
    }

    return (<ProdutoContext.Provider value={{ produtos, addProduto }}>
        {children}
    </ProdutoContext.Provider>
    )

}