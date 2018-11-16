import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tutor } from 'src/app/interfaces/tutor.interface';
import { Router } from '@angular/router';
import { TutorService } from 'src/app/services/tutor.service';

@Component({
  selector: 'app-actualizar-tutor',
  templateUrl: './actualizar-tutor.component.html',
  styleUrls: ['./actualizar-tutor.component.css']
})
export class ActualizarTutorComponent implements OnInit {

  formulario: FormGroup;
  onSubmit: boolean = false;
  tutor: Tutor;

  constructor(private router: Router, private _tutorService: TutorService) {
    this.formulario = new FormGroup({
      'nombre': new FormControl('', [Validators.required]),
      'apellidos': new FormControl('', [Validators.required]),
      'direccion': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'clave': new FormControl('', [Validators.required]),
    });


  }

  ngOnInit() {
  }

  actualizar() {
    this.onSubmit = true;
    console.log(this.formulario);

    this.tutor = {
      nombreTutor: this.formulario.controls['nombre'].value,
      apellidoTutor: this.formulario.controls['apellidos'].value,
      direccionTutor: this.formulario.controls['direccion'].value,
      emailTutor: this.formulario.controls['email'].value,
      contraseñaTutor: this.formulario.controls['clave'].value
    }

    console.log(this.tutor);

    this._tutorService.actualizarTutor(this.tutor)
      .subscribe(data => {
        console.log(data);
        //this.router.navigate(['/heroe',data['name']])
      },
        error => console.error(error));

  }

  eliminar() {
    if (confirm("¿Seguro que desea eliminar el usuario?")) {
      console.log("Usuario Eliminado");
      this.tutor = {
        nombreTutor: this.formulario.controls['nombre'].value,
        apellidoTutor: this.formulario.controls['apellidos'].value,
        direccionTutor: this.formulario.controls['direccion'].value,
        emailTutor: this.formulario.controls['email'].value,
        contraseñaTutor: this.formulario.controls['clave'].value
      }

      console.log(this.tutor);

      this._tutorService.eliminarTutor(this.tutor)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['/home'])
        },
          error => console.error(error));
    } else {
      alert("Se cancelo eliminación");
    }

  }

}
