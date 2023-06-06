//recupero i tag p dallo html
let nomeStudente = document.getElementById('nomeStudente');
let cognomeStudente = document.getElementById('cognomeStudente');
let etaStudente = document.getElementById('etaStudente');
let presenzaStudente = document.getElementById("presenzaStudente");
let avviso = document.getElementById("avviso");

//creo le variabili
// let nomeS = "Dario";
let nomeS = prompt("Inserisci il tuo nome");
// let cognomeS = "Mennillo";
let cognomeS = prompt("Inserisci il tuo cognome");
// let etaS = 34;
let etaS = Number( prompt("Inserisci la tua età") );

let presenzaS =  Boolean( prompt("Lo studente è presente? Rispondi con true o false") );

annoCorrente = 2023;

/**
if(condizione){
    esegui se true
}else{
    esegui se false
}
*/

if(etaS < 18){
    // alert("Non puoi accedere alla pagina");
    avviso.textContent = "Non puoi iscriverti come studente."
}else{

    // "stampo" il valore delle variabili nei tag recuperati
    nomeStudente.textContent = "Nome: " + nomeS;
    cognomeStudente.textContent = "Cognome: " + cognomeS;
    etaStudente.textContent = "Età: " + etaS;
    if(presenzaS == "true" ){
        presenzaStudente.setAttribute("class", "txtGreen");
    }else{
        presenzaStudente.setAttribute("class", "txtRed");
    }
    presenzaStudente.textContent = "Presente: " + presenzaS;
}



