// pegar todos os valores dos botoes clicados
const productsListButtons = document.querySelectorAll('.add-to-cart')
// Iterar sobre os botoes clicados para adicionar o valor do botao ao localStorage
const Mensagem_add = document.querySelector('.msg-add')


productsListButtons.forEach(button => {
    button.addEventListener('click', () => {
        // usado o closest para pegar o conteudo mais proximo do card-content
        const dataId = parseInt(button.closest('.card-content').getAttribute('data-id'))
        switch (dataId) {
            case 1:
                AdicionarAoCarrinho(1)
                break;
            case 2:
                AdicionarAoCarrinho(2)
                break
            case 3:
                AdicionarAoCarrinho(3)
                break
            case 4:
                AdicionarAoCarrinho(4)
                break
            case 5:
                AdicionarAoCarrinho(5)
                break
            case 6:
                AdicionarAoCarrinho(6)
            default:
                break;
        }
    })
})
const ProductList = []
// Criar um funcao para salvar os dados e mandar pro localStorage
function AdicionarAoCarrinho(id){
    const content_card = document.querySelector(`.card-content[data-id="${id}"]`);
    // se o content_card for clicado nesse data-id (com o num correspondente)
    if (content_card) {
        const imgProduct = content_card.querySelector('.card-img').src 
        const name = content_card.querySelector('#NomeProduto').innerHTML
        const price = content_card.querySelector('#PrecoProduto').innerHTML
    
        const ItemsProducts = {
            Id: id,
            ImgSrc: imgProduct,
            Name: name,
            Price: price,
        }
    // iterar sobre os catalogos e pegar os conteudos necessarios
    ProductList.push(ItemsProducts)
    // converter o array em uma string JSON
    const productListJSON = JSON.stringify(ProductList)

    // armazenar a string JSON no localStorage
    localStorage.setItem('Lista de Produtos', productListJSON)
        
    alert("Produto Adiciona com sucesso!")

    
    localStorage.setItem('Número Itens', Mensagem_add.textContent = parseInt(Mensagem_add.textContent) + 1
)    
    } else {
        alert(`Erro: Não foi possivel encontrar o ${id} id do cartão do produto.`)
    }
}
