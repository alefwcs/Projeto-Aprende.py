//CHAMA A FUNÇÃO SEQUELIZE
const Sequelize = require ("sequelize");
//FAZ A REQUISIÇÃO DO SEQUELIZE QUE SICRONIZA O NODE COM O BANCO
const sequelize = new Sequelize ("banco_aprendepy", "root", "al1gi2no3ma4@", {
    host: 'localhost',
    dialect: 'mysql',
    query:{raw:true}
});

//USADO PARA INCLUIR JAVA NO NODE, NO CASO, O SEQUELIZE
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

//VERIFICA SE A CONECXÇÃO FOI FEITA CORRETAMENTE E ENVIA UMA MENSAGEM
sequelize.authenticate()
.then(function(){
    console.log("Conexão realizada com sucesso!");
}).catch(function(){
    console.log("erro");
})
