
// Mail: Chiedi all’utente la sua email,controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// var indirizzoUtente = prompt('inserisci la tua mail per accedere');
    
// var indirizziMail = ['flavio@gmail.it', 'flavio@boolean.it', 'flavio@pec.it'];

// for(var i = 0; i < indirizziMail.length; i++){    
//     if(indirizzoUtente == indirizziMail[i]){        
//         console.log('accesso eseguito');
//     } 
// }


// Lista Cognomi: chiedi all’utente il cognome, inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’,
// stampa la lista ordinata alfabeticamente, scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova.

 

var cognomeUtente = prompt('inserisci il tuo cognome');
var cognomeUtenteMaiuscolo = cognomeUtente[0].toUpperCase() + cognomeUtente.substring(1);


var listaCognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
listaCognomi.push(cognomeUtenteMaiuscolo);


listaCognomi.sort(); 

for (var i = 0; i < listaCognomi.length; i++){        
    if(cognomeUtenteMaiuscolo == listaCognomi[i]) {
        console.log(i + 1);
    }              
}

console.log(listaCognomi);






