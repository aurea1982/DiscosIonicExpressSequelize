import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoomMetalPage } from './doom-metal.page';

const routes: Routes = [
  {
    path: '',
    component: DoomMetalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoomMetalPageRoutingModule {}

