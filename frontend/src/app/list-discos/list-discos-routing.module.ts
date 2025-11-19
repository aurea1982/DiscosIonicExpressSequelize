import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDiscosPage } from './list-discos.page';

const routes: Routes = [
  {
    path: '',
    component: ListDiscosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListDiscosPageRoutingModule {}
