import { Injectable } from '@angular/core';
import { Constants } from '../app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tutor } from '../interfaces/tutor.interface';
import { map } from 'rxjs/operators';
import { TutorOLD } from '../interfaces/tutorOLD.interface';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  tutorURL: string = Constants._URL + "api/usuario/RegistrarTutor";
  actualizarTutorURL: string = Constants._URL + "api/usuario/ActualizarTutor";
  eliminarTutorURL: string = Constants._URL + "api/usuario/EliminarTutor";
  obtenerTutorURL: string = Constants._URL + "api/usuario/GetTutorById/";



  constructor(private http: HttpClient) { }

  obtenerTutorID(idTutor: number) {
    return this.http.get(this.obtenerTutorURL + idTutor.toString());
  }

  registrarTutor(tutor: Tutor) {
    let body = JSON.stringify(tutor);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.tutorURL, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  actualizarTutor(tutor: TutorOLD) {
    let body = JSON.stringify(tutor);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.actualizarTutorURL, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  eliminarTutor(tutor: TutorOLD) {
    let body = JSON.stringify(tutor);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.eliminarTutorURL, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );
  }
}
