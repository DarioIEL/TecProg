import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConsoleGiochiComponent } from './console-giochi/console-giochi.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "giochi", component: ConsoleGiochiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
