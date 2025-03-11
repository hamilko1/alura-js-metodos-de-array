let btnOdernarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOdernarPorPreco.addEventListener('click', ordenarLivros)

function ordenarLivros() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivros(livrosOrdenados)
}