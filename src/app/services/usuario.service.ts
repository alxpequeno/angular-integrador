import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { Constants } from '../app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario:Usuario=null;

  usuarioURL: string = Constants._URL + "api/usuario/login";

  constructor(private http: HttpClient) { }

  login(usuario: Usuario):Usuario {

    if(usuario.email=="admin"&&usuario.clave=="123") {
      usuario.isEmpleado==true;
      return this.usuario=usuario;
    } else {
      return null;
    }
   
  }

  getUsuario(): Usuario {
    return this.usuario;
  }

  logout(): void {
    this.usuario = null;
  }
}
