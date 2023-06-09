/*IMPORTA O PACOTE DO EXPRESS PARA O SCRIPT index.js*/
const express = require('express');
const routesCategoria = require('./route/routesCategorias');

const routesLivro = require('./route/routesLivros');


// const routesLivros = require('./route/routesLivros');


/*TORNA O EXPRESS EXECUTÁVEL DENTRO DO SCRIPT inxdex.js
ATRAVÉS DA CONSTANTE app
*/
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', routesCategoria);
app.use('/', routesLivro);

/** EXEMPLOS DE ROTA **/
// app.get('/', function (req, res) {
//     res.send('RESPOSTA DA ROTA RAIZ DA APLICAÇÃO');
// });

// app.get('/teste', function (req, res) {
//     res.send('RESPOSTA DA ROTA TESTE DA APLICAÇÃO');
// });

/*
CRIAR UM WEBSERVER CAPAZ DE RECEBER REQUISIÇÕES VIA
HTTP
PARAMETROS DO listem
1 - PORTA LÓGICA (OBRIGATÓRIA)
2 - CALLBACK (OPCIONAL)
*/
app.listen(3000, () => {
    console.log('SERVIDOR RODANDO EM - http://localhost:3000');
});