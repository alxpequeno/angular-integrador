import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumno } from '../../../interfaces/alumno.interface';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-registrar-alumno',
  templateUrl: './registrar-alumno.component.html',
  styleUrls: ['./registrar-alumno.component.css']
})
export class RegistrarAlumnoComponent implements OnInit {

  formulario: FormGroup;
  onSubmit: boolean = false;
  alumno: Alumno;

  constructor(private router: Router, private _alumnoService: AlumnoService) {
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

  registrar() {
    this.onSubmit = true;
    console.log(this.formulario);

    this.alumno = {
      nombre: this.formulario.controls['nombre'].value,
      apellido: this.formulario.controls['apellidos'].value,
      direccion: this.formulario.controls['direccion'].value,
      email: this.formulario.controls['email'].value,
      clave: this.formulario.controls['clave'].value
    }

    console.log(this.alumno);

    this._alumnoService.registrarAlumno(this.alumno)
      .subscribe(data => {
        console.log(data);
        //this.router.navigate(['/heroe',data['name']])
      },
        error => console.error(error));

  }

}
