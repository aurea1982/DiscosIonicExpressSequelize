// importa NgModule => define modulo angular
// importa RouterModule => permite crear rutas
// importa Routes => representa un arreglo de rutas
// importa HomePage componente asociado a esa ruta 

import { NgModule } from '@angular/core';

// Routes tipo especial que representa un array de rutas de la aplicacion (path (URL) + componente (vista que debe mostrar))
import { RouterModule, Routes } from '@angular/router';
// componente de la pagina que va a mostrar
// tiene plantilla HTML, TS y CSS
// controla el interface que vera el usuario
import { HomePage } from './home.page';

// Routes el mapa completo 
const routes: Routes = [
  {
    // con ruta vacia, muestra la pagina HomePage
    path: '',
    component: HomePage,
  }
];


// @NgModule decorador en angular que sirve para definir un modulo
// un modulo tiene cosas como: componentes, directivas, pipes, rutas
@NgModule({
  //  para usarlo  en modulos secundarios o modulos de paginas 
  // registra rutas especifics de esta pagina
  // le dice a angular las rutas que pertenecen a este modulo (HomePage)
  imports: [RouterModule.forChild(routes)],
  // permite que el modulo HomePageRoutingModulle tambien tenga acceso al router 
  // permite a la pagina a navegar y resolver rutas
  exports: [RouterModule]
})
// clase del modulo, en angular todo modulo tiene que tener una clase que lo represente, aunque no tenga nada
// es obligatorio para que angular lo entienda como un modulo
// se exporta pra que otros modulos puedan importarla
export class HomePageRoutingModule {}
