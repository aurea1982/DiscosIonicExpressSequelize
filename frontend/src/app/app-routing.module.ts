// permite crear modulos en angular , define un modulo de rutas
import { NgModule } from '@angular/core';
// PreloadAllModules =>permite precargar modulos en segundo plano
// Routes => representa un arry de rutas
// RouterModule => modulo encargado del sistema de rutas
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // esta es la ruta por defecto, cuando la URL esta vacia
    // cuando se entra en localhost:8100 redirige a home
    path: '',
    redirectTo: 'home',
    // solo redirige si esta completamente vacio
    pathMatch: 'full'
  },
  {
    // nos indica la ruta del home
    path: 'home',
    loadChildren: () =>
      // hasta que no se carge el modulo HomePageMudule hata que el usuario vaya a home
      import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    // cuando el usuario navega /heavy-clasico
    // carga el modulo de HeavyClasicoPageModule
    path: 'heavy-clasico',
    loadChildren: () =>
      import('./heavy-clasico/heavy-clasico.module').then(m => m.HeavyClasicoPageModule)
  },
  {
    // hace lo mismo para cada estilo de musica por el que he  generado una vista
    path: 'black-metal',
    loadChildren: () =>
      import('./black-metal/black-metal.module').then(m => m.BlackMetalPageModule)
  },
  {
    path: 'death-metal',
    loadChildren: () =>
      import('./death-metal/death-metal.module').then(m => m.DeathMetalPageModule)
  },
  {
    path: 'thrash-metal',
    loadChildren: () =>
      import('./thrash-metal/thrash-metal.module').then(m => m.ThrashMetalPageModule)
  },
  {
    path: 'doom-metal',
    loadChildren: () =>
      import('./doom-metal/doom-metal.module').then(m => m.DoomMetalPageModule)
  }
];


@NgModule({
  // RouterModule.forRoot => registra las rutas como rutas principales de la aplicacion
  // preloadingStrategy.PreloadAllModules => carga el home al inicio y el resto se carga en segundo plano
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  // permite que el resto de las rutas esten disponible en el resto de la app
  exports: [RouterModule]
})
export class AppRoutingModule {}
