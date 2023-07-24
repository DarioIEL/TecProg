import { Component } from '@angular/core';
import { Gioco } from '../models/gioco.model';

@Component({
  selector: 'app-console-giochi',
  templateUrl: './console-giochi.component.html',
  styleUrls: ['./console-giochi.component.css']
})
export class ConsoleGiochiComponent {

  titolo: string = "TDP Arcade";

  listaGioco: Gioco[] = [
    new Gioco("Bingo", "https://play-lh.googleusercontent.com/N5B_Q72zxog4FU1IaWcuZOtMfMz-pywUeX8EZMeUrsLt4aFSBw_B4Pz-9gqYQzlZ7TUZ", "azzardo"),
    new Gioco("Fifa 24", "https://prod.assets.earlygamecdn.com/images/FIFA-24-Infantino-egame.jpg?mtime=1679331606", "console")
  ];


  onCreaGioco(gioco: Gioco){
    console.log("Sono la console del Parent: " , gioco);
    this.listaGioco.push(gioco);
  }


}
