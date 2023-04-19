import { Contato, Repositorio, ContatoView } from "./classes.js";

const btnClick = document.getElementById("btnClick")
const tbody = document.getElementById('tBodyAgenda')
const div1 = document.getElementById('div1')


let a = [
{
    nome: "João",
    sobrenome: "Silva",
    fone: "55 55555.55",
    email: "joaosilva@gmail.com"
},
{
    nome: "João2",
    sobrenome: "Silva2",
    fone: "55 55555.55552",
    email: "joaosilva2@gmail.com"
},

{
    nome: "João3",
    sobrenome: "Silva",
    fone: "55 55555.5555",
    email: "joaosilva@gmail.com"
},
 {
    nome: "João4",
    sobrenome: "Silva2",
    fone: "55 55555.552",
    email: "joaosilva2@gmail.com"
}]

//a.push({nome:"Jean", fone: "9999.9999", email: "jean.lopes@ulife.com.br"})


const repositorio = new Repositorio( a )




ContatoView.rebildTBody( repositorio.getAllContatos(), tbody )

btnClick.onclick = ()=>{
    div1.appendChild( ContatoView.formContato( repositorio.getContato('55 55555.552')))
}




