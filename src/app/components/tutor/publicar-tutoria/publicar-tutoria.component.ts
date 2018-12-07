import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tutoria } from 'src/app/interfaces/tutoria.interface';
import { TutoriaService } from 'src/app/services/tutoria.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { TutorService } from 'src/app/services/tutor.service';
import { Tutor } from 'src/app/interfaces/tutor.interface';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-publicar-tutoria',
  templateUrl: './publicar-tutoria.component.html',
  styleUrls: ['./publicar-tutoria.component.css']
})
export class PublicarTutoriaComponent implements OnInit {

  formulario: FormGroup;
  tutoria: Tutoria;
  onSubmit: boolean = false;
  usuario: Usuario = null;

  constructor(private router: Router, private _tutoriaService: TutoriaService, private _usuarioService: UsuarioService, private tutorService: TutorService) {
    this.usuario = _usuarioService.usuario;
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
    var today = new Date();
    var tutor: Tutor = null;
    this.tutorService.obtenerTutorID(this.usuario.id)
      .subscribe((data: any) => {
        tutor = data;
        console.log(tutor);
        if (tutor == null) {
          alert("No es tutor");
          this.router.navigate(['/home']);
        } else if (!tutor.isAceptado) {
          alert("Todavia no es un Tutor aceptado");
          this.router.navigate(['/home']);
        }
      });

    /* $('#fecha').calendar({
      type: 'date',
      minDate: today,
      formatter: {
        date: function (date, settings) {
          if (!date) return '';
          var day = date.getDate();
          var month = date.getMonth() + 1;
          var year = date.getFullYear();
          return day + '/' + month + '/' + year;
        }
      },
      onChange: function (date, text) {
        var newValue = text;
        alert(newValue);
       },
    }); */

    /* $(document).ready(function () {
      $('#fecha').calendar({
        type: 'date',
        minDate: today
      });
      $('#hora').calendar({
        type: 'time'
      });
    }); */
  }


  publicarTutoria() {
    console.log(this.formulario);

    if (this.formulario.invalid) {
      alert("Se encontraron errores, revisar por favor.");
      return;
    }


    this.onSubmit = true;


    this.tutoria = {
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

    this._tutoriaService.registrarTutoria(this.tutoria)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/tutor', 'mis-tutorias']);
      },
        error => console.error(error));

  }

}
