// DESAFIO 1
let diaSemana = prompt('Ingrese un dia de la semana: ')

//CONVERTIR ENTRADA A MINUSCULAS
diaSemana = diaSemana.toLowerCase();
if (diaSemana === "sabado" || diaSemana === "domingo") {
    alert('Buen fin de semana')
} else {
    alert('Buena semana')
}

// DESAFIO 2
let numero = prompt('Ingrese un numero: ')
if (numero > 0) {
    alert('Es positivo')
} else if (numero < 0) {
    alert('Es negativo')
} else {
    alert('Es 0')
}

// DESAFIO 3
let puntuacion = 150;
if (puntuacion >= 100) {
    alert('¡Felicidades, has ganado!')
} else {
    alert('Intentalo nuevamente para ganar.')
}

// DESAFIO 4
let saldo = 1000;
alert(`Hola, su saldo actual es: ${saldo}`);

// DESAFIO 5
let user = prompt('Ingrese su nombre: ')
alert(`Hola ${user}, bienvenido!`)