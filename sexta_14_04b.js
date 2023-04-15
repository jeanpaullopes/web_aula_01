arr.push(1)
arr.push([1,2,3])
arr.push(true)

console.log(arr[0])
//arr.forEach((e)=>arr.pop())
console.log(arr.length)
//arr.forEach( function(elemento, indice) {
//    console.log(indice+"->"+elemento)
//})
arr.forEach((elemento, indice) => console.log(indice+"->"+elemento))
if (' ') {
    console.log("verdadeiro")
} else {
    console.log("falso")
}

while(arr.length) {
    console.log(arr.length)
          arr.pop();
        }
