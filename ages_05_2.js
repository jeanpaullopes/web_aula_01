
function trocou(id) {
    document.getElementById('detalhe').innerText = repo.get(Number(id)).toString()
}

function formataJson( o ) {
    return "(" + o.RA + ") "+o.nome + " cargo: "+o.funcao.cargo
}

const repo = new Map()

console.log(users.length)
for( i = 0; i < users.length; i++) {
    console.log(users[i].name)
}
users.forEach(function(elemento) {
    console.log(elemento.name)
})
users.forEach((e)=>repo.set(e.id, new User(e) ))

console.log(repo)


