console.log(' Hola, món! 🎉')
alert("Benvingut a la teva primera pràctica de JavaScript!")



const nom = 'Pere'
const edat = '25'
const ciutat = 'Girona'
const num1 = 15
const num2 = 7

//-----------------------------------
console.log(`Hola, soc ${nom}, tinc ${edat} anys i visc a ${ciutat}.`)
console.log( `La suma de ${num1} i ${num2} es:`, num1 + num2)
console.log( `La resta de ${num1} i ${num2} es`, num1 - num2)
console.log( `La multiplicacio de ${num1} i ${num2} es:`, num1 * num2)
console.log(  `La Divisio de ${num1} i ${num2} es;`, num1 % num2)
//-------------------------------------
let nomusr  = prompt('Quin es el teu nom?')
console.log( "El nom d'usuari es:",nomusr)
alert( `Hola, ${nomusr}`)

const edatusr = parseInt( prompt ( 'Quina edat tens?'))
if (edatusr>=18) {
    console.log("Ets major d’edat. Pots accedir al contingut.")
    alert("Ets major d’edat. Pots accedir al contingut.")
}
else {
    console.log("Ets menor d’edat. Ho sentim, però no pots accedir.")
    alert("Ets menor d’edat. Ho sentim, però no pots accedir.")
}
// Bucle for que imprimeix els numeros de l'1 al 10
for (let i = 1; i <= 10; i++) {
    console.log( 'Numero:',i)
}

let count = 5
while ( count>=0){
    console.log(count) //Muestra el count
    count-- //Fa que decreixi el numero
   
}  

console.log("BOOM! ")

function suma(a,b){
    return(a + b)
}

console.log("La suma de 5 i 3 es:", suma(5,3))


console.log( "El numero 4 es parell?",isEvenOrOdd(4))
console.log( "El numero 25 es parell?",isEvenOrOdd(25))

function isEvenOrOdd(number) {
    if (number  === 0) {
        console.log("El número es zero")
    } 
    if (number % 2 === 0) {
        console.log("Es parell")
    }
    else {
        console.log("Es senar")
    }
}


document.querySelector('.mostrarMissatge').addEventListener('click', function() {
    alert('Has fet clic!')
})

//document.querySelector('h1').style.color = 'red'

document.querySelector('h1').style.fontSize = '148px'

document.querySelector('h1').textContent = 'Hola, hola, soy poco creativo'

document.querySelector('h1').insertAdjacentHTML('afterend', '<h2>Esto es una mierda</h2>')
const paragraf = document.createElement('p')
paragraf.textContent = 'Bloodborne God'
document.body.appendChild(paragraf)

document.body.removeChild(paragraf)

document.querySelector('h1').classList.add('colorBlue')