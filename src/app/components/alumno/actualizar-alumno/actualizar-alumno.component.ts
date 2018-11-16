import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-actualizar-alumno',
  templateUrl: './actualizar-alumno.component.html',
  styleUrls: ['./actualizar-alumno.component.css']
})
export class ActualizarAlumnoComponent implements OnInit {

  formulario: FormGroup;
  onSubmit: boolean = false;
  alumno: Alumno;

  constructor(private router: Router, private _alumnoService: AlumnoService) {
    this.formulario = new FormGroup({
      'nombre': new FormControl('', [Validators.required]),
      'apellidos': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'clave': new FormControl('', [Validators.required]),
    });


  }

  ngOnInit() {
  }

  actualizar() {
    this.onSubmit = true;
    console.log(this.formulario);

    this.alumno = {
      nombreAlumno: this.formulario.controls['nombre'].value,
      apellidoAlumno: this.formulario.controls['apellidos'].value,
      emailAlumno: this.formulario.controls['email'].value,
      contraseñaAlumno: this.formulario.controls['clave'].value
    }

    console.log(this.alumno);

    this._alumnoService.actualizarAlumno(this.alumno)
      .subscribe(data => {
        console.log(data);
        //this.router.navigate(['/heroe',data['name']])
      },
        error => console.error(error));

  }

  eliminar() {
    console.log("Elimina Alumno");

    
    if (confirm("¿Seguro que desea eliminar el usuario?")) {
        console.log("Usuario Eliminado");
        this.alumno = {
          nombreAlumno: this.formulario.controls['nombre'].value,
          apellidoAlumno: this.formulario.controls['apellidos'].value,
          emailAlumno: this.formulario.controls['email'].value,
          contraseñaAlumno: this.formulario.controls['clave'].value
        }
    
        console.log(this.alumno);
    
        this._alumnoService.eliminarAlumno(this.alumno)
          .subscribe(data => {
            console.log(data);
            this.router.navigate(['/home']);
          },
            error => console.error(error));
    } else {
        alert("Se cancelo eliminación");
    }
    
  }

}
