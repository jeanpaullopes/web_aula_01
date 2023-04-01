var global 
{
    a = 10
    var b = 20
}


console.log(b)
console.log(a)

function redirect() {
    //alert(global)
    window.location.href = 'meucv.html'
    
}  
function mostra() {
    alert(global)
}
function carregaTurmas(turma) {
    let div = document.getElementById("campoDados")
    div.innerHTML = div.innerHTML + turma.nome + "->" + turma.diaAula +")<br/>"
}

function load() {
    //JSON - Java Script Object Notation
    let obj = 
    {
        nome: "Jean",
        cargo: "Professor",
        id: 12345,
        turmas:[ 
                {
                    nome: "dev web",
                    diaAula: "sexta"
                },
                {
                    nome: "Praticas ESW",
                    diaAula: "quinta"
                },
                {
                    nome: "dev mobile",
                    diaAula: "sábado"
                },
                ]
    }
    console.log(obj)
    console.log(obj.turmas.diaAula)
    
    obj.turmas.forEach(carregaTurmas)
    
    obj.turmas.forEach((turma) => {
        let div = document.getElementById("campoDados")
        div.innerHTML = div.innerHTML + turma.nome + "->" + turma.diaAula +")<br/>"
        
    })
    
    
    let texto = "the quick brown fox jumps over the lazy dog."
    console.log(texto)
    console.log(texto == texto.replace('fox', 'cat'))
    console.log(texto)
    
    let arr2 = new Array()
    let arr = [1,2,"asdas", 5, false]
    arr.forEach((elemento, idx)=>{elemento = 0; console.log(idx+" -> "+elemento); })
    console.log(arr)
    /*
    global = 30
    setTimeout(()=>{
        let a = 1
        for(; a < 10; a ++) {
            console.log(a)
        }
    }, 5000)
    */
}   

function clique() {
    console.log(new Number(document.getElementById('valor1').value))
    document.getElementById('resultado').innerHTML = new Number(document.getElementById('valor1').value)
                                                    +
                                                    new Number(document.getElementById('valor2').value)
}
/*
funcao clickBtn
parametros: num - número a ser incluido no visor

comportamento:
concatena o valor recebido pelo parametro num ao innerHTML da div visor
*/
function cliqueBtn(num) {
    //console.log(num)
    if (document.getElementById('visor').innerHTML == '0') {
        document.getElementById('visor').innerHTML = ''
    }
    document.getElementById('visor').innerHTML = document.getElementById('visor').innerHTML + num
}

