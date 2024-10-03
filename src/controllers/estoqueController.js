const produtoModels = require("../models/produtoModel");

// Responsável por renderizar a página de estoque
async function renderizarPaginaEstoque(request, response) {
  const estoque = await produtoModels.obterProduto();
  response.render("estoque",{estoque});
}

// Responsável por renderizar a página de cadastro de produto
function renderizarPaginaProduto(request, response) {
  response.render("criarProduto");
}


// Responsavel por adicionar um novo evento
function criarEstoque(request, response) {
  // Fazendo uma destruturação do request.body
  const { titulo, local, Quantidade } = request.body;

  // Adicionando o novo evento
  produtoModels.adicionarEstoque(titulo, local, Quantidade);
  response.redirect('/estoque');
}

module.exports = {
  renderizarPaginaEstoque,
  renderizarPaginaProduto,
  criarEstoque
};
