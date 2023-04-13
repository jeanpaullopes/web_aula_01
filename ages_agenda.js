const dados = new Array()
//era modelo de testes
/*[
    {
        nome: "João",
        sobrenome: "Silva",
        fone: "55 55555.5555",
        email: "joaosilva@gmail.com"
    }
]
*/

dados.push({
    nome: "João",
    sobrenome: "Silva",
    fone: "55 55555.5555",
    email: "joaosilva@gmail.com"
})
dados.push({
    nome: "João2",
    sobrenome: "Silva2",
    fone: "55 55555.55552",
    email: "joaosilva2@gmail.com"
})
dados.push({
    nome: "João3",
    sobrenome: "Silva",
    fone: "55 55555.5555",
    email: "joaosilva@gmail.com"
})
dados.push({
    nome: "João4",
    sobrenome: "Silva2",
    fone: "55 55555.55552",
    email: "joaosilva2@gmail.com"
})
dados.push({
    nome: "João5",
    sobrenome: "Silva",
    fone: "55 55555.5555",
    email: "joaosilva@gmail.com"
})
dados.push({
    nome: "João6",
    sobrenome: "Silva2",
    fone: "55 55555.55552",
    email: "joaosilva2@gmail.com"
})

dados.push({
    nome: "João7",
    sobrenome: "Silva2",
    fone: "55 55555.55552",
    email: "joaosilva2@gmail.com"
})
dados.push({
    nome: "João8",
    sobrenome: "Silva",
    fone: "55 55555.5555",
    email: "joaosilva@gmail.com"
})
dados.push({
    nome: "João9",
    sobrenome: "Silva2",
    fone: "55 55555.55552",
    email: "joaosilva2@gmail.com"
})
dados.push({
    nome: "João10",
    sobrenome: "Silva",
    fone: "55 55555.5555",
    email: "joaosilva@gmail.com"
})
dados.push({
    nome: "João11",
    sobrenome: "Silva2",
    fone: "55 55555.55552",
    email: "joaosilva2@gmail.com"
})
dados.push({
    nome: "João12",
    sobrenome: "Silva",
    fone: "55 55555.5555",
    email: "joaosilva@gmail.com"
})
dados.push({
    nome: "João13",
    sobrenome: "Silva2",
    fone: "55 55555.55552",
    email: "joaosilva2@gmail.com"
})

console.log(dados)
alert("uma pausa")
dados.forEach((contato)=>{incluirLinhaTabela(contato)})



function incluirContato() {
    let contato = {
        nome: document.getElementById('edNome').value,
        sobrenome: document.getElementById('edSobre').value,
        fone: document.getElementById('edTel').value,
        email: document.getElementById('edEmail').value
    }
    document.getElementById('edNome').value = ''
    document.getElementById('edSobre').value= ''
    document.getElementById('edTel').value= ''
    document.getElementById('edEmail').value= ''
    dados.push(contato)
    incluirLinhaTabela(contato)
    console.log(dados)
}

function incluirLinhaTabela(user) {

    const tr = document.createElement('tr');
    console.log(tr)
    const td1 = document.createElement('td')
    td1.innerText = user.nome
    const td2 = document.createElement('td')
    td2.innerText = user.sobrenome
    const td3 = document.createElement('td')
    td3.innerText = user.fone
    const td4 = document.createElement('td')
    td4.innerText = user.email

    tr.appendChild(td1)
    
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    console.log(tr)
    document.getElementById('bodyAgenda').appendChild(tr)
    td1.classList.add('bold')
    /*
    document.getElementById('bodyAgenda').innerHTML +=    
      
            `<tr>
                <td>`+user.nome+`</td>
                <td>`+user.sobrenome+`</td>
                <td>`+user.fone+`</td>
                <td>`+user.email+`</td>
            </tr>`
    */        

}