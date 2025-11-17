import { NgModule } from '@angular/core';
// importa funciones basicas de angular (*ngFor)
import { CommonModule } from '@angular/common';
// permite importar componentes de ionic como button
import { IonicModule } from '@ionic/angular';
// permite usar forularios y ngModel
import { FormsModule } from '@angular/forms';
// compoente princiapl de la pagina (ts, html, css)
import { HomePage } from './home.page';
// impporta rutas expecificass de la pagina HomePage
import { HomePageRoutingModule } from './home-routing.module';

// donde se configura el modulo
@NgModule({
  imports: [ // importa los modulos que voy a necesitar
    CommonModule, // aporta las funciones basicas de angular (*ngFor)
    FormsModule, //habilita los formularios como ngModel
    IonicModule, // importa los componentes de ionic button
    HomePageRoutingModule // define las rutas de HomePage
  ],
  declarations: [HomePage] // se aparecen los componentes que pertenecen a este modulo 
})

// esta clase representa el modullo
// no necesito codigo ya que la configuracion esta dentro de @NgModule
export class HomePageModule {}
