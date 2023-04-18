import { arr, start}   from "./modules.js"
const app = document.getElementById('app')
const btn = document.getElementById('btn')

//btn.addEventListener('click', click, false);
btn.onclick = click

function click() {
    start()
    app.innerHTML = arr.length
}

