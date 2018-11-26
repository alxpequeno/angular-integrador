import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { Constants } from '../app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario = null;

  private _loginUrl: string = Constants._URL + "api/usuario/login";
  private _eliminarUrl: string = Constants._URL + "api/usuario/EliminarEmpleado";

  constructor(private _http: HttpClient) {
    console.log("Constructor Usuario");
    console.log(this.usuario);
  }

  login(u: Usuario) {

    console.log("servicio login");
    var body = {
      email: u.email,
      clave: u.clave
    };

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this._http.post(this._loginUrl, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );

  }

  eliminarUsuario() {


    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this._http.post(this._eliminarUrl, this.usuario, { headers })
      .pipe(
        map(res => {
          this.logout();
          return res;
        })
      );
  }

  /* 
  if(usuario.email=="admin"&&usuario.clave=="123") {
      usuario.isEmpleado==true;
      return this.usuario=usuario;
    } else {
      return null;
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
  } */

  getUsuario(): Usuario {
    return this.usuario;
  }

  setUsuario(usuario: Usuario) {
    this.usuario = usuario;
  }

  logout(): void {
    this.usuario = null;
  }

  private handleError(error: Response) {
    console.log("error : " + error);
    return Observable.throw(error.json().catch || "server error");
  }
}
