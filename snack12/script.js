/* 
creo un'altra funzione che controlla che la somma di due numeri x e Y sia pari
sommaPari(24214, 12451251) true se la somma mi da pari
false se la somma mi da dispari
*/

function isEven(number1, number2) {
  if ((number1 + number2) % 2 === 0) {
    return true;
  }
  return false;
}