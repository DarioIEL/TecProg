import { Component, Input } from '@angular/core';
import { Docente } from 'src/app/models/docente.model';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent {

  @Input() docente: Docente;
  
  onModStatus(){
    if(this.docente.status == "online"){
      this.docente.status = "offline";
    }else{
      this.docente.status = "online";
    }
  }

}
