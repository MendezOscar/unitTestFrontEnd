import { Injectable } from '@angular/core';
import { Estudiante } from '../Models/estudiante';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  apiUrl = 'https://localhost:5001/Estudiante';

  constructor( private http: HttpClient) { }

  obtenerEstudiantes(){
    return this.http.get<Estudiante[]>(this.apiUrl);
  }
}
