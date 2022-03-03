/**
Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 200.
crea due liste, entrambe devono arrivare almeno a 200, in una ci metti i numeri inseriti pari e nell 'altra i dispari
 */

//mi creo delle liste
let list = [];
let listOdd = [];
let listEven = [];

//creo una variabile
let sum = 0;
//contenitore
let i = 0;

//Continua a chiedere i numeri all'utente e a inserirli nell'array
// fino a quando la somma degli elementi è minore di 200.
while (sum < 200) {
    // li inserisco nella lista
    list.push(parseInt(prompt("Inserisci i numeri")));
    //se i numeri sono pari li pusho nell'array(listEven)
    if (list[i] % 2 == 0) {
        listEven.push(list[i]);
    } else {
        listOdd.push(list[i]);
    }

    //prendo la somma e aggiungo all'indice indicato tra le quadre dell'array
    sum += list[list.length - 1]
    i++;

}

console.log(list);
console.log(sum);
console.log(listEven);
console.log(listOdd);