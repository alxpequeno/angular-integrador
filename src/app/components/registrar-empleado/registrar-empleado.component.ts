import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  formulario: FormGroup;
  onSubmit: boolean = false;

  constructor() {
    this.formulario = new FormGroup({
      'nombre': new FormControl('', [Validators.required]),
      'apellidos': new FormControl('', [Validators.required]),
      'direccion': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'clave': new FormControl('', [Validators.required]),
    });

    console.log(this.formulario);

  }

  ngOnInit() {
  }

  registrar() {
    this.onSubmit = true;
    console.log(this.formulario);
  }
}
