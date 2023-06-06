// boolean
let presenza = false;

//Char ---> String
let genere = 'm';


// Recupero il tag p id="numStud" per poter scriverci dentro
let numStud = document.getElementById("numStud"); //<p id="numStud"></p>

console.log(numStud);

let partecipanti = prompt("Quanti studenti sono presenti oggi ?");

//scrivo dentro numStud, ovvero modifico la prop testuale di numStud
numStud.textContent = "Num Studenti Presenti: " + partecipanti;








