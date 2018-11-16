import { Injectable } from '@angular/core';
import { Constants } from '../app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tutor } from '../interfaces/tutor.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  tutorURL: string = Constants._URL + "api/tutor/RegistrarTutor";
  actualizarTutorURL: string = Constants._URL + "api/tutor/ActualizarTutor";
  eliminarTutorURL: string = Constants._URL + "api/tutor/EliminarTutor";


  constructor(private http: HttpClient) { }

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

  actualizarTutor(tutor: Tutor) {
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

  eliminarTutor(tutor: Tutor) {
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
