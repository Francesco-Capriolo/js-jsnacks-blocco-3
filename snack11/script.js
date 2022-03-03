/**
 *
 *
   Crea due tag div con due id diversi:
   un div avrà il testo colorato di rosso mentre l'altro di verde.
   Partendo da un array di numeri, creo una funzione che controlla se siano pari o dispari.
   Se sono pari li stampo nell'div "rosso",
   se sono dispari li stampo nell'div "verde".
 *
 */

//prendiamo i div che hanno un ID e creamo una variabile
const redDiv = document.getElementById("red");
const greenDiv = document.getElementById("green");

//creamo una lista
const numberList = [2, 4, 6, 3, 11, 33, 47];
console.log(number);

//creamo una funzione che ci dice se è pari o dispari
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

//creamo un ciclo per vedere se ogni numero della lista sia pari/dispari
//e li inseriamo nei rispettivi div
for (let i = 0; i < numberList; i++) {
  if (isEven(numberList[i])) {
    console.log(numberList[i] + "è un numero pari");
    redDiv.innerHTML += numberList[i] + ",";
  }
  console.log(numberList[i] + "è un numero dispari");
  greenDiv.innerHTML += numberList[i] + ",";
}