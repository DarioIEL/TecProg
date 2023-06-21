//notazione con funzione costruttore

function Studente(nome, cognome, corso, presenza, matricola ){

    this.nome = nome;
    this.cognome = cognome;
    this.corso = corso;
    this.presenza = presenza;
    this.matricola = matricola;

    //dichiaro il metodo toString
    // alt + 96 = `
    this.toString = function(){
        // let descrizione = "Nome e Cognome: "+ this.nome + " " + this.cognome;
        
        let descrizione = `Nome e Cognome: ${this.nome} ${this.cognome} <br>
                           Corso Frequentato: ${this.corso} <br>
                           Matricola: ${this.matricola} <br>
                           Presenza: ${this.presenza}` ;

        return descrizione;
    }
}

let studente1 = new Studente("Pippo", "Rossi", "Tecn Programm", true, 1);

console.log(studente1.toString());

let demo = document.getElementById("demo");
demo.innerHTML = studente1.toString();

let classe = [
    new Studente("Anna", "Bianchi", "Tecn Prog", true, 1),
    new Studente("Paolo", "Verdi", "Tecn Prog", true, 2),
    new Studente("Luisa", "Gialli", "Tecn Prog", true, 3),
    new Studente("Luca", "Neri", "Tecn Prog", true, 4),
    new Studente("Maria", "Qualcosa", "Tecn Prog", true, 5),
    new Studente("Gennaro", "Gennari", "Tecn Prog", true, 6),
];

classe.forEach(studente => {
    demo.innerHTML += `<div class='dimDiv'> ${studente.toString()} </div>`;
});

