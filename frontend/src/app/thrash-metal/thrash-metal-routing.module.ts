import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThrashMetalPage } from './thrash-metal.page';

const routes: Routes = [
  {
    path: '',
    component: ThrashMetalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThrashMetalPageRoutingModule {}
