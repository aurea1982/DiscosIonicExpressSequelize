import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

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
