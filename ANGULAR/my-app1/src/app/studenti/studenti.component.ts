import { Component, OnInit } from '@angular/core';
import { Studente } from '../models/studente.model';



@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.css']
})
export class StudentiComponent{

  // listaStudenti: string[] = [
  //   "Andrea",
  //   "Angel",
  //   "Rebecca",
  //   "Alberto",
  //   "Andrea",
  //   "Matteo",
  //   "Andreea",
  //   "Eduard",
  //   "Dario",
  //   "Gabriele",
  //   "Marco",
  //   "Arkady",
  //   "Luca",
  //   "Bryan",
  //   "Andres",
  //   "Alessandro"
  // ];


  //voglio utilizzare gli oggetti al posto della string
  // listaStudenti: object[] = [....];

  // listaStudenti: {
  //   nome: string,
  //   cognome: string,
  //   materia: string
  // }[] = [
  //   {
  //     nome: "Andrea",
  //     cognome: "Savoia",
  //     materia: "Angular"
  //   },
  //   {
  //     nome: "Angel",
  //     cognome: "Cocco",
  //     materia: "Angular"
  //   }
  //   //....
  // ]


  //adesso utilizzo il model del dato
  // listaStudenti: Studente[] = [
  //   {
  //     nome: "Andrea",
  //     cognome: "Savoia",
  //     materia: "Angular"
  //   },
  //   {
  //     nome: "Angel",
  //     cognome: "Cocco",
  //     materia: "Angular"
  //   },
  //   {
  //     nome: "Alessandro",
  //     cognome: "Piccolo"
  //   }
  //   //....
  // ]

  listaStudenti: Studente[] = [
    //ATT: per utilizzare new devo obbligatoriamente avere il metodo constructor
    new Studente("Rebecca", "Orso", "Angular"),
    new Studente("Alberto", "Bosco", "Javascript"),
    new Studente("Andrea", "Lentini"),
    new Studente("Luca", "Riggio", "JAVA"),
    new Studente("Marco", "Cavanna")
  ]

}
