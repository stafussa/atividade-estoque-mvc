const usuarioModels = require('../models/usuarioModel');
const md5 = require('md5');

function exibirPaginaLogin(request, response) {
  response.render('login');
}

// Responsavel por autenticar o usuario
async function autenticarUsuario(request, response) {
  // pegando os dados do request.body
  const { email, senha } = request.body;

  // Buscando o usuario no banco de dados
  const usuario = await usuarioModels.buscarUsuarioPorEmail(email);

  // Verificando se o usuario existe
  if (usuario == undefined) {
    response.redirect('/');
    return;
  }

  // Verificando se a senha esta correta
  if (md5(senha) !== usuario.senha) {
    response.redirect('/');
    return;
  }


  //salvando os dados do usuario na sessão
  request.session.usuario = usuario;


  response.redirect('/estoque');
}

module.exports = {
  exibirPaginaLogin,
  autenticarUsuario
}