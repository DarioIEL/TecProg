import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-studenti',
  templateUrl: './lista-studenti.component.html',
  styleUrls: ['./lista-studenti.component.css']
})
export class ListaStudentiComponent {


  listaStudenti: {
    nome: string,
    cognome: string,
    matricola: number
  }[] = [
    {
      nome: "Pippo",
      cognome: "Rossi",
      matricola: 1
    },
    {
      nome: "Anna",
      cognome: "Bianchi",
      matricola: 2
    },
    {
      nome: "Paola",
      cognome: "Verdi",
      matricola: 3
    }
  ]


}
