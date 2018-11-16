import { Component, OnInit, SimpleChanges } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario: Usuario;

  constructor(private _usuarioService: UsuarioService) {
    this.usuario = this._usuarioService.usuario;
  }

  ngOnInit() {


  }

  logout() {
    console.log("Sali del sistema");
    this._usuarioService.logout();
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


