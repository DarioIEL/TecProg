import { Component } from '@angular/core';
import { Docente } from '../models/docente.model';

@Component({
  selector: 'app-docenti',
  templateUrl: './docenti.component.html',
  styleUrls: ['./docenti.component.css']
})
export class DocentiComponent {

  listaDocenti: Docente[] = [
    new Docente("Dario", "Mennillo", "offline", 3, "Tecniche di Prog"),
    new Docente("Mauro", "Bogliaccino", "online", 3, "TSS"),
    new Docente("Oscar", "Vecchione", "offline", 0),
    new Docente("Hilary", "Palmieri", "online", 2, "Tecniche di Prog")
  ]


  caricaDoc(event){
    this.listaDocenti.push(event);
  }

  onCreaDocente(docente: Docente){
    this.listaDocenti.push(docente);
  }
}
