/*
Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma.
*/

const parola = prompt('Inserisci una parola');
const parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }

/*
per ricavare la parola inversa, prima la trasformo in array con 'split', poi con 'reverse' ribalto l'array, e con 'join' lo ritrasformo in stringa.
*/
function invertiParola(parola){

  let parolaRibaltata = parola.split('').reverse().join(''); 

  return parolaRibaltata;
}