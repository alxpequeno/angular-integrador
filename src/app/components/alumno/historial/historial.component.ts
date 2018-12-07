import { Component, OnInit } from '@angular/core';
import { TutoriaService } from 'src/app/services/tutoria.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Tutoria } from 'src/app/interfaces/tutoria.interface';
import { TutoriaView } from 'src/app/interfaces/tutoriaView.interface';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  tutorias: TutoriaView[] = [];

  constructor(private _serviceTutoria: TutoriaService, private _serviceUsuario: UsuarioService) { }

  ngOnInit() {
    this.obtenerTutoriasAlumno();
  }

  obtenerTutoriasAlumno() {
    this._serviceTutoria.obtenerTutoriasAlumno(this._serviceUsuario.usuario)
      .subscribe((data: any) => {
        this.tutorias = data;
        console.log(this.tutorias);
      });
  }

}
