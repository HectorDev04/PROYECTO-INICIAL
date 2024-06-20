//Variables
let numSecret = 5;
let numUser = 0;
let intentos = 0;

while (numUser != numSecret) {
    numUser = prompt("Ingrese un numero entre 1 y 10 por favor: ");
    if (numUser == numSecret) {
        alert(`Acertaste, el número es: ${numUser}`);
    } else if (numUser > numSecret) {
        alert('El número secreto es menor');
    } else {
        alert('El número secreto es mayor');
    };
    intentos = intentos + 1
    alert(`Intento: ${intentos}`)
};