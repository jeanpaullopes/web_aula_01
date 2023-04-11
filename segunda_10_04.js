


const storage = window.localStorage// window.sessionStorage //

let user = null
function senha(pass) {
    const inSenha = document.getElementById('inSenha')
    console.log(inSenha.type)
    if (pass) {
        inSenha.type = 'password'
    } else {
        inSenha.type = 'text'
    }
}
function gravaUser() {
    user = {
        id: 'desconhecido01',
        nome: 'usuário não cadastrado',
        senha: 'senha12345'
    }
    storage.setItem('user', JSON.stringify(user))
}
function gravaLogin() {
    user = {
        id: document.getElementById('inUser').value,
        nome: document.getElementById('inNome').value,
        senha: document.getElementById('inSenha').value
    }
    storage.setItem('user', JSON.stringify(user))
}


function iniciar() {
    user = JSON.parse(storage.getItem('user'))
    console.log(user)
    if (user != null && user.id != 'desconhecido01') {
        window.location.href='segunda_10_04_02.html'
    }
/*
    if (user == null) {
        alert('vai ter que carregar o user')
    } else {
        alert('o user já foi carregado')
    }
    */
}