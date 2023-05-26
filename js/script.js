console.log('JS OK')

// Definiamo le variabili necessarie allo svolgimento della traccia
const ticketPlaceholder = document.getElementById('ticketPrice');
const discountApplied = document.getElementById('priceDiscount');
const yourAge = document.getElementById('yourAge');
const kmSelected = document.getElementById('kmSelected');
const pricePerKm = 0.21;
const under18 = 18;
const over65 = 65;
const discount18 = 20;
const discount65 = 40;
let errorMessage = 'Inserisci il numero di km da effettuare!'

console.log(pricePerKm, under18, over65, discount18, discount65)

// Creiamo due prompt per gli input dell'utente 
const kms = prompt(`Quanti km devi percorrere?`, 100)
const age = prompt(`Quanti anni hai?`, 20);

// Calcoliamo il prezzo al km 
let finalPrice = 0;
if (isNaN(kms)) {
    alert(errorMessage);
}   else {
    // Verifichiamo che l'utente ha messo un'età plausibile 
    if (age <= 0 || age >= 150) {
        alert(errorMessage = `Inserisci un'età valida, pls!`)
    }   else {
        finalPrice = kms * pricePerKm;
    }
}


console.log(finalPrice)

// Vediamo se possiamo applicare o meno uno sconto 
if ((age > over65) && !(age >= 150)) {
    discountApplied.innerText = 
    `Il prezzo del biglietto era di: ${finalPrice.toFixed(2)}€
    Abbiamo applicato uno sconto del ${discount65}%
    Pari a: ${(finalPrice * discount65 / 100).toFixed(2)}€`;

    finalPrice = finalPrice - (finalPrice * discount65 / 100);
}   else if ((age < under18) && !(age <= 0)) {
    discountApplied.innerText = 
    `Il prezzo del biglietto era di: ${finalPrice.toFixed(2)}€
    Abbiamo applicato uno sconto del ${discount18}%
    Pari a: ${(finalPrice * discount18 / 100).toFixed(2)}€`;

    finalPrice = finalPrice - (finalPrice * discount18 / 100);
}

ticketPlaceholder.innerText = finalPrice.toFixed(2) + '€'
yourAge.innerText = `Hai ${age} anni!`;
kmSelected.innerText = `Hai selezionato ${kms} kilometri.`