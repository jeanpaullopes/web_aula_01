//console.log('antes do p2 ' + a + b)
function mudouId(id) {
    document.getElementById('result').innerHTML = 
    TodoView.toHTML(repositorio.getTodo(Number(id)))
}


function detalheUser(id) {
    document.getElementById("detalhe"+id).innerHTML = TodoView.toHTML(
        repositorio.getTodo(id))
}