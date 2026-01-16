import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeavyClasicoPage } from './heavy-clasico.page';

const routes: Routes = [
  {
    path: '',
    component: HeavyClasicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeavyClasicoPageRoutingModule {}
