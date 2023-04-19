

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
    removeContato(fone) {
        this.contatos.delete(fone)
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
    static rebildTBody(arr, emementBody) {
        emementBody.innerHTML = ''
        arr.forEach((contato)=> emementBody.appendChild( ContatoView.toTR(contato) ))
    }

    static formContato(c) {

        let in1 = document.createElement('input')
        in1.id = 'inNome'
        in1.value = c.nome
        let in2 = document.createElement('input')
        in2.id = 'inFone'
        in2.value = c.fone
        let in3 = document.createElement('input')
        in3.id = 'inEmail'
        in3.value = c.email
        let btn = document.createElement('button')
        btn.innerText = "Gravar"
        btn.onclick = () => {div1.innerHTML = ''}
        let divEdit = document.createElement('div') 
        divEdit.appendChild(in1)
        divEdit.appendChild(in2)
        divEdit.appendChild(in3)
        divEdit.appendChild(btn)
        return divEdit
 
    }



}

export { Contato, Repositorio, ContatoView }
