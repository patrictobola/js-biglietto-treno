console.log('JS OK')

// Definiamo le variabili necessarie allo svolgimento della traccia
const ticketPlaceholder = document.getElementById('ticketPrice');
const discountApplied = document.getElementById('priceDiscount');
const pricePerKm = 0.21;
const under18 = 18;
const over65 = 65;
const discount18 = 20;
const discount65 = 40;

console.log(pricePerKm, under18, over65, discount18, discount65)

// Creiamo due prompt per gli input dell'utente 
const kms = prompt(`Quanti km devi percorrere?`, 100)
const age = prompt(`Quanti anni devi hai?`, 20)

// Calcoliamo il prezzo al km 
let finalPrice = 0;
if (kms) {
    finalPrice = kms * pricePerKm;
}


console.log(finalPrice)

// Vediamo se possiamo applicare o meno uno sconto 
if (age > over65) {
    discountApplied.innerText = `Il prezzo del biglietto era di: ${finalPrice.toFixed(2)}€`;

    finalPrice = finalPrice - (finalPrice * discount65 / 100);
}   else if (age < under18) {
    discountApplied.innerText = `Il prezzo del biglietto era di: ${finalPrice.toFixed(2)}€`;

    finalPrice = finalPrice - (finalPrice * discount18 / 100);
}

ticketPlaceholder.innerText = finalPrice.toFixed(2) + '€'