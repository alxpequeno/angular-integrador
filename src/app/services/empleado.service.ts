import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Empleado } from '../interfaces/empleado.interface';
import { Constants } from '../app.constants'

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  empleadoURL: string = Constants._URL + "api/empleado/CrearEmpleado";
  actualizarEmpleadoURL: string = Constants._URL + "api/empleado/ActualizarEmpleado";
  eliminarEmpleadoURL: string = Constants._URL + "api/empleado/EliminarEmpleado";

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

  actualizarEmpleado(empleado: Empleado) {
    let body = JSON.stringify(empleado);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.actualizarEmpleadoURL, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  eliminarEmpleado(empleado: Empleado) {
    let body = JSON.stringify(empleado);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.eliminarEmpleadoURL, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );
  }
}
