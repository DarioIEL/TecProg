let mioNome = "Dario";

var mioCognome = "Mennillo";

let corso = "Javascript";

let annoCorrente = 2023;

let presenza = true;

console.log("Ciao " + mioNome + " " + mioCognome + ". Corso: " + corso);

let nomeUser = prompt("come ti chiami ? ");

console.log("ciao utente " + nomeUser);

//recupero la porzione di html
let saluto = document.getElementById("saluto");

//scrivo all'interno di saluto
saluto.textContent = "Benvenuto " + nomeUser;



