var val1 = document.getElementById('val1')
function soma() {
    console.log('ponto 1')
    let val2 = document.getElementById('val2').value
    console.log(val1)
    let total = document.getElementById('total')
    console.log(total)
    total.value = Number(val1.value) + Number(val2)
    val1.value = ''
    console.log('ponto 4')
}
function digita(digito) {
    val1.value = val1.value + digito
}
function digita2() {
    val1.value += 2
}