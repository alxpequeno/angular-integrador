import { Component, OnInit, SimpleChanges } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario: Usuario;

  constructor(private _usuarioService: UsuarioService, private router: Router) {
    this.usuario = this._usuarioService.usuario;
  }

  ngOnInit() {


  }

  logout() {
    console.log("Sali del sistema");
    this._usuarioService.logout();
    this.router.navigate(['/home']);
  }

  isEmpleado(): boolean {

    var usuario = this._usuarioService.usuario;

    if (usuario == null) return false;
    else if (usuario.isEmpleado) return true;
    else return false;

  }

  isTutor(): boolean {
    var usuario = this._usuarioService.usuario;

    if (usuario == null) return false;
    else if (usuario.isTutor) return true;
    else return false;
  }

  isAlumno(): boolean {

    var usuario = this._usuarioService.usuario;

    if (usuario == null) return false;
    else if (usuario.isAlumno) return true;
    else return false;
  }

  usuarioLogueado(): boolean {
    var usuario = this._usuarioService.usuario;

    if (usuario != null) {
      return true;
    } else {
      return false;
    }
  }

}


