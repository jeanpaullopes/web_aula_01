const storage = window.localStorage //window.sessionStorage
console.log(storage.getItem('usuario'))

var user
if (storage.getItem('usuario') != null) {
    user = JSON.parse(storage.getItem('usuario'))
    document.getElementById('edLogin').value = user.login
    document.getElementById('edNome').value = user.nome
    document.getElementById('edSenha').value = user.senha
}

function carrega(obj) {
    document.getElementById('corpo').innerHTML="olá "+obj.nome
}

