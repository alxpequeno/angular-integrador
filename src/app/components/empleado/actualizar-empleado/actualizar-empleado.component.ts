import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Empleado } from 'src/app/interfaces/empleado.interface';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  formulario: FormGroup;
  onSubmit: boolean = false;
  empleado: Empleado;

  constructor(private router: Router, private _empleadoService: EmpleadoService) {
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

    this.empleado = {
      nombre: this.formulario.controls['nombre'].value,
      apellido: this.formulario.controls['apellidos'].value,
      direccion: this.formulario.controls['direccion'].value,
      email: this.formulario.controls['email'].value,
      clave: this.formulario.controls['clave'].value
    }

    console.log(this.empleado);

    this._empleadoService.actualizarEmpleado(this.empleado)
      .subscribe(data => {
        console.log(data);
        //this.router.navigate(['/heroe',data['name']])
      },
        error => console.error(error));

  }

  eliminar() {
    if (confirm("¿Seguro que desea eliminar el usuario?")) {
      console.log("Usuario Eliminado");
      this.empleado = {
        nombre: this.formulario.controls['nombre'].value,
        apellido: this.formulario.controls['apellidos'].value,
        direccion: this.formulario.controls['direccion'].value,
        email: this.formulario.controls['email'].value,
        clave: this.formulario.controls['clave'].value
      }

      console.log(this.empleado);

      this._empleadoService.eliminarEmpleado(this.empleado)
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
