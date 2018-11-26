import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { UsuarioService } from "src/app/services/usuario.service";

@Injectable()
export class TutorGuard implements CanActivate {

    constructor(private _usuarioService: UsuarioService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        var usuario = this._usuarioService.getUsuario();

        if (usuario == null) {
            alert("Usuario no autenticado");
            this.router.navigate(['/home'])
            return false;
        }
        else if (usuario.isTutor) return true;
        else {
            alert("No esta autorizado para ingresar");
            this.router.navigate(['/home'])
            return false;
        }
    }
}