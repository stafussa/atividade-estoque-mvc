const bancoDeDados = require('../config/banco-de-dados');


function adicionarEstoque(produto, fornecedor, quantidade) {
 
  bancoDeDados.query(`
    INSERT INTO estoque (produto, fornecedor, quantidade, criadoEm)
    VALUES ('${produto}', '${fornecedor}', '${quantidade}', now())
    `)
    .then( ()=> {
      console.log('estoque criado com sucesso!');
    })
    .catch( (error) => {
        console.error('Erro ao criar estoque, ', error);
    })
}

async function obterProduto() {

   const estoque = await bancoDeDados.query(`
    SELECT * FROM estoque
    `)

    return estoque[0];

}


module.exports = { adicionarEstoque, obterProduto }