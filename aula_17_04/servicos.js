import { ContatoView } from "./classes"

const servicos = {
    constroiTableContatos(repo, tbody) {
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
        tbody.innerHTML = ''
        this.constroiTableContatos(repo)
    
    }
}

//export { servicos }