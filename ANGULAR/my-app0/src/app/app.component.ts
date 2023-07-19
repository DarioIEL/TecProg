import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //nome del tag che utilizzo per renderizzare l'app, il component
  templateUrl: './app.component.html', //lo html del component
  styleUrls: ['./app.component.css'] //array di fogli di stile legati solo ed esclusivamente a questo component
})
export class AppComponent {
  title = 'my-app0';

  autore: string;


  mostraAutore(): void{
    this.autore = "Dario";
  }
  

}
