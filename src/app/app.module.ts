import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './features/inicio/inicio.component';
import { EstudiantesComponent } from './features/estudiantes/estudiantes.component';
import { CrearEstudianteComponent } from './features/crear-estudiante/crear-estudiante.component';
import { EditarEstudianteComponent } from './features/editar-estudiante/editar-estudiante.component';
import { NavegacionComponent } from './features/navegacion/navegacion.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EstudiantesComponent,
    CrearEstudianteComponent,
    EditarEstudianteComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
