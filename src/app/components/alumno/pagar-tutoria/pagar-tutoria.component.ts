import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarjeta } from 'src/app/interfaces/tarjeta.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PagoService } from 'src/app/services/pago.service';
import { TutoriaService } from 'src/app/services/tutoria.service';
import { UsuarioService } from 'src/app/services/usuario.service';
declare var $: any;

@Component({
  selector: 'app-pagar-tutoria',
  templateUrl: './pagar-tutoria.component.html',
  styleUrls: ['./pagar-tutoria.component.css']
})
export class PagarTutoriaComponent implements OnInit {

  precio_tutoria: number;
  id_tutoria: number;
  tarjeta: Tarjeta;
  formulario: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private pagoService: PagoService, private router: Router, private serviceTutoria: TutoriaService, private serviceUsuario: UsuarioService) {
    console.log("Pagar tutoria constructor");

    this.activatedRoute.params.subscribe(params => {
      this.precio_tutoria = params["precio_tutoria"];
      this.id_tutoria = params["id_tutoria"];

      console.log(this.precio_tutoria);
      console.log(this.id_tutoria);
    });

    this.formulario = new FormGroup({
      'numero': new FormControl('', [Validators.required]),
      'tipo': new FormControl('', [Validators.required]),
      'cvv': new FormControl('', [Validators.required]),
      'titular': new FormControl('', [Validators.required]),
      'mes': new FormControl('', [Validators.required]),
      'ano': new FormControl('', [Validators.required])
    });


  }

  pagar() {

    console.log(this.formulario.controls);

    if (this.formulario.invalid) {
      alert("Los datos de la tarjeta son invalidos");
    }

    this.tarjeta = {
      NumeroTarjeta: this.formulario.controls['numero'].value,
      TipoTarjeta: this.formulario.controls['tipo'].value,
      CodigoSeguridadTarjeta: this.formulario.controls['cvv'].value,
      TitularTarjeta: this.formulario.controls['titular'].value,
      MesExpiracionTarjeta: this.formulario.controls['mes'].value,
      AñoExpiracionTarjeta: this.formulario.controls['ano'].value,
      MontoConsumir: this.precio_tutoria
    }

    console.log(this.tarjeta);

    this.pagoService.pagar(this.tarjeta)
      .subscribe(data => {
        console.log(data);

        if (!data["TransaccionCompleta"]) {
          alert(data["TransaccionMensaje"]);
        } else {
          console.log("matriculando...");
          this.serviceTutoria.matricularTutoria(this.id_tutoria, this.serviceUsuario.usuario.id).subscribe(data => { console.log(data) });
          this.router.navigate(['/alumno', 'listado-tutorias']);
        }



      },
        error => console.error(error));


  }

  ngOnInit() {

  }

}
