export class Studente{
    nome: string;
    cognome: string;
    materia?: string;
    
    // Col il ? la prop diventa opzionale => Override + Overload del metodo costruttore
    //ATT: le prop opzionali vanno al fondo 
    constructor(nome: string, cognome: string, materia?: string){
        this.nome = nome;
        this.cognome = cognome;
        this.materia = materia;
    }
}