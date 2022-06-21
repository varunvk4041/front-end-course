const counter = document.getElementById('count')
const add = document.getElementById('add')
const sub = document.getElementById('sub')
const reset = document.getElementById('reset')
let inc=0

function increment(){
    counter.innerText = ++inc
}
function decrement(){
    counter.innerText = --inc
}
function reset_0(){
    counter.innerText = inc = 0
}
add.addEventListener('click',increment)
sub.addEventListener('click',decrement)
reset.addEventListener('click',reset_0)
