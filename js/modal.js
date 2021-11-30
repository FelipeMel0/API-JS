const openModal = () => document.getElementById("modal").classList.add("active")

const closeModal = () => document.getElementById("modal").classList.remove("active")

function openModalUpdate(target) {
    document.getElementById("modal").classList.add("active")
    document.getElementById("product").value = "nome"
    document.getElementById("price").value = "preco"
    document.getElementById("category").value = "categoria"
}

export { openModal, closeModal, openModalUpdate }
