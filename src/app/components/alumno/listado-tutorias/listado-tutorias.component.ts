import { Component, OnInit } from '@angular/core';
import { Tutoria } from 'src/app/interfaces/tutoria.interface';
import { TutoriaService } from 'src/app/services/tutoria.service';
import { TutoriaView } from 'src/app/interfaces/tutoriaView.interface';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-listado-tutorias',
  templateUrl: './listado-tutorias.component.html',
  styleUrls: ['./listado-tutorias.component.css']
})
export class ListadoTutoriasComponent implements OnInit {

  tutorias: TutoriaView[] = [];
  t: Tutoria = null;

  constructor(private _serviceTutoria: TutoriaService, private _usuarioService: UsuarioService, private router: Router) {
    this.t = <Tutoria>{
      tituloTutoria: "",
      categoriaTutoria: "",
      Foto: "",
      fechaTutoria: "",
      horaTutoria: "",
      ubicacionTutoria: "",
      precioTutoria: 0,
      descripcionTutoria: ""
    }
  }

  ngOnInit() {
    this.buscarTutorias();
  }

  buscarTutorias() {
    this._serviceTutoria.buscarTutorias(this.t)
      .subscribe((data: any) => {
        this.tutorias = data;
        console.log(this.tutorias);
      });
  }

  matricular(id_tutoria: number, precio_tutoria: number) {

    var msg: string = "";

    console.log(id_tutoria);
    console.log(this._usuarioService.usuario.id);

    this._serviceTutoria.validarMatriculado(id_tutoria, this._usuarioService.usuario.id)
      .subscribe((data: any) => {
        console.log("Validando...");
        console.log(data);
        msg = data;

        if (msg.length > 0) {
          alert(msg);

        } else {
          this.router.navigate(['/alumno', 'pagar-tutoria', id_tutoria, precio_tutoria]);
        }
      });





  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  filtrar() {

    console.log(this.t);
    this.buscarTutorias();
  }

  categoriaChange(event: any) {
    this.t.categoriaTutoria = event.target.value;
  }

  isTutorias(): boolean {

    if (this.tutorias == null) return false;
    if (this.tutorias.length > 0) return true;
    else return false;
  }
}
