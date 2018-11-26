import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = null;

  constructor(private _userService: UsuarioService, private router: Router) {
    this.usuario = <Usuario>{
      email: "",
      clave: ""
    };
  }

  ngOnInit() {
  }

  ingresar(): void {
    console.log(this.usuario);
    this._userService.login(this.usuario)
      .subscribe(data => {

        if (data != null) {
          this._userService.setUsuario(<Usuario>data);
          console.log(this._userService.usuario);
          this.router.navigate(['/home']);
        } else {
          alert("Usuario no registrado");
        }

      },
        error => console.error(error));
  }



}
