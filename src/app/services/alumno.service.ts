import { Injectable } from '@angular/core';
import { Constants } from '../app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alumno } from '../interfaces/alumno.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  alumnoURL: string = Constants._URL + "api/alumno/CrearAlumno";
  actualizarAlumnoURL: string = Constants._URL + "api/alumno/ActualizarAlumno";
  eliminarAlumnoURL: string = Constants._URL + "api/alumno/EliminarAlumno";

  constructor(private http: HttpClient) { }

  registrarAlumno(alumno: Alumno) {
    let body = JSON.stringify(alumno);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.alumnoURL, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  actualizarAlumno(alumno: Alumno) {
    let body = JSON.stringify(alumno);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.actualizarAlumnoURL, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  eliminarAlumno(alumno: Alumno) {
    let body = JSON.stringify(alumno);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.eliminarAlumnoURL, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );
  }
}
