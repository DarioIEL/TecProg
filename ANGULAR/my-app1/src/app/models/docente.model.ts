export class Docente{

    nome: string;
    cognome: string;
    status: string;
    numCorsi: number;
    corso? : string;
    // corso?: "Java" | "Javascript" | "HTML" ;
    
    constructor(nome: string, cognome: string, status: string, numCorsi: number, corso?: string){
        this.nome = nome;
        this.cognome = cognome;
        this.status = status;
        this.numCorsi = numCorsi;
        this.corso = corso
    }

}