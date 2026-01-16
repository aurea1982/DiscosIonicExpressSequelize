import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DeathMetalPageRoutingModule } from './death-metal-routing.module';
import { DeathMetalPage } from './death-metal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DeathMetalPageRoutingModule
  ],
  declarations: [DeathMetalPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DeathMetalPageModule {}
