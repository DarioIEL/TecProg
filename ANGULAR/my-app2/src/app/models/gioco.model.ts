export class Gioco{

    nome: string;
    img: string;
    tipo: "console" | "tavolo" | "azzardo";

    constructor(nome: string, img: string, tipo: "console" | "tavolo" | "azzardo"){
        this.nome = nome;
        this.img = img;
        this.tipo = tipo;
    }

}