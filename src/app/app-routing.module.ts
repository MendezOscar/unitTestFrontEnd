import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './features/inicio/inicio.component';
import { EstudiantesComponent } from './features/estudiantes/estudiantes.component';


const routes: Routes = [
  { path: 'estudiantes', component: EstudiantesComponent},
  { path: '', component: InicioComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
