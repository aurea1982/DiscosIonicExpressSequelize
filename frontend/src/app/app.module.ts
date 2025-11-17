// define el modulo de angular
import { NgModule } from '@angular/core';
// permite que angular funcione como navegador
import { BrowserModule } from '@angular/platform-browser';
// interfaz para controlar como se reutilizan las rutas
import { RouteReuseStrategy } from '@angular/router';
// habilita HttpClient
import { provideHttpClient } from '@angular/common/http';
// permite usar formularios reactivos como black metal
import { ReactiveFormsModule } from '@angular/forms';
//importa todos los componentes de ionic
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// component principal root
import { AppComponent } from './app.component';
// define las rutas de toda la app
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],  // declara los componentes de cada modulo
  providers: [ // aqui se registran servicios globales
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  // permite usar el sistema de navegacion de ionic 
  provideHttpClient() // activa el sistema de peticiones de http (get, post, put, delete)
],

  // define el primer componente que se carga en la pagina inicial de la app
  // es decir AppComponent
  bootstrap: [AppComponent],
  imports: [ // se cargan estos mudulos al inicio
    BrowserModule, // necesario para ejecutar angular en un navegador 
    IonicModule.forRoot(), // inicialza ionic
    AppRoutingModule, //importa rutas principales, sin esto no se puede navegar
    ReactiveFormsModule  // pemite usar formularios
  ]
})
export class AppModule {}
