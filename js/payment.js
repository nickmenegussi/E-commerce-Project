document.addEventListener("DOMContentLoaded", function () {
    const checkoutContent = document.querySelector(".linhaofcontentes");
  
    // Recuperar a lista de produtos do localStorage
    let productListJSON = localStorage.getItem("Lista de Produtos");
  
    if (productListJSON) {
      let productList = JSON.parse(productListJSON);
  
      // Criar uma div para conter todos os cards
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("row", "row-cols-3");
  
      // Calcular total do carrinho e quantidade total de itens
      let totalCarrinho = 0;
      let totalQuantidade = 0;
  
      productList.forEach((product) => {
        totalCarrinho +=
          parseFloat(product.Price.replace("R$", "").replace(",", ".")) *
          product.Quantity;
        totalQuantidade += product.Quantity;
      });
  
      // Iterar sobre cada produto na lista e criar elementos HTML correspondentes
      productList.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("col");
        const totalPrice = (
          parseFloat(product.Price.replace("R$", "").replace(",", ".")) *
          product.Quantity
        ).toFixed(2);
        card.innerHTML = `
                  <div class="card shadow-sm mx-auto mb-4" style="width: 21rem;">
                      <div class="card-body">                    
                          <div class="row">
                              <div class="col-12 mb-4">
                                  <div class="d-flex align-items-center">
                                      <img src="${product.ImgSrc}" alt="Imgproduct" class="rounded-circle me-3" style="width: 60px; height: 60px;">
                                      <h5 class="mb-0">${product.Name}</h5>
                                  </div>
                              </div>
                              <div class="col-12 mb-3">
                                  <div class="d-flex justify-content-between">
                                      <p class="card-text mb-0">Preço:</p>
                                      <p class="mb-0">${product.Price}</p>
                                  </div>
                              </div>
                              <div class="col-12 mb-3">
                                  <div class="d-flex justify-content-between">
                                      <p class="card-text mb-0">Quantidade:</p>
                                      <p class="mb-0">${product.Quantity}</p>
                                  </div>
                              </div>
                              <div class="col-12 mb-3">
                                  <div class="d-flex justify-content-between">
                                      <p class="card-text mb-0">Total:</p>
                                      <p class="mb-0">R$${totalPrice}</p>
                                  </div>
                              </div>
                              <div class="col-12 mb-3">
                                  <div class="d-flex justify-content-between">
                                      <p class="card-text mb-0">Frete:</p>
                                      <p class="mb-0">Grátis</p>
                                  </div>
                              </div>
                              <div class="col-12">
                                  <div class="d-grid">
                                      <button class="btn btn-primary btn-lg" data-bs-toggle="modal" type="button" data-bs-target="#staticBackdrop">Finalizar Compra</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              `;
        cardContainer.appendChild(card);
      });
  
      // Adicionar o container de cards ao conteúdo do checkout
      checkoutContent.appendChild(cardContainer);
  
      // Exibir total do carrinho e quantidade total de itens
      const totalInfo = document.createElement("div");
      totalInfo.classList.add("total-info");
      totalInfo.innerHTML = `
              <div class="mt-4">
                  <h5>Total de Itens: ${totalQuantidade}</h5>
                  <h5>Total do Carrinho: R$${totalCarrinho.toFixed(2)}</h5>
              </div>
          `;
      checkoutContent.appendChild(totalInfo);
  
      // Guardar as informações de total e quantidade no localStorage
      localStorage.setItem("Total Carrinho", totalCarrinho.toFixed(2));
      localStorage.setItem("Total Quantidade", totalQuantidade);
    }
  });