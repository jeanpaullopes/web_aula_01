const v = "1"


{
    var a = 1
    let b = 2
}

console.log("olá mundo a -> "+ a)
console.log("olá mundo b -> "+ b)
if (a == "1" ) {
    console.log("a é igual a \"1\"")
} else {
    console.log("a NÃO É igual a \"1\"")
    
}




const g = "asdads"
console.log(g[3])

console.error("deveria ser um erro")
console.warn("e aqui um aviso")
console.debug("e isto é um debug")
console.info("esta é uma info")

const tit1 = document.getElementById('title_1')
//tit1.style.color = '#ff0000'
//tit1.innerHTML = "agora trocando o conteúdo do título"
b = 2 + Number(a)
console.log("no terceiro bloco de script")
console.info(a)
// document.body.innerHTML = 'olá mundo'

function clique() {
    document.getElementById('campo').innerHTML='tu clicou '+a+'x';
    a++;
}
function tecla(tcl) {
    document.getElementById('display').innerHTML=tcl;   
}

function soma() {
    document.getElementById('result').innerHTML = Number(document.getElementById('val1').value) +
                                                  Number(document.getElementById('val2').value)
}
