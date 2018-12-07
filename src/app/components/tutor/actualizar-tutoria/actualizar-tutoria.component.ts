import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Tutoria } from 'src/app/interfaces/tutoria.interface';
import { TutoriaService } from 'src/app/services/tutoria.service';

@Component({
  selector: 'app-actualizar-tutoria',
  templateUrl: './actualizar-tutoria.component.html',
  styleUrls: ['./actualizar-tutoria.component.css']
})
export class ActualizarTutoriaComponent implements OnInit {

  idTutoria: number;
  formulario: FormGroup;
  usuario: Usuario = null;
  onSubmit: boolean = false;
  tutoria: Tutoria;

  constructor(private router:Router,private activateRoute: ActivatedRoute, private _usuarioService: UsuarioService, private _tutoriaService: TutoriaService) {
    this.activateRoute.params.subscribe(params => {
      this.idTutoria = params["idTutoria"];
      console.log(this.idTutoria);
    });

    this.usuario = this._usuarioService.usuario;
    this.formulario = new FormGroup({
      'titulo': new FormControl('', [Validators.required]),
      'categoria': new FormControl('', [Validators.required]),
      'foto': new FormControl('', [Validators.required]),
      'precio': new FormControl('', [Validators.required]),
      'fecha': new FormControl('', [Validators.required]),
      'hora': new FormControl('', [Validators.required]),
      'ubicacion': new FormControl('', [Validators.required]),
      'cantidad': new FormControl('', [Validators.required]),
      'descripcion': new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  actualizarTutoria() {
    if (this.formulario.invalid) {
      alert("Se encontraron errores, revisar por favor.");
    }


    this.onSubmit = true;
    console.log(this.formulario);

    this.tutoria = {
      idTutoria: this.idTutoria,
      tituloTutoria: this.formulario.controls['titulo'].value,
      categoriaTutoria: this.formulario.controls['categoria'].value,
      Foto: this.formulario.controls['foto'].value,
      fechaTutoria: this.formulario.controls['fecha'].value,
      horaTutoria: this.formulario.controls['hora'].value,
      ubicacionTutoria: this.formulario.controls['ubicacion'].value,
      precioTutoria: this.formulario.controls['precio'].value,
      descripcionTutoria: this.formulario.controls['descripcion'].value,
      cantidadMaxima: this.formulario.controls['cantidad'].value,
      idTutor: this.usuario.id
    }

    console.log(this.tutoria);

    this._tutoriaService.actualizarTutoria(this.tutoria)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/tutor','mis-tutorias']);
      },
        error => console.error(error));
  }

  eliminar() {

    this._tutoriaService.culminarTutoria(this.idTutoria)
      .subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['/tutor','mis-tutorias']);
      });

  }
}
