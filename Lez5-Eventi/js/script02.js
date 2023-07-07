let studente = {
    nome: "Dario",
    cognome: "Mennillo",
    matricola: 2008
}

let btn = document.querySelector("#btn");

function caricaStud(){

    // per poter salvare in local o session storage devo trasformarlo in JSON (oggetto in string)
    let studJSON = JSON.stringify(studente);

    //il setItem(chiave: string, valore: string) 
    localStorage.setItem("studente", studJSON);
}

btn.addEventListener("click", caricaStud);


let btnOut = document.querySelector("#btnOut");

function logOut(){
    localStorage.removeItem("studente");
}

btnOut.addEventListener("click", logOut);

