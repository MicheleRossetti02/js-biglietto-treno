// Istruzioni
// Il programma dovrà chiedere all'utente:


// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca, oltre alla ricerca da fare per ricordarsi come calcolare uno sconto (Googlate qulcosa del tipo: come si calcola lo sconto? e cercate una risorsa che vi possa aiutare a capire cosa fare)


//  il numero di chilometri che vuole percorrere
const km = prompt ("Quanti kilometri vuole percorrere?");
console.log(km);
// età del passeggero
const age = prompt("Quanti anni ha?");
console.log(age);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const prezzoNormale = km * 0.21;
console.log(prezzoNormale);

const prezzoNormaleElement = document.getElementById('prezzo_normale');
prezzoNormaleElement.innerHTML = prezzoNormale;
console.log(prezzoNormaleElement);

// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.