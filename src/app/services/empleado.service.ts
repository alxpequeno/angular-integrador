import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Empleado } from '../interfaces/empleado.interface';
import { Constants } from '../app.constants'
import { UsuarioService } from './usuario.service';
import { Usuario } from '../interfaces/usuario.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  empleadoURL: string = Constants._URL + "api/usuario/RegistrarEmpleado";
  actualizarEmpleadoURL: string = Constants._URL + "api/usuario/ActualizarEmpleado";
  eliminarEmpleadoURL: string = Constants._URL + "api/usuario/EliminarEmpleado";
  pendientesURL: string = Constants._URL + "api/usuario/ListaTutoresPendientes";
  obtenerTutorURL: string = Constants._URL + "api/usuario/GetTutorById/";

  constructor(private http: HttpClient, private _usuarioService: UsuarioService) { }

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

    var usuario: Usuario = this._usuarioService.usuario;

    usuario.nombre = empleado.nombre;
    usuario.apellido = empleado.apellido;
    usuario.direccion = empleado.direccion;
    usuario.email = empleado.email;
    usuario.clave = empleado.clave;


    let body = JSON.stringify(usuario);
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

  getTutoresPendientes() {
    return this.http.get(this.pendientesURL);
  }

  getTutor(id: number) {
    return this.http.get(this.obtenerTutorURL + id.toString());
  }
}
