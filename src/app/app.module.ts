//import { CursosModule } from './cursos/cursos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { FormsModule } from '@angular/forms';
import { CursosModule } from './cursos/cursos.module';
// import { DataBindingComponent } from './data-binding/data-binding/data-binding.component';
//import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    // DataBindingComponent,
    // CursosModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CursosModule,
    // DataBindingComponent
    // CursosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
