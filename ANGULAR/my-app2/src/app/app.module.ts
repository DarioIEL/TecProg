import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConsoleGiochiComponent } from './console-giochi/console-giochi.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GiocoComponent } from './console-giochi/gioco/gioco.component';
import { CreaGiocoComponent } from './console-giochi/crea-gioco/crea-gioco.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsoleGiochiComponent,
    NavbarComponent,
    GiocoComponent,
    CreaGiocoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
