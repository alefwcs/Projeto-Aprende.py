let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let idade = document.querySelector('#idade')
let labelIdade = document.querySelector('#labelIdade')
let validIdade = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelCSenha = document.querySelector('#labelCSenha')
let validCSenha = false

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')
/*nessa parte do keyup, há uma validação da quantidade de caracteries em cada uma das caixas de cadastro(se tiver o tamanho certo a cor não ficará verde)*/
nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false

    }else{
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

usuario.addEventListener('keyup', ()=>{
    if(usuario.value.length <= 2){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuario *Insira no mínimo 3 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    }else{
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'border-color: green')
        validUsuario = true
    }
})

email.addEventListener('keyup', ()=>{
    if(email.value.length <= 4){
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'Email *Insira no mínimo 5 caracteres'
        email.setAttribute('style', 'border-color: red')
        validEmail = false
    }else{
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'Email'
        email.setAttribute('style', 'border-color: green')
        validEmail = true
    }
})

idade.addEventListener('keyup', ()=>{
    if(idade.value.length <= 1){
        labelIdade.setAttribute('style', 'color: red')
        labelIdade.innerHTML = 'Idade *Insira 2 caracteres'
        idade.setAttribute('style', 'border-color: red')
        validIdade = false
    }else{
        labelIdade.setAttribute('style', 'color: green')
        labelIdade.innerHTML = 'Idade'
        idade.setAttribute('style', 'border-color: green')
        validIdade = true
    }
})

senha.addEventListener('keyup', ()=>{
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    }else{
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
    }
})

confirmSenha.addEventListener('keyup', ()=>{
    if(senha.value != confirmSenha.value){
        labelCSenha.setAttribute('style', 'color: red')
        labelCSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        confirmSenha.setAttribute('style', 'border-color: red')
        validCSenha = false

    }else{
        labelCSenha.setAttribute('style', 'color: green')
        labelCSenha.innerHTML = 'Confirmar Senha'
        confirmSenha.setAttribute('style', 'border-color: green')
        validCSenha = true
    }
})
/*nessa função, inicia-se o armazenamento dos dados no localStorage, com a função json. Se todas as caixas de preenchimento estiverem corretas, cada item será posto em uma lista no gerenciador e se algo estiver vazio, haverá um alerta de erro*/
function cadastrar(){
    if(validNome && validUsuario && validEmail && validIdade && validSenha && validCSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                emailCad: email.value,
                idadeCad: idade.value,
                senhaCad: senha.value
            }
        )
        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSucess.setAttribute('style', 'display: block')
        msgSucess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(()=>{
            window.location.href = '../html/login.html'
        }, 2000)

    }else{
        msgError.setAttribute('style', 'display: block')
        //msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSucess.innerHTML = ''
        msgSucess.setAttribute('style', 'display: none')
        alert('Preencha todos os campos corretamente antes de cadastrar')
    }   
}