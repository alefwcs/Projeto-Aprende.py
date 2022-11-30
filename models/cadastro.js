//CONECTA OS ARQUIVO 'db.js' COM O DO 'cadastro.js'
const db = require('./db')

//VARIAVEl COM A REFERENTES TABELAS DO BANCO
const cadastro = db.sequelize.define('usuarios', {
    nome: {
        type: db.Sequelize.STRING
    },
    usuario: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    idade: {
        type: db.Sequelize.INTEGER
    },
    senha: {
        type: db.Sequelize.STRING
    }
})

module.exports = cadastro