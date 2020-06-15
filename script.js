// Chiedi all’utente il suo nome, il suo cognome e il suo colore preferito
var nome = prompt("inserisci il tuo nome");
var cognome = prompt("inserisci il tuo cognome");
var colore = prompt("inserisci il tuo colore preferito");

// Scrivi sulla pagina la password: nomecognomecolorepreferito19
// Creazione Password
var pwd = nome + cognome + colore + "19";
// Stampa password in pagina
document.getElementById('title').innerHTML = "la tua supersegretissima password è: " + pwd;
