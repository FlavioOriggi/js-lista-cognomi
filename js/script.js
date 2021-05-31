
// Mail: Chiedi all’utente la sua email,controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

 var indirizzoUtente = prompt('inserisci la tua mail per accedere');
    
 var indirizziMail = ['flavio@gmail.it', 'flavio@boolean.it', 'flavio@pec.it'];

for(var i = 0; i < indirizziMail.length; i++){    
     if(indirizzoUtente == indirizziMail[i]){        
         console.log('accesso eseguito');
     } else {
         console.log('indirizzo mail errato. Riprova');
         indirizzoUtente = prompt('inserisci la tua mail CORRETTA per accedere');
     }
}


// Lista Cognomi: chiedi all’utente il cognome, inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’,
// stampa la lista ordinata alfabeticamente, scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova.

// var cognomeUtente = (prompt('inserisci il tuo cognome'));

// listaCognomi.push(cognomeUtente);

// var listaCognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

// console.log(listaCognomi);

// for (var i = 0; i < listaCognomi.length; i++){
//     listaCognomi.sort();        
//     console.log(listaCognomi);    
// }
// var i = 0
// while (i < listaCognomi.length){
//     listaCognomi.sort();        
//     console.log(listaCognomi); 
//     i++ 
// }