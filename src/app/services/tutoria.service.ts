import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../app.constants';
import { Tutoria } from '../interfaces/tutoria.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TutoriaService {

  registrarTutoriaURL = Constants._URL + "api/tutoria/RegistrarTutoria";

  constructor(private _http: HttpClient) { }


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



}
