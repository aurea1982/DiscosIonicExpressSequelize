// nos permite saber como carga ionic la estructura de la pagina de este modulo

// permite definir el modulo de angular
// CUSTOM_ELEMENTS_SCHEMA permite usar elementos HTML
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// permite usar derectivas como *ngFor
import { CommonModule } from '@angular/common';
// para formulario y ngModel con FomsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// importa todos los componentes de ionic
import { IonicModule } from '@ionic/angular';
// modulo de rutas de esta pagina
import { BlackMetalPageRoutingModule } from './black-metal-routing.module';
// compoente que representa la pagina
import { BlackMetalPage } from './black-metal.page';



@NgModule({
  imports: [ // va a importar los modulos que se necesita
    CommonModule, // directivas basicas
    FormsModule, //formularios y ngModel
    ReactiveFormsModule, // formularios reactivos
    IonicModule, // componentes ionci
    BlackMetalPageRoutingModule // rutas
  ],
  // me indica que este componente pertenece a este modulo
  declarations: [BlackMetalPage],
  // permite que angular acepte cosas como ion-button
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
//clase que representa el modulo
export class BlackMetalPageModule {}
