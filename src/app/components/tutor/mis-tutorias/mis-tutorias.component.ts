import { Component, OnInit } from '@angular/core';
import { TutoriaView } from 'src/app/interfaces/tutoriaView.interface';
import { TutoriaService } from 'src/app/services/tutoria.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-tutorias',
  templateUrl: './mis-tutorias.component.html',
  styleUrls: ['./mis-tutorias.component.css']
})
export class MisTutoriasComponent implements OnInit {

  tutorias: TutoriaView[] = [];

  constructor(private _serviceTutoria: TutoriaService, private _serviceUsuario: UsuarioService, private router:Router) { }

  ngOnInit() {
    this.obtenerTutoriasTutor();
  }

  obtenerTutoriasTutor() {
    this._serviceTutoria.obtenerTutoriasTutor(this._serviceUsuario.usuario)
      .subscribe((data: any) => {
        this.tutorias = data;
        console.log(this.tutorias);
      });
  }

  culminar(idTutoria: number) {
    console.log(idTutoria);

    this._serviceTutoria.culminarTutoria(idTutoria)
      .subscribe((data: any) => {
        console.log(data);
        this.obtenerTutoriasTutor();
      });

  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  actualizarTutoria(idTutoria: number) {
    this.router.navigate(['/tutor','actualizar-tutoria',idTutoria]);
  }
}
