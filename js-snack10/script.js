/**
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera N array, ognuno formato da 10 numeri casuali tra 4 e 4532.
    Ogni volta che ne crei uno, stampalo a schermo.
 */

// creo una variabile con dialogo
const userNumber = parseInt(prompt('inserisci un numero'));


//lo richiedo fino a che mi da un numero e non una stringa
while (isNaN(userNumber)) {
    userNumber = parseInt(prompt('inserisci un numero'));

}

// se mi chiede un numero superiore a 100 allora si decide di scrivere 100
if (userNumber >= 100) {
    userNumber = 100;
}

// creo un ciclo che mi apro un array dove la lunghezza max dell'
// array è di 10 ed inserisco un numero randomico fino a 4532
// fino al riempimento dell' array
for (i = 0; i < userNumber; i++) {
    const tempArray = [];
    while (tempArray.lenght < 10) {
        tempArray.push(Math.floor(Math.random() * 4532));
        tempArray++;
    }
    console.log(tempArray);
}