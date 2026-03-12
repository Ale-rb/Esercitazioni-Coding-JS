// Array di voti (Input globale)
const voti = [8, 5, 5, 6, 4, 8];

/**
 * Verifica se tutti i voti sono compresi tra 0 e 10
 */
function isVotoValido(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 || arr[i] > 10) {
            return false;
        }
    }
    return true; // Ritorna esplicitamente true se i dati sono ok
}

/**
 * Calcola la media arrotondata
 */
function calcolaMedia(arr) {
    let somma = 0;
    for (let i = 0; i < arr.length; i++) {
        somma += arr[i];
    }
    return Math.round(somma / arr.length);
}

/**
 * Conta il numero di voti insufficienti (< 6)
 */
function conteggioInsufficienze(arr) {
    let contatore = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 6) contatore++;
    }
    return contatore;
}

// --- ESECUZIONE DEL PROGRAMMA ---

if (!isVotoValido(voti)) {
    console.log("Errore: Sono presenti dati non validi nell'array.");
} else {
    const mediaVoti = calcolaMedia(voti);
    console.log("La tua media arrotondata è: " + mediaVoti);

    if (mediaVoti < 6) {
        console.log("Risultato: Bocciato");
    } else {
        let giudizio = "";
        switch (mediaVoti) {
            case 6:
                giudizio = "Sufficiente";
                break;
            case 7:
            case 8:
                giudizio = "Buono";
                break;
            case 9:
            case 10:
                giudizio = "Ottimo";
                break;
        }
        console.log("Risultato: Promosso con giudizio: " + giudizio);
    }

    console.log("Numero di insufficienze trovate: " + conteggioInsufficienze(voti));
}
