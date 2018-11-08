import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/interfaces/empleado.interface';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

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

  registrar() {
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

    this._empleadoService.registrarEmpleado(this.empleado)
      .subscribe(data => {
        console.log(data);
        //this.router.navigate(['/heroe',data['name']])
      },
        error => console.error(error));

  }
}
