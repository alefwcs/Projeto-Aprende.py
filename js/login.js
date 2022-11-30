function noBack(){window.history.forward(0)}
    
    noBack();
    
    window.onload=noBack;
    
    window.onpageshow=function(evt){if(evt.persisted)noBack()}
    
    window.onunload=function(){void(0)}

function entrar(){
    /*Nessa primeira parte, inicia-se as variaveis e o reconhyecimento do que foi digitado nos inputs, tudo que foi digitado vai ser verificado no gerenciador localStorage se estão na lista criado do "banco de dados"*/
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }
    /*json é a função do localStorage*/
    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) =>{
    
        if(usuario.value == item.userCad && senha.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })
    /*aqui ocorre a validação, se o que foi digitado na senha e no usuário for igual ao que existe no banco, a pessoa pode acessar a pagina de inicio*/
    if(usuario.value == userValid.user && senha.value == userValid.senha){
        window.location.href = '/Pagina_Incial'

        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        localStorage.setItem('token', token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))
        

    }else{
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')

        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
        alert('Usuário ou a senha incorreta! Nenhum usuário com este e-mail');
        
        usuario.focus()
    }
}