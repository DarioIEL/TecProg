import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentiComponent } from './studenti/studenti.component';
import { DocentiComponent } from './docenti/docenti.component';
import { DocenteComponent } from './docenti/docente/docente.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentiComponent,
    DocentiComponent,
    DocenteComponent
  ],
  imports: [
    BrowserModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
