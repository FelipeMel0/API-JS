"use strict"

const url = "http://10.107.131.29:8080/produtos"

const getProdutos = async () => {
    const response = await fetch(url)
    return response.json()
}

const postProduto = (produto) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(produto),
        headers: {
            'content-Type': 'application/json'
        }
    }
    fetch(url, options)
}

const deleteProduto = (id) =>{
    const options = {
        method: 'DELETE',
        headers: {
            'content-Type': 'application/json'
        }
    }

    fetch(`${url}/${id}`, options)
}

const updateProduto = async (id, produto) =>{
    const options = {
        method: 'UPDATE',
        body: JSON.stringify(produto),
        headers: {
            'content-Type': 'application/json'
        }
    }

    await fetch(`${url}/${id}`, options)
}

export {getProdutos}
export {postProduto}
export {deleteProduto}
export {updateProduto}