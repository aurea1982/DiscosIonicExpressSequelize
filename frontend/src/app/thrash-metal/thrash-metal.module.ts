import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ThrashMetalPageRoutingModule } from './thrash-metal-routing.module';
import { ThrashMetalPage } from './thrash-metal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ThrashMetalPageRoutingModule
  ],
  declarations: [ThrashMetalPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ThrashMetalPageModule {}
