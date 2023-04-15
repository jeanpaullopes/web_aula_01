const storage = window.localStorage //window.sessionStorage
const divCorpo = document.getElementById('corpo')
const edNum = document.getElementById('numero')
const arr = new Array()
console.log(divCorpo)
console.log(edNum)
if (storage.getItem("array") != null) {

    let arrTemp = JSON.parse(storage.getItem("array"))
    arrTemp.forEach((e)=> arr.push(e))
}

//arr.push("ola")

function incluir() {
    arr.push( edNum.value)
    storage.setItem('array', JSON.stringify(arr) )
    divCorpo.innerHTML = ""
    arr.forEach((e)=> divCorpo.innerHTML += e+", ")
}