import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DoomMetalPageRoutingModule } from './doom-metal-routing.module';
import { DoomMetalPage } from './doom-metal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DoomMetalPageRoutingModule
  ],
  declarations: [DoomMetalPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DoomMetalPageModule {}

