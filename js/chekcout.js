const carrinho = document.querySelector(".carrinho");

// Recuperar a lista de produtos do localStorage com o getItem()
const productListJSON = localStorage.getItem("Lista de Produtos");

if (productListJSON){
    // usar parse para converter a string JSON em um objeto.
    const ProductList = JSON.parse(productListJSON)

    // iterar sobre cada produto na lista ecriar elementos HTML correspondentes 
    ProductList.forEach(product => {
        const divproduto = document.createElement('div')
        // adicionar depois desse elemento div, uma div container-content
        divproduto.classList.add("container-content") 

        divproduto.innerHTML =  `
        <div class="row">
            <div class="linhaofproducts mx-auto p-2 mt-3">
                <div class="col descritionsofcontent">
                    <img src="${product.ImgSrc}" class="img-contents mt-2 mb-2" alt="Product Image">
                    <h6>${product.Name}</h6>
                </div>
                <div class="col">
                    <div class="container borda gap-2 text-center">
                        <button class="button-diminuir">-</button>
                        <div class="valor-quantidade">1</div>
                        <button class="button-aumentar">+</button>
                    </div>
                </div>
                <div class="col">
                    <h6 class="mt-2 text-center">${product.Price}</h6>
                </div>
                <div class="col">
                    <h6 class="mt-2 text-center">${product.Price}</h6>
                </div>
            </div>
        </div>`
        
        carrinho.appendChild(divproduto)
    });
    const Mensagem_add = localStorage.getItem("Número Itens")
    if (Mensagem_add) {
        const msgAdd = document.querySelector('.msg-add')
        msgAdd.innerHTML = Mensagem_add
    } else {
        carrinho.innerHTML = "<p>O carrinho está vazio</p>"
    }

}