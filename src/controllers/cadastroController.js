
const usuarioModels = require('../models/usuarioModel');

// Responsável por renderizar a página de cadastro de usuários
function exibirPaginaCadastro(request, response) {
  response.render('cadastro');
}

// Responsavel por adicionar um novo usuario
function adicionarUsuario(request, response) {
  // Fazendo uma destruturação do request.body
  const { nome, email, senha } = request.body;

  // Adicionando o novo usuario
  usuarioModels.adicionarUsuario(nome, email,senha);

  // Redirecionando para o login
  response.redirect('/');
}


module.exports = {
  exibirPaginaCadastro,
  adicionarUsuario
}