"use strict"

import { openModal, closeModal } from "./modal.js"
import { getProdutos } from "./produtos.js"

const criarLinhas = ({nome, preco, categoria, foto}) => {
    const linha = document.createElement("tr")
    linha.innerHTML = `
    <td>
        <img src="${foto}" class="produto-image" />
    </td>
    <td>${nome}</td>
    <td>${preco}</td>
    <td>${categoria}</td>
    <td>
        <button type="button" class="button green">
            editar
        </button>
        <button type="button" class="button red">
            excluir
        </button>
    </td>
    `
    return linha
}

const carregarTabela = async () => {
    const container = document.querySelector(".records tbody")
    const produtos = await getProdutos()
    const linhas = produtos.map(criarLinhas)
    container.replaceChildren(...linhas)
}

carregarTabela()

//Eventos
document.getElementById("cadastrarCliente").addEventListener("click", openModal)

document.getElementById("modalClose").addEventListener("click", closeModal)

document.getElementById("cancel").addEventListener("click", closeModal)
