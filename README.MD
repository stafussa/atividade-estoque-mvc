## Sobre o projeto
O projeto consiste em um aplicativo para gerenciar estoque.

## Tecnologias

- [NodeJS](https://nodejs.org/pt)
- [Express](https://expressjs.com/pt-br/)
- [MySQL](https://www.mysql.com/)
- [Arquitetura MVC](https://www.devmedia.com.br/introducao-ao-padrao-mvc/29308)
- [EJS](https://ejs.co/)


## Criar banco e tabela do projeto

```sql

USE app_estoque_mvc;

 CREATE TABLE usuarios(
id int primary key auto_increment,
nome varchar(255),
email varchar(255) unique,
senha varchar(255),
criadoEm date
);



CREATE TABLE estoque(
id int primary key auto_increment,
produto varchar(255),
fornecedor varchar(255),
quantidade varchar(255),
criadoEm date
);


```

## Como executar o projeto

```bash
## Clone o projeto
git clone https://github.com/stafussa/atividade-estoque-mvc.git

## Entre na pasta do projeto
cd gerenciador-estoque-mvc

## Instale as dependências
npm install

## Inicie o projeto
npm start
```

Made with ♥ by [douglas ferreira]:wave: