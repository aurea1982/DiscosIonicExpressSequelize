import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeathMetalPage } from './death-metal.page';

const routes: Routes = [
  {
    path: '',
    component: DeathMetalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeathMetalPageRoutingModule {}
