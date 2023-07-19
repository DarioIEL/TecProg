import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentiComponent } from './studenti/studenti.component';
import { DocentiComponent } from './docenti/docenti.component';
import { DocenteComponent } from './docenti/docente/docente.component';
import { CreaDocenteComponent } from './docenti/crea-docente/crea-docente.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentiComponent,
    DocentiComponent,
    DocenteComponent,
    CreaDocenteComponent
  ],
  imports: [
    BrowserModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
