import { Component, EventEmitter, Output } from '@angular/core';
import { Docente } from 'src/app/models/docente.model';

@Component({
  selector: 'app-crea-docente',
  templateUrl: './crea-docente.component.html',
  styleUrls: ['./crea-docente.component.css']
})
export class CreaDocenteComponent {

  @Output() onDocente = new EventEmitter<Docente>()
  
 
  onCreaDocente(){
  
    let mioNuovoDocente = new Docente("Anna", "Bianchi", "online", 1, "Webmarketing");

    this.onDocente.emit(mioNuovoDocente);

    console.log(mioNuovoDocente);
    
  }
}
