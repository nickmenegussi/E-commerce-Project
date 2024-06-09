### E-commerce de Produtos Extraordinários

- Este é o repositório do projeto de um e-commerce de produtos extraordinários desenvolvido pelo Nicolas Ramos e Arthur Cardoso. O objetivo deste projeto é criar uma loja virtual para comercializar uma variedade de produtos únicos e extraordinários.

### Descrição do Projeto
- Nosso e-commerce é uma plataforma online onde os usuários podem navegar e comprar uma variedade de produtos extraordinários. Nós nos concentramos inicialmente na parte visual do site, utilizando a ferramenta Figma para criar o design do projeto. Você pode visualizar o design do projeto no seguinte link: Figma Design.

### Ferramentas Utilizadas
- Figma: Utilizamos o Figma para produzir o design visual do nosso projeto. Ele nos permitiu criar layouts e protótipos interativos para o nosso e-commerce.
- Visual Studio Code: Utilizamos o Visual Studio Code como nosso ambiente de desenvolvimento para escrever e editar os códigos do projeto.
- Tecnologias Utilizadas
- O projeto é desenvolvido utilizando tecnologias web padrão, incluindo HTML, CSS e JavaScript para a parte front-end. Para a parte back-end, estamos utilizando

## Armazenamento Local (LocalStorage)

Utilizamos o LocalStorage para armazenar informações importantes do usuário, como produtos adicionados ao carrinho de compras e preferências de exibição. Isso nos permite fornecer uma experiência personalizada e persistente para os usuários, mesmo quando eles fecham o navegador ou atualizam a página.

### Funcionalidades do LocalStorage

- **Carrinho de Compras**: Os produtos adicionados ao carrinho de compras são armazenados no LocalStorage. Isso permite que os usuários continuem a navegar e a comprar produtos mesmo que saiam temporariamente do site ou atualizem a página.
- **Preferências de Exibição**: As preferências de exibição dos usuários, como layout de página, tema e idioma, também são armazenadas no LocalStorage. Isso garante uma experiência consistente para os usuários sempre que eles retornam ao site.

### Implementação

- A manipulação do LocalStorage é feita principalmente através do JavaScript, utilizando os métodos `localStorage.setItem()`, `localStorage.getItem()` e `localStorage.removeItem()` para armazenar, recuperar e excluir dados, respectivamente. Cada vez que o carrinho de compras é atualizado ou as preferências de exibição são modificadas, os dados são atualizados no LocalStorage para refletir as alterações mais recentes.

- Para garantir uma experiência suave e confiável, estamos constantemente validando e sincronizando os dados do LocalStorage com o estado atual do aplicativo, evitando inconsistências e erros.

### Funcionalidades Implementadas
- Nesta primeira semana de desenvolvimento, focamos na parte visual do site. Algumas das funcionalidades implementadas incluem:

- Página inicial com destaque para os produtos em destaque.
- Páginas individuais de produtos com informações detalhadas.
- Páginas de categoria para navegação fácil entre os produtos.
- Página de carrinho de compras para revisão e finalização das compras.