// Função para adicionar produto ao carrinho
const productsListButtons = document.querySelectorAll('.add-to-cart');
const msgAdd = document.querySelector('.msg-add');

productsListButtons.forEach(button => {
    button.addEventListener('click', () => {
        const dataId = parseInt(button.closest('.card-content').getAttribute('data-id'));
        AdicionarAoCarrinho(dataId);
    });
});

function AdicionarAoCarrinho(id) {
    const contentCard = document.querySelector(`.card-content[data-id="${id}"]`);
    if (contentCard) {
        const imgProduct = contentCard.querySelector('.card-img').src;
        const name = contentCard.querySelector('.product-name').innerHTML;
        const price = contentCard.querySelector('.product-price').innerHTML;

        let ProductList = JSON.parse(localStorage.getItem('Lista de Produtos')) || [];

        const existingProductIndex = ProductList.findIndex(product => product.Id === id);
        if (existingProductIndex > -1) {
            ProductList[existingProductIndex].Quantity++;
        } else {
            const newProduct = {
                Id: id,
                ImgSrc: imgProduct,
                Name: name,
                Price: price,
                Quantity: 1
            };
            ProductList.push(newProduct);
        }

        localStorage.setItem('Lista de Produtos', JSON.stringify(ProductList));
        localStorage.setItem('Número Itens', ProductList.length);
        alert("Produto Adicionado com sucesso!");
        atualizarNumeroItens(); // Atualizar o número de itens exibido

    } else {
        alert(`Erro: Não foi possível encontrar o cartão do produto com id ${id}.`);
    }
}

// Função para atualizar o número de itens exibido
function atualizarNumeroItens() {
    const productList = JSON.parse(localStorage.getItem('Lista de Produtos')) || [];
    msgAdd.innerHTML = productList.length;
}
