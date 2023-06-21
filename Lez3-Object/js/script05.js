function Studente(nome, cognome, matricola, corso){

    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.corso = corso;

    this.info = function(){
        // let info = this.nome + " " + this.cognome + " - Mat: " + this.matricola + " - Corso: " + this.corso;

        let info = `${this.nome} ${this.cognome} - Mat: ${this.matricola} - Corso: ${this.corso}`;

        return info;
    }
}

function registraStudente(){
    //recupero i value del form
    let nomeStud = document.getElementById("nomeStud").value;
    let cognomeStud = document.getElementById("cognomeStud").value;
    let matricolaStud = document.getElementById("matricolaStud").value;
    let corso = document.getElementById("corso").value;
 
    if(nomeStud == "" || cognomeStud == "" || matricolaStud == "" || corso == -1){
        demo.innerHTML = "Hai compilato male il form, controlla bene !";
    }else{
        //creo l'oggetto studente passando come parametri i valori recuperati
        let mioStudente = new Studente(nomeStud, cognomeStud, matricolaStud, corso);
        
        console.log(mioStudente);
        classe.push(mioStudente);
        stampa();
        pulisci();
    }
}

function pulisci(){
    //pulisco i singoli campi del form 
    // document.getElementById("nomeStud").value = "";
    // document.getElementById("matricolaStud").value = "";
    // document.getElementById("cognomeStud").value = "";
    // document.getElementById("corso").value = "";

    //il metodo reset() si applica sui form per pulire tutti i campi in un colpo solo
    formReg.reset();
}

    
function stampa(){
    demo.innerHTML = "";
    classe.forEach(studente =>{
        demo.innerHTML += "<li>" + studente.info() + "</li>";
    });
}

let classe = [];
let btn = document.getElementById("btn");
let demo = document.getElementById("demo");
let formReg = document.getElementById("formReg");

btn.addEventListener("click", registraStudente);
