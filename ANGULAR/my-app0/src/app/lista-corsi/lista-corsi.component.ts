import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-corsi',
  templateUrl: './lista-corsi.component.html',
  styleUrls: ['./lista-corsi.component.css']
})
export class ListaCorsiComponent {

  listaCorsi: string[] = [
    "Javascript",
    "Angular",
    "Java",
    "HTML"
  ]

}
