//Variables
let numSecret = 5;
let numUser = 0;
let intentos = 1;
let maxIntentos = 3;

while (numUser != numSecret) {
    // REALIZAMOS LA COMPARACION
    numUser = prompt("Ingrese un numero entre 1 y 10 por favor: ");
    if (numUser == numSecret) {
        alert(`Acertaste, el número es ${numUser} Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else if (numUser > numSecret) {
        alert('El número secreto es menor');
    } else {
        alert('El número secreto es mayor');
    };
    // INCREMENTAMOS EL CONTADOR CUANDO NO ACIERTA
    intentos++
    if (intentos > maxIntentos) {
        alert('Llegaste al limite de intentos')
        break;
    };
};