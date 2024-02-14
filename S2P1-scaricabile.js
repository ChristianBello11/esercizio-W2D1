



//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*

let x = 30
let y = 20
let numeroGrande

if (x < y){
  console.log(numeroGrande = y)
} else if (x > y){
  console.log(numeroGrande = x)
  
} else {
  console.log(numeroGrande = "I numeri sono uguali.")
}

*/

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/*

let x = 19

if (x < 5) {
  console.log( x = "Tiny");
} else if (x < 10) {
  console.log( x = "Small");
} else if (x < 15) {
  console.log( x = "Medium");
} else if (x < 20) {
  console.log( x = "Large");
} else if (x >= 20) {
  console.log( x = "Huge");
}

*/

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/


/*

let numeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numeri.length; i++){
if (numeri [i] ==3 || numeri[i] ==8){
  continue
} console.log(numeri[i]);
}

*/

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/*

let numeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (let i = 0; i < numeri.length; i++){
  if (numeri[i] % 2 == 0){
    console.table(numeri[i] + " è pari");
  }  else {
    console.table(numeri[i] + " è dispari");  
  }
}

*/

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*

let numeri = [16, 8]

let addizione = numeri[0] - numeri[1] === 8

for (let i = 0; i < numeri.length; i++){
  if (numeri[i] == 8){
  console.log(numeri[i] == 8);

  }
}
  console.log(addizione);

*/

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/


/*

let totalShoppingCart = 40

if (totalShoppingCart < 50){
  console.log(totalShoppingCart + 10 + "€");
  
} else if (totalShoppingCart > 50){
  console.log(totalShoppingCart + "€ + spedizione gratuita.");
}

*/

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/*

let totalShoppingCart = 40
let sconto = totalShoppingCart * 0.2
let prezzoScontato = totalShoppingCart - sconto

if (prezzoScontato < 50){
  prezzoScontato +=10;
  console.log(prezzoScontato);
}

*/

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/*

let gender = ["male", "female"]
let isMale = false

if (isMale == true){
  console.log(gender[0]);
} 

*/

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/*let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

for (let i = 0; i < numeri.length; i++){
  if (numeri[i] % 5 == 0) {
    console.log("Buzz");
  } else if (numeri[i] % 3 == 0) {
    console.log("Fizz");
  } else if (numeri[i] % 3 == 0 && numeri[i] % 5 == 0) {
    console.log("FizzBuzz");
  } else console.log(numeri[i]);
}
*/
