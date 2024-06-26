/*
Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.


*/

//Desafio 1
console.log('Hola, bienvenidos!');


//Desafio 2
let nombre = 'Hector';
console.log(`Hola ${nombre}, bienvenido!`);

//Desafio 3
let name = 'Hector';
alert(`Hola ${nombre}.`);

//Desafio 4
let respuesta = prompt('¿Cuál es el lenguaje de programación que más te gusta?')
console.log('Respuesta: ' + respuesta);

// Desafio 5
let valor1 = 10;
let valor2 = 20;
let resultado = (valor1 + valor2);
console.log(`La suma de ${valor1} y ${valor2} dio un total de: ${resultado}`);

// Desafio 6
let n1 = 30;
let n2 = 10;
let result = (n1 - n2);
console.log(`La resta de ${n1} y ${n2} dio un total de: ${result}`);

// Desafio 7
let edad = prompt('¿Cual es su edad?')
if (edad >= 18) {
    console.log('Usted es mayor de edad.');
} else {
    console.log('Usted es menor de edad.');
}

//Desafio 8
let num = prompt("Ingrese un número")
if (num > 0) {
    console.log('Es positivo');
} else if (num < 0) {
    console.log('Es negativo');
} else {
    console.log('Es 0');
}

//Desafio 9
let contador = 0;
while (contador < 10) {
    contador++
    console.log(contador);
}

//Desafio 10
let nota = 8;
if (nota >= 7) {
    console.log('Aprobado');
} else {
    console.log('Reprobado');
}

//Desafio 11
let numRandom = Math.random();
console.log(numRandom);

//Desafio 12
let numIntRandom = Math.floor(Math.random() * 10) + 1;
console.log(numIntRandom);

//Desafio 13
let numRandomInt = Math.floor(Math.random() * 1000) + 1;
console.log(numRandomInt);
