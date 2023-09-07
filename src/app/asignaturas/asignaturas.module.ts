import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignaturasRoutingModule } from './asignaturas-routing.module';
import { AsignaturasComponent } from './asignaturas.component';
import { LaboIIIComponent } from './labo-iii/labo-iii.component';
import { LaboIVComponent } from './labo-iv/labo-iv.component';
import { LaboVComponent } from './labo-v/labo-v.component';


@NgModule({
  declarations: [
    AsignaturasComponent,
    LaboIIIComponent,
    LaboIVComponent,
    LaboVComponent
  ],
  imports: [
    CommonModule,
    AsignaturasRoutingModule
  ]
})
export class AsignaturasModule { }
