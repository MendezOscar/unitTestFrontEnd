import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/Models/estudiante';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  estudiantes: Estudiante[];

  constructor(private _estudianteService: EstudiantesService) { }

  ngOnInit() {
    this.obtenerEstudiantes();
  }

  obtenerEstudiantes(){
    this._estudianteService.obtenerEstudiantes().subscribe(data => {
      this.estudiantes = data;
      console.log(this.estudiantes);
    });
  }

}
