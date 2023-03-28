/*
**Palidroma**
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma.
- Per ricavare la parola inversa, prima la trasformo in array con 'split', poi con 'reverse' ribalto l'array, e con 'join' lo ritrasformo in stringa.
*/

const parola = prompt('Inserisci una parola');
const parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  
function invertiParola(parola){
  let parolaRibaltata = parola.split('').reverse().join(''); 
  return parolaRibaltata;
}


/*
**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
const scelta = prompt('Scegli pari o dispari?');

const numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
const numeroComputer = Math.floor(Math.random() * 5) + 1;

const sommaNumeri = somma(numeroUtente, numeroComputer);
const isPari = pariDispari(sommaNumeri);

console.log(numeroUtente, numeroComputer);
console.log('Somma dei numeri',sommaNumeri);
console.log('Il numero è pari.', isPari);

if(sommaNumeri % 2 == 0 && scelta == 'pari'){
  console.log('Hai vinto');
}else if(sommaNumeri % 2 != 0 && scelta == 'dispari'){
  console.log('Hai vinto');
}else{
  console.log('Non hai vinto');
}

function somma(numA, numB){
  const risultatoSomma = numA + numB;
  return risultatoSomma;
}
function pariDispari(n){
  const risultato = !(n % 2);
  return risultato; 
}
