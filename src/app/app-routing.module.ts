import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { MenuComponent } from './components/menu/menu.component';
import { TareasComponent } from './components/tareas/tareas.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'calendario', component: CalendarioComponent },
  {
    path: 'asignaturas',
    loadChildren: () =>
      import('./asignaturas/asignaturas.module').then(
        (m) => m.AsignaturasModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
