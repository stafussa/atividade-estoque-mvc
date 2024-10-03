// importando as dependências
const md5 = require('md5');
const bancoDeDados = require('../config/banco-de-dados');

function adicionarUsuario(nome, email, senha,) {

  // Adicionando o novo usuario
  bancoDeDados.query(`
    INSERT INTO usuarios (nome, email, senha, criadoEm) 
    VALUES ('${nome}', '${email}', '${md5(senha)}', now())
    `)
    .then(() => {
      console.log('Usuário criado com sucesso!')
    })
    .catch((erro) => {
      console.error('Erro ao inserir dados, ', erro)
    })
}

async function buscarUsuarioPorEmail(email) {

  const usuario = await bancoDeDados.query(`
    SELECT * FROM usuarios WHERE email = '${email}'
    `);

  return usuario[0][0]
}



module.exports = {

  adicionarUsuario,
  buscarUsuarioPorEmail

}