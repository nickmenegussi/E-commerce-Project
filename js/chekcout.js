document.addEventListener('DOMContentLoaded', function () {
    const carrinho = document.querySelector(".carrinho");
    const totalCarrinhoFinal = document.querySelector(".total-carrinho-final");

    // Recuperar a lista de produtos do localStorage com o getItem()
    const productListJSON = localStorage.getItem("Lista de Produtos");

    if (productListJSON) {
        // Usar parse para converter a string JSON em um objeto.
        const productList = JSON.parse(productListJSON);

        // Função para calcular o total do carrinho
        function calcularTotal() {
            return productList.reduce((acc, product) => {
                return acc + (parseFloat(product.Price.replace('R$', '').replace(',', '.')) * product.Quantity);
            }, 0).toFixed(2);
        }

        // Atualizar o total exibido
        function atualizarTotalCarrinhoFinal() {
            const total = calcularTotal();
            totalCarrinhoFinal.textContent = `Total: R$${total}`;
        }

        // Atualizar o número de itens no carrinho
        function atualizarNumeroItens() {
            const mensagemAdd = productList.length;
            const msgAdd = document.querySelector('.msg-add');
            msgAdd.innerHTML = mensagemAdd;
            localStorage.setItem('Número Itens', mensagemAdd);
        }

        // Função para diminuir a quantidade do produto no carrinho
        function diminuirQuantidade(index) {
            if (productList[index].Quantity > 1) {
                productList[index].Quantity--;
                const produto = carrinho.querySelector(`.container-content:nth-child(${index + 1})`);
                const quantityElement = produto.querySelector('.valor-quantidade');
                quantityElement.textContent = productList[index].Quantity;
                const totalPriceElement = produto.querySelector('.total-price');
                const totalPrice = (parseFloat(productList[index].Price.replace('R$', '').replace(',', '.')) * productList[index].Quantity).toFixed(2);
                totalPriceElement.textContent = `R$${totalPrice}`;
                atualizarTotalCarrinhoFinal();
                localStorage.setItem("Lista de Produtos", JSON.stringify(productList));
                atualizarNumeroItens();
            }
        }

        // Função para aumentar a quantidade do produto no carrinho
        function aumentarQuantidade(index) {
            productList[index].Quantity++;
            const produto = carrinho.querySelector(`.container-content:nth-child(${index + 1})`);
            const quantityElement = produto.querySelector('.valor-quantidade');
            quantityElement.textContent = productList[index].Quantity;
            const totalPriceElement = produto.querySelector('.total-price');
            const totalPrice = (parseFloat(productList[index].Price.replace('R$', '').replace(',', '.')) * productList[index].Quantity).toFixed(2);
            totalPriceElement.textContent = `R$${totalPrice}`;
            atualizarTotalCarrinhoFinal();
            localStorage.setItem("Lista de Produtos", JSON.stringify(productList));
            atualizarNumeroItens();
        }

        // Função para excluir o produto do carrinho
        function excluirProduto(index) {
            productList.splice(index, 1);
            localStorage.setItem("Lista de Produtos", JSON.stringify(productList));
            const produto = carrinho.querySelector(`.container-content:nth-child(${index + 1})`);
            produto.remove();
            atualizarTotalCarrinhoFinal();
            atualizarNumeroItens();
        }

        // Iterar sobre cada produto na lista e criar elementos HTML correspondentes 
        productList.forEach((product, index) => {
            const divProduto = document.createElement('div');
            divProduto.classList.add("container-content");

            // Calcular o preço total do produto
            const totalPrice = (parseFloat(product.Price.replace('R$', '').replace(',', '.')) * product.Quantity).toFixed(2);

            divProduto.innerHTML = `
                <div class="row">
                    <div class="linhaofproducts mx-auto p-2 mt-3">
                        <div class="col descritionsofcontent">
                            <img src="${product.ImgSrc}" class="img-contents mt-2 mb-2" alt="Product Image">
                            <h6>${product.Name}</h6>
                        </div>
                        <div class="col">
                            <div class="container borda gap-2 text-center">
                                <button class="button-diminuir" data-index="${index}">-</button>
                                <div class="valor-quantidade">${product.Quantity}</div>
                                <button class="button-aumentar" data-index="${index}">+</button>
                            </div>
                        </div>
                        <div class="col">
                            <h6 class="mt-2 text-center product-price">${product.Price}</h6>
                        </div>
                        <div class="col">
                            <h6 class="mt-2 text-center total-price">R$${totalPrice}</h6>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-danger ms-5 button-excluir" data-index="${index}">Excluir</button>
                        </div>
                    </div>
                </div>`;

            carrinho.appendChild(divProduto);
        });

        atualizarTotalCarrinhoFinal();
        atualizarNumeroItens();

        const mensagemAdd = localStorage.getItem("Número Itens");
        if (mensagemAdd) {
            const msgAdd = document.querySelector('.msg-add');
            msgAdd.innerHTML = mensagemAdd;
        } else {
            carrinho.innerHTML = "<h6>Carrinho Vazio</h6>";
        }

        // Adicionar eventos de clique para diminuir, aumentar e excluir
        const diminuirButtons = document.querySelectorAll('.button-diminuir');
        diminuirButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                diminuirQuantidade(index);
            });
        });

        const aumentarButtons = document.querySelectorAll('.button-aumentar');
        aumentarButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                aumentarQuantidade(index);
            });
        });

        const excluirButtons = document.querySelectorAll('.button-excluir');
        excluirButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                excluirProduto(index);
            });
        });
        
    } else {
        carrinho.innerHTML = "<h6>Carrinho Vazio</h6>";
    }
});
