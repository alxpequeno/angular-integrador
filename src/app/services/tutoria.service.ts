import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../app.constants';
import { Tutoria } from '../interfaces/tutoria.interface';
import { map } from 'rxjs/operators';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class TutoriaService {

  registrarTutoriaURL = Constants._URL + "api/tutoria/RegistrarTutoria";
  actualizarTutoriaURL = Constants._URL + "api/tutoria/ActualizarTutoria";
  buscarTutoriaURL = Constants._URL + "api/tutoria/ListaTutoriaxFiltros2";
  matricularURL = Constants._URL + "api/tutoria/matriculaTutoria";
  validarURL = Constants._URL + "api/tutoria/validarAlumnoTutoria";
  tutoriasxAlumnoURL = Constants._URL + "api/tutoria/ListaTutoriasxAlumno";
  tutoriasxTutorURL = Constants._URL + "api/tutoria/ListaTutoriasxTutor";
  culminarURL = Constants._URL + "api/tutoria/CulminarTutoria";
  reporteURL = Constants._URL + "api/tutoria/ReporteTutorias";


  constructor(private _http: HttpClient) { }

  buscarTutorias(tutoria: Tutoria) {
    let body = JSON.stringify(tutoria);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.buscarTutoriaURL, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );
  }


  registrarTutoria(tutoria: Tutoria) {

    let body = JSON.stringify(tutoria);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.registrarTutoriaURL, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  actualizarTutoria(tutoria: Tutoria) {

    let body = JSON.stringify(tutoria);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.actualizarTutoriaURL, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  matricularTutoria(idTutoria: number, idAlumno: number) {

    console.log("matricularTutoria()");
    let body = {
      "idTutoria": idTutoria,
      "idAlumno": idAlumno
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.matricularURL, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  validarMatriculado(idTutoria: number, idAlumno: number) {

    let body = {
      "idTutoria": idTutoria,
      "idAlumno": idAlumno
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.validarURL, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  culminarTutoria(idTutoria: number) {

    let body = {
      "idTutoria": idTutoria,
      "idAlumno": 0
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.culminarURL, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  obtenerTutoriasAlumno(alumno: Usuario) {
    let body = JSON.stringify(alumno);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.tutoriasxAlumnoURL, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  obtenerTutoriasTutor(tutor: Usuario) {
    let body = JSON.stringify(tutor);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.tutoriasxTutorURL, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  reporteTutorias() {
    return this._http.get(this.reporteURL);
  }

}
