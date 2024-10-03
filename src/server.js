var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var enableHotReload = require("./hot-reload");

// Importando os controllers
var loginController = require("./controllers/loginController");
var cadastroController = require("./controllers/cadastroController");
var estoqueController = require("./controllers/estoqueController");
var session = require("express-session");



const app = express();

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Configurações do seu app Express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública
app.use(express.static(path.join(__dirname, "public")));

// configuração do express-session
app.use(
  session({
    secret:"chave-secreta",
    resave: false,
    saveUninitialized: false,
  })
)

// Habilitar hot-reload
enableHotReload(app);

// Rotas

// Rota para a página inicial
app.get("/", loginController.exibirPaginaLogin);
app.post("/autenticar", loginController.autenticarUsuario);


// Rota para a página de cadastro
app.get("/criar-conta", cadastroController.exibirPaginaCadastro);
 app.post('/criar-conta', cadastroController.adicionarUsuario);

// Rota para a página de estoque
app.get("/estoque", estoqueController.renderizarPaginaEstoque);


// Rota para a página de criar produto
app.get("/criar-produto", estoqueController.renderizarPaginaProduto);
app.post("/criar-estoque", estoqueController.criarEstoque);



// Inicie o servidor
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
