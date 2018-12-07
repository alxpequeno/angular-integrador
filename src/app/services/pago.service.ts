import { Injectable } from '@angular/core';
import { Constants } from '../app.constants';
import { Tarjeta } from '../interfaces/tarjeta.interface';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  pagarURL: string = Constants._URL + "api/pago/ValidarPago";

  constructor(private http: HttpClient) { }

  pagar(tarjeta: Tarjeta) {
    let body = JSON.stringify(tarjeta);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.pagarURL, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );
  }
}
