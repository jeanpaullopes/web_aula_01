console.log(data.length)
/*
for (i=0; i < data.length; i++) {
    console.log(data[i].name)
}
data.forEach(function(elem){
    console.log(elem.name)
})
data.forEach(function(elem, i){
    console.log(i + ' '+ elem.name)
})
data.forEach((e) => console.log(e.name) )
 
*/
let bancoDeDados = new Array()
data.forEach(function(elem) {
    let obj = new User(elem)
    bancoDeDados.push(obj)
})
/*
console.log(data)
console.log(bancoDeDados)
console.log(data[0] instanceof User)
console.log(bancoDeDados[0] instanceof User)
console.log(JSON.stringify(bancoDeDados[0].toString()))

console.log(JSON.stringify(bancoDeDados[0]["name"]))
//console.log(data)


let arr = []
arr['primeiro'] = 1
arr[2] = 2
arr['segundo']=3
console.log(arr)
*/

/*
let arr1 = [1,2,3,4]
let arr2 = ["um", "dois", 3]
let arr3 = new Array()
console.log(arr)
console.log(arr1[2])
console.log(arr2[10])
console.log(arr3)



let a = 1
let b = 2
let dado = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
        }
      }
    }

let user = new User(dado)
//user.email = "sameck@gmail.com"
//user.fone = "55 5555.5555"
//console.log(user.descricao("Sr."))
//console.log(user.fullName)
//console.log(user.fullName2())
console.log(JSON.stringify(user) )



console.log( nomedafuncao() )

let obj = {
            id: 1,
            nome: "Jean Paul",
            cargo: {
                    descricao: "Professor",
                    nivel: "assistente"
                    },
            descricao: function() {
                return this.nome+" ("+this.cargo.descricao+" - "+this.cargo.nivel+")"
            }
          }
          console.log(obj)
          console.log(obj.descricao() )
function nomedafuncao() {
    return "o nome da função é nomedafuncao()"
}
*/