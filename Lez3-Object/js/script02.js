//oggetto con notazione letterale e propr già definite { }
let studente = {
    //dichiaro le prop
    nome: "Dario",
    cognome: "Mennillo",
    matricola: 123,
    promosso: true,

    //dichiaro un metodo
    superaEsame: function(){
        // console.log('hai superato l\'esame');
         return "Hai superato l'esame!!"
    },

    //forma "compatta"
    presentati(){
        // console.log("Ciao mi chiamo " + this.nome);
        let presentazione = "Ciao mi chiamo " + this.nome;
        return presentazione;
    },

    assegnaMaterie(mat1, mat2){
        let elencoMaterie = [mat1, mat2];

        if(mat1 == "" || mat2 == ""){
            return "Guarda che non hai assegnato una materia, questo ne ha 2"
        }else{
            return elencoMaterie;
        }
    }
}


//accedo alle prop
console.log(studente.nome);
console.log(studente.cognome);
console.log(studente.matricola);

console.log(studente.presentati());

console.log( studente.superaEsame() );

console.log(studente.assegnaMaterie("JAVA", "Angular"));