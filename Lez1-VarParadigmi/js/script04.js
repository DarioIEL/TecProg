let studenti = [
    "Anna Rossi",
    "Paolo Verdi",
    "Luca Bianchi",
    "Maria Gialli",
    "Ciro Neri",
    "Laura Arancio"
];

let voti = [
    30,
    29,
    15,
    14,
    22,
    26
];


//se lo studente super l'esame mostro il voto altrimenti "non superato"

// 1. Step -> Stampo nomi e voti
let listaStudenti = document.getElementById("listaStud");
let mediaVoti = document.getElementById('mediaVoti');

let somma = 0;

for(let i = 0; i < studenti.length; i++){

    somma += voti[i];

    if(voti[i] < 18){
        // listaStudenti.innerHTML += "<li>" + studenti[i] + "<span class='txtRed'> Esame non superato</span> </li>";

        listaStudenti.innerHTML += `
            <li> 
                ${studenti[i]} <span class="txtRed"> Esame non superato </span>
            </li>`;


    }else{
        // listaStudenti.innerHTML += "<li>" + studenti[i] + " " + voti[i] + "</li>";
        listaStudenti.innerHTML += `<li> ${studenti[i]} ${voti[i]} </li>`;
    }

    // let votazione;

    // if(voti[i] < 18){
    //     votazione = "Esame non superato"
    // }else{
    //     votazione = voti[i]
    // }

    // listaStudenti.innerHTML += "<li>" + studenti[i] + " " + votazione + "</li>"

}

let media = somma / studenti.length;

mediaVoti.innerHTML = "Media Voti esame: " + media.toFixed(2);

