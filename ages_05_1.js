

let var1 = "o conteudo da var1"
let var2 = "o conteúdo da var 2"
const json = 
{
    "id": 1,
    "nome": "Jean Paul",
    "RA": 12313,
    "ativo": true,
    opera: function(a) {
        return eval(a)
    },
    "funcao": {
                cargo: "Professor",
                nivel: "DS1"
              }  
}
json.fone = "99999.9999"

console.log(formataJson(json))
json.nome = "dagoberto"
json.funcao.cargo="Diretor"
console.log(formataJson(json))
console.log(json.opera('(1+5)*3'))
json.formata = function(){
    return this.nome+" "+this.funcao.cargo+" "+this.funcao.nivel
}
console.log(JSON.stringify(json))
console.log(json.formata())

/*
let obj = {
    id: 1,
    nome: "Jean Paul",
    RA: 12313,
    ativo: true   
}
*/
