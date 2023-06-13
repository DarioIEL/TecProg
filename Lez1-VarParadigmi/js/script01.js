//ARRAY
let studenti = [
    "Anna",
    "Gennaro",
    "Luca",
    "Paola",
    "Dario"
];

let voti = [
    30,
    25,
    17,
    16,
    10
];

console.log(studenti);
console.log(studenti[1]);

// //sostituisco un nome, riassegno una variabile
// studenti[0] = "Luisa";

// //ordinamento
// studenti.sort()
// studenti.reverse();

// //elimino ultimo elemento
// studenti.pop();

// //aggiungo un elemento
// studenti.push("Davide");

// let numStud = studenti.length

// console.log(studenti);
// console.log("Sono presenti " + numStud + " studenti");

// //recupero il tag ul e stampo i nomi degli studenti, uno alla volta

let listaStud = document.getElementById("listaStud");

//la proprietà innerHTML 
// listaStud.innerHTML = "<li>" + studenti[0] + "</li>";
// listaStud.innerHTML += "<li>" + studenti[1] +"</li>"; 
// listaStud.innerHTML += "<li>" + studenti[2] +"</li>"; 
// listaStud.innerHTML += "<li>" + studenti[3] +"</li>"; 
// listaStud.innerHTML += "<li>" + studenti[4] +"</li>"; 
// listaStud.innerHTML += "<li>" + studenti[5] +"</li>"; 

//forClassico
for(let i = 0; i < studenti.length; i++){
    listaStud.innerHTML += "<li class='txtBlue'>" + studenti[i] + "</li>";
}

//foreach
// studenti.forEach(
//     (studente) => {
//         listaStud.innerHTML += "<li class='txtBlue'>" + studente + "</li>";
//     }
// )

let numPartecipanti = document.getElementById("numPartecipanti");
numPartecipanti.innerHTML = numStud;

