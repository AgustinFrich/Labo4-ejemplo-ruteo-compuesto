import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturasComponent } from './asignaturas.component';
import { LaboIIIComponent } from './labo-iii/labo-iii.component';
import { LaboIVComponent } from './labo-iv/labo-iv.component';
import { LaboVComponent } from './labo-v/labo-v.component';

const routes: Routes = [
  {
    path: '',
    component: AsignaturasComponent,
    children: [
      { path: 'laboiv', component: LaboIVComponent },
      { path: 'laboiii', component: LaboIIIComponent },
      { path: 'labov', component: LaboVComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignaturasRoutingModule {}
