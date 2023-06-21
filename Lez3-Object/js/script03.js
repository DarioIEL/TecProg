//oggetto con notazione letterale e propr già definite { }
let studente = {
    //dichiaro le prop
    nome: "Dario",
    cognome: "Mennillo",
    matricola: 123,
    promosso: true,
    corso: "",

    //dichiaro un metodo
    superaEsame: function(){
        // console.log('hai superato l\'esame');
         return "Hai superato l'esame!!";
    },

    //forma "compatta"
    presentati(){
        // console.log("Ciao mi chiamo " + this.nome);
        let presentazione = "Ciao mi chiamo " + this.nome;
        return presentazione;
    },

    //creo un metodo per definire quel corso
    assegnaCorso(corso){
        
        this.corso = corso;

        console.log( "Hai appena assegnato " + corso + " allo studente " + this.nome);
    }
}


// console.log(studente.corso);
// console.log(studente.assegnaCorso("Tecniche di Programmazione"));
// console.log(studente.corso);

const NOME = document.getElementById("nome");
const COGNOME = document.getElementById("cognome");
const CORSO = document.getElementById("corso");
const BTN = document.getElementById("btn");

function stampaInfo(){
    NOME.innerHTML = "nome: " +  studente.nome;
    COGNOME.innerHTML = "cognome: " + studente.cognome;
    
    if(studente.corso == ""){
        CORSO.innerHTML = "Corso non ancora assegnato"
    }else{
        CORSO.innerHTML = "corso: " + studente.corso;
    }
}

function assegnaCorso(){
    let nomeCorso = document.getElementById("nomeCorso").value;
    studente.assegnaCorso(nomeCorso);
    stampaInfo();

}

BTN.addEventListener("click", assegnaCorso);

stampaInfo();