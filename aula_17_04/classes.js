class Contato {
    constructor(json) {
        this.nome = json.nome
        this.fone = json.fone
        this.email = json.email
    }
}

class Repositorio {
    constructor(arr) {
        this.contatos = new Map()
        arr.forEach( (element) =>{
            let c = new Contato(element)
            this.addContato(c)
        })
    }
    addContato(cont) {
        this.contatos.set(cont.fone, cont)
    }
    getContato(fone) {
        return this.contatos.get(fone)
    }
    //devolve um array de contatos do map
    getAllContatos() {
        let ret = []
        this.contatos.forEach( (valor) => ret.push(valor) )
        return ret
    }
}

class ContatoView {
    static toTR(contato) {
        let tr = document.createElement('tr')
        
        let td1 = document.createElement('td')
        td1.innerText = contato.nome
        
        let td2 = document.createElement('td')
        td2.innerText = contato.fone
        
        let td3 = document.createElement('td')
        td3.innerText = contato.email
        
        //if (contato.nome == 'jean') {
        //    tr.classList.add('marcaTexto')
        //}
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        
        return tr

    }
}

const servicos = {
    constroiTableContatos(repo, tbody) {
        console.log(tbody)
        tbody.innerHTML = ''
        repo.getAllContatos().forEach((c) => tbody.appendChild(ContatoView.toTR(c)) )
    },
    cadastrar(repo, tbody) {
        let temp = {
            nome: document.getElementById('inNome').value,
            fone: document.getElementById('inFone').value, 
            email: document.getElementById('inEmail').value
        }
        let obj = new Contato(temp)
        repo.addContato( obj ) 
        console.log(repo.getAllContatos())
        this.constroiTableContatos(repo, tbody)
    
    }
}

export { Contato, Repositorio, ContatoView, servicos }


