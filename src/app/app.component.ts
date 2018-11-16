import { Component } from '@angular/core';
import { Usuario } from './interfaces/usuario.interface';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-integrador';

  usuario: Usuario;

  constructor(private _usuarioService: UsuarioService) {
    this.usuario = this._usuarioService.getUsuario();
    console.log(this.usuario);
  }
}
