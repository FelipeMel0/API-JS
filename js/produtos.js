"use strict"

const url = "http://10.107.131.29:8080/produtos"

const getProdutos = async () => {
    const response = await fetch(url)
    return response.json()
}

export {getProdutos}