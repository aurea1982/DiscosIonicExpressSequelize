// permite definir un modulo en angular
import { NgModule } from '@angular/core';
// permite definir rutas
import { RouterModule, Routes } from '@angular/router';
// compoente que se mostrara cuadno el usuario acceda a la ruta
import { BlackMetalPage } from './black-metal.page';

// definicion de la ruta
// muestra el componente que se usa en la ruta
const routes: Routes = [
  {
    path: '',
    component: BlackMetalPage
  }
];

// 
@NgModule({
  //le dice a angular que estas rutass pertenecen a esta pagina
  imports: [RouterModule.forChild(routes)],
  // exporta RouterModule para que otros puedan usar las rutas
  exports: [RouterModule],
})
// no necesita codigo, representa el modulo de rutas para esta pagina
export class BlackMetalPageRoutingModule {}
