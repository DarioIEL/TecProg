import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaCorsiComponent } from './lista-corsi/lista-corsi.component';
import { ListaStudentiComponent } from './lista-studenti/lista-studenti.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCorsiComponent,
    ListaStudentiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
