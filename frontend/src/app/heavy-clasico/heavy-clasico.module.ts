import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeavyClasicoPageRoutingModule } from './heavy-clasico-routing.module';
import { HeavyClasicoPage } from './heavy-clasico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HeavyClasicoPageRoutingModule
  ],
  declarations: [HeavyClasicoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class HeavyClasicoPageModule {}
