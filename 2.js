 const numeros = document.getElementById('number')


       
function random(min, max){
let random = (Math.floor(Math.random() * (max - min + 1) + min))

return random
}

let num = random(1,49)
console.log(num)

numeros.innerHTML = random(1,49)
numeros.innerHTML = random(1,49)
numeros.innerHTML = random(1,49)