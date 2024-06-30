// Variables
let numUser = 0;
let numMaxPosible = 50;
let numSecret = Math.floor(Math.random() * numMaxPosible) + 1;
let maxIntentos = 5;
let intentos = 1;

while (numUser != numSecret) {
    // REALIZAMOS LA COMPARACION
    numUser = parseInt(prompt(`Ingrese un numero entre 1 y ${numMaxPosible} por favor: `));
    if (numUser == numSecret) {
        alert(`Acertaste, el número es ${numUser} Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
    } else if (numUser > numSecret) {
        alert('El número secreto es menor');
    } else {
        alert('El número secreto es mayor');
    };
    // INCREMENTAMOS EL CONTADOR CUANDO NO ACIERTA
    intentos++
    if (intentos > maxIntentos) {
        alert(`Llegaste al limite de intentos, el número era: ${numSecret}`)
        break;
    };
};