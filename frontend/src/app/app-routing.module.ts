// permite crear módulos en Angular, define el módulo de rutas
// modulo de enrutamiento principal de la app
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    // especifica que cuando se abre la app se abre en la ruta de home
    // carga el modulo completo de HomePageModule
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomePageModule)
  },

  {
    // rutas de cada uno de los estilos que he creado y lo que hace
    // es cargar cada modulo entero por estilo
    path: 'heavy-clasico',
    loadChildren: () =>
      import('./heavy-clasico/heavy-clasico.module').then(m => m.HeavyClasicoPageModule)
  },

  {
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
  },

 
  {
    // ruta de la lista de los discos (Standalone Component)
    //carga solo el componente pero no el modulo entero

    path: 'list-discos',
    loadComponent: () =>
      import('./list-discos/list-discos.page').then(m => m.ListDiscosPage)
  },

 
  {
    // funciona igual que el de antes pero en este caso permite añadir discos
    path: 'add-disco',
    loadComponent: () =>
      import('./add-disco/add-disco.page').then(m => m.AddDiscoPage)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules// carga la ruta que se necesita  pero tb precarga el resto del modulo
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
