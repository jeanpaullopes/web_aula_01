console.log("script05.js")

const repositorio = new Repo()

let obj = {
    id: 1,
    nome: "Lucas Tatsch Corrêa Spengler",
    cargo: "Professor" ,       
    unidade: "UniRitter",
    digital: true,
    sincrono: true
}

let pes = new Pessoa(obj)
pes.nome = "Viviane Godinho"
console.log(pes.descricao())
//console.log(obj.tratamento("Sr."))
//console.log(obj.soma(4,6))


console.log(dados.length)
//for (i = 0; i < dados.length; i++) {
//    console.log(dados[i])
//}
//dados.forEach(function(el){
//    console.log(el)
//})
dados.forEach((el)=> repositorio.addTodo(new Todo(el) ))
console.log(repositorio.todos)

function cadastrar() {
    let texto = document.getElementById("descricao").value
    let obj = {
        userId: 0,
        id: 0,
        title: texto,
        completed: false
    }
    let todo = new Todo(obj)
    repositorio.addTodo( todo )
}

function trocou(val) {
    let todo = repositorio.getTodo(val)
    if (todo != undefined) {
        document.getElementById("detalhe").innerHTML = TodoView.toHTML( todo )
    } else {
        document.getElementById("detalhe").innerHTML = "Código não encontrado"
    }
}

