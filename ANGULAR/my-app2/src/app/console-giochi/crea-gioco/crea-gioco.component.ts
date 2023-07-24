import { Component, EventEmitter, Output } from '@angular/core';
import { Gioco } from 'src/app/models/gioco.model';

@Component({
  selector: 'app-crea-gioco',
  templateUrl: './crea-gioco.component.html',
  styleUrls: ['./crea-gioco.component.css']
})
export class CreaGiocoComponent {

  nomeGioco: string;
  imgGioco: string;
  tipoGioco: "console" | "tavolo" | "azzardo";

  @Output() nuovoGioco = new EventEmitter<Gioco>()

  onCreaGioco(){
    
    let gioco = new Gioco(this.nomeGioco, this.imgGioco, this.tipoGioco);
    console.log(gioco);

    this.nuovoGioco.emit(gioco);
  }
}
