//CHAMA TODOS OS METODOS INSTALADOS
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require ('path');
const handlebars = require('express-handlebars');
//const {body, validationResult} = require("express-validator");

//CHAMA OS AQUIVOS DO BANCO PARA A CONEXÃO
const cadastroo = require('./models/cadastro');
const db = require('./models/db');

app.engine('handlebars',  handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//CARREGAR OS ARQUIVOS EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//DEIXA CLARO QUAIS SÃO OS ARQUIVOS ESTÁTICOS
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/img', express.static('img'));

//PERMITE OBETER AS INFORMAÇÕES DO CORPO DO SITE
app.use(express.urlencoded({extended:true}));

// ----------------- ROTAS INICIAIS -----------------
//PAGINA HOME
app.get("/", async (req, res) =>{
    res.sendFile(__dirname + "/Home.html");
});

//PAGINA DE LOGIN
app.get("/Login", async (req, res) =>{
    res.sendFile(__dirname + "/html/login.html");
});

//PAGINA DE CADASTRO
app.get("/Cadastro", async (req, res) =>{
    res.sendFile(__dirname + "/html/cadastro.html");
});

// --------- ROTAS DAS PRIMEIRAS PAGINAS ---------
//PAGINA INICIAL
app.get("/Pagina_Incial", async(req, res) => {
    res.sendFile(__dirname + "/html/TelaPrincipall.html");
});

//PAGINA DE MUNDOS
app.get("/Mundos", async(req, res) => {
    res.sendFile(__dirname + "/html/mundo1.html");
});

//PAGINA DO RANKING
app.get("/Ranking", async(req, res) => {
    //res.sendFile(__dirname + "/html/ranking.html");
    cadastroo.findAll().then(function(usuarios){
        res.render('../views/ranking.handlebars', {usuarios : usuarios});
    });
});

//PAGINA DO SOBRE
app.get("/Minha_Conta", async(req, res) => {
    res.sendFile(__dirname + "/html/fontes.html");
}); 

app.get("/Fontes_Exercicios", async(req, res) => {
    res.sendFile(__dirname + "/html/fontesExercicios.html");
});

app.get("/Fontes_Mundo1", async(req, res) => {
    res.sendFile(__dirname + "/html/fontesMundo1.html");
});

app.get("/Fontes_Mundo2", async(req, res) => {
    res.sendFile(__dirname + "/html/fontesMundo2.html");
});


//PAGINA DOS EXERCICIOS PRATICOS
app.get("/Exercicios", async(req, res) => {
    res.sendFile(__dirname + "/html/exercicio.html");
});



// --------- BOTÃO MUNDOS ---------
//PAGINA DOS PLANETAS
app.get("/Planeta_1", async(req, res) => {
    res.sendFile(__dirname + "/html/planeta1.html");
});
app.get("/Planeta_2", async(req, res) => {
    res.sendFile(__dirname + "/html/planeta2.html");
});
app.get("/Planeta_3", async(req, res) => {
    res.sendFile(__dirname + "/html/planeta3.html");
});

// --------- ROTAS DOS MODULO ---------
app.get("/Modulo1", async(req, res) => {
    res.sendFile(__dirname + "/html/modulo1.html");
});
app.get("/Modulo2", async(req, res) => {
    res.sendFile(__dirname + "/html/modulo2.html");
});
app.get("/Modulo3", async(req, res) => {
    res.sendFile(__dirname + "/html/modulo3.html");
});
app.get("/Modulo4", async(req, res) => {
    res.sendFile(__dirname + "/html/modulo5.html");
});

//--------- ROTAS DO MODULO BASICO 1 - OPERADORES MATEMATICOS ---------
app.get("/Modulo3/Operadores_logicos", async(req, res) => {
    res.sendFile(__dirname + "/html/operadoresLogicos.html");
});
app.get("/Modulo3/Operadores", async(req, res) => {
    res.sendFile(__dirname + "/html/operadores.html");
});
app.get("/Modulo3/Operadores_relacionais", async(req, res) => {
    res.sendFile(__dirname + "/html/operadoresRelacionais.html");
});
app.get("/Modulo3/Quiz", async(req, res) => {
    res.sendFile(__dirname + "/html/quiz.html");
});

//--------- ROTAS DO MODULO BASICO 1 - QUIZ ---------
app.get("/Modulo2/QuizVariavel", async(req, res) => {
    res.sendFile(__dirname + "/html/quiz variavel.html");
});
app.get("/Modulo4/Quiz", async(req, res) => {
    res.sendFile(__dirname + "/html/quiz.html");
});

// --------- ROTAS DO MODULO INTERMEDIARIO 2 ---------
app.get("/Modulo5", async(req, res) => {
    res.sendFile(__dirname + "/html/modulo4.html");
});
app.get("/Modulo6", async(req, res) => {
    res.sendFile(__dirname + "/html/modulo6.html");
});
app.get("/Modulo7", async(req, res) => {
    res.sendFile(__dirname + "/html/modulo7.html");
});

// --------- ROTAS DO MODULO INTERMEDIARIO 2 - MODULO 5 ---------
app.get("/Modulo5/Condicional", async(req, res) => {
    res.sendFile(__dirname + "/html/estruturaCondicoes.html");
});
app.get("/Modulo5/Repeticao", async(req, res) => {
    res.sendFile(__dirname + "/html/estruturaRepeticao.html");
});
app.get("/Quiz", async(req, res) => {
    res.sendFile(__dirname + "/html/quiz estruturas.html");
});


//--------- ROTAS DOS EXERCICIOS PRATICOS ---------
app.get("/Exercicios/Sequencial", async(req, res) => {
    res.sendFile(__dirname + "/html/exercicioSequencial.html");
});
app.get("/Exercicios/Decisao", async(req, res) => {
    res.sendFile(__dirname + "/html/exercicioDecisao.html");
});
app.get("/Exercicios/Repeticao", async(req, res) => {
    res.sendFile(__dirname + "/html/exercicioRepeticao.html");
});
app.get("/Exercicios/Lista", async(req, res) => {
    res.sendFile(__dirname + "/html/exercicioListas.html");
});
app.get("/Exercicios/Funcao", async(req, res) => {
    res.sendFile(__dirname + "/html/exercicioFuncoes.html");
});
app.get("/Exercicios/String", async(req, res) => {
    res.sendFile(__dirname + "/html/exercicioString.html");
});
app.get("/Exercicios/Arquivo", async(req, res) => {
    res.sendFile(__dirname + "/html/exercicioArquivo.html");
});
app.get("/Exercicios/Classes", async(req, res) => {
    res.sendFile(__dirname + "/html/exercicioClasses.html");
});


//CADASTRAR DADOS NO BANCO
app.post("/Cadastro", async(req, res) => {
    cadastroo.create({ //CRIA NOVOS DADOS NA VARIAVEL cadastroo QUE SE REFERE AO BANCO
        nome: req.body.nome,
        usuario: req.body.usuario,
        email: req.body.email,
        idade: req.body.idade,
        senha: req.body.senha
    }).then(function(){ //ENTÃO SE TUDO ESTIVER DE ACORDO, REDIRECIONA PARA A PAGINA DE LOGIN
        res.redirect("/Login");
    }).catch(function(){
        res.send("Erro ao cadastrar!"); //SE NÃO ESTIVER DE ACORDO, MANDA UMA MENSAGEM DE ERRO
    })
});

//lOGIN NO SITE COM O BANCO
app.post('/Login', async(req, res) => {
    const user = await cadastroo.findOne({ //VARIAVEL CUJA FUNÇÃO É ENCONTRAR NO BANCO 
        attributes: ['id', 'nome', 'usuario', 'email', 'idade', 'senha'], // OS DADOS QUE O CLIENTE DIGITOU
        where: {
            //nome: req.body.nome,
            usuario: req.body.usuario,
            senha: req.body.senha
        }
    });

    if(user === null){ //SE NÃO HOUVER DADOS NO BANCO REFERENTE AO DIGITADO, OCORRE UM ERRO
        //alert('Usuário ou a senha incorreta! Nenhum usuário com este e-mail');
        erro: true;
        mensagem: "Erro: Usuário ou a senha incorreta! Nenhum usuário com este e-mail";
        
    }
    else{ // SE TUDO ESTIVER CERTO, REDIRECIONA PARA A PAGINA INICIAL
        res.render('../views/TelaPrincipal.ejs', {user});
    }
});


//SERVIDOR DO AR!
app.listen(80, () => {
    console.log("Servidor inciado na porta 80: http://aprende.py:80");
});


/* app.get("/Minha_Conta", async(req, res) => {
    cadastroo.findAll().then(function(usuarios){
        res.render('../views/minhaconta.handlebars', {usuarios : usuarios});
    });
}); */