import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { MyDiscosPageRoutingModule } from './my-discos-routing.module';

import { MyDiscosPage } from './my-discos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MyDiscosPageRoutingModule
  ],
  declarations: [MyDiscosPage]
})
export class MyDiscosPageModule {}
