import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Empleado } from '../interfaces/empleado.interface';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  empleadoURL: string = "http://75fae57f.ngrok.io/api/empleado/CrearEmpleado";

  constructor(private http: HttpClient) { }

  registrarEmpleado(empleado: Empleado) {
    let body = JSON.stringify(empleado);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.empleadoURL, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );
  }
}
