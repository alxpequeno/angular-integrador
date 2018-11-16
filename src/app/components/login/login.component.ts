import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = null;

  constructor(private _userService: UsuarioService) {
    this.usuario = <Usuario>{
      email: "",
      clave: ""
    };
  }

  ngOnInit() {
  }

  ingresar(): void {

    var usuarioRegistrado = this._userService.login(this.usuario);

    if (usuarioRegistrado == null) {
      alert("Usuario no registrado");
    } else {
      alert("Usuario registrado");
    }
  }



}
