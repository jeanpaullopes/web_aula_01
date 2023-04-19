import { Contato, Repositorio, ContatoView } from "./classes.js"
import { servicos } from "./servicos.js"

//constantes que representam os elementos do HTML
const tbody = document.getElementById('tBodyAgenda')
const btGrava = document.getElementById('btnGrava')



// ou na forma elegante
//btGrava.addEventListener('click', cadastrar, false);

/* aquela explicação viajada do profe....
const div = document.getElementById('dados')

div.innerHTML="<span style='color:#f00;'>asdasdasdasd</span>"
let s = document.createElement('span')
s.innerText="sdfsfsdfsdfsdfsdfsdf"
s.style.color = "#0f0"
div.appendChild(s)
*/
/*
const mockDB = []

mockDB.push( 
    {
        nome: "jean",
        fone: "99999.9999",
        email: "jean.lopes@ulife.com.br"
    })
mockDB.push( 
        {
            nome: "fulano",
            fone: "99998.9999",
            email: "fulano@ulife.com.br"
        })
*/    
const repo = new Repositorio([])

// tem que delegar os métodos para os eventos dos elementos
btGrava.addEventListener('click', (evt) => servicos.cadastrar(repo, tbody), false);
//btGrava.onclick = function() {servicos.cadastrar(repo, tbody)}


servicos.constroiTableContatos(repo, tbody)

