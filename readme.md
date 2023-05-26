# Calcolo presso del biglietto

- Scegliere dove fare l'output del prezzo, in questo caso all'interno della pagina html
- Definire le costanti all'interno del codice
  - variabile con il costo al km
  - sconto del 20% under 18
  - sconto del 40% over 65
- creare prompt dove chiediamo all'utente il numero di km da percorrere e inseriamo il risultato in una variabile
- creare prompt dove chiediamo all'utente la sua età e inseriamo il risultato in una variabile
- moltiplichiamo il prezzo al km per il numero di km impostati dall'utente
- verifichiamo se l'età dell'utente rientra nelle età in cui lo sconto è applicabile
- inseriamo il risultato all'interno dell'elemento in pagina precedentemente selezionato.

# Oltre a ciò che è stato richiesto ho:

- fatto una basic page
- ho messo una favicon :)
- ho validato il js in modo che non faccia nulla se non vengono rispettati dei valori veri come:
  - I km devono essere espressi in numeri e non possono essere uguali o inferiori a 0
  - L'età deve essere un numero compreso tra 1 e 150, altri valori come 0, negativi o superiori a 150 sono considerati nulli. Stesso discorso per valori che sono uguali ad una stringa e non un numero.
- una volta appurati che i valori sono reali, indichiamo il prezzo del biglietto.
  - se il biglietto è soggetto ad uno sconto, viene indicato il nuovo prezzo, la percentuale di sconto e la differenza dal prezzo originale
- Se mi verrà in mente altro in questi giorni lo aggiungerò :)
