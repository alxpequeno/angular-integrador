import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-evaluar',
  templateUrl: './evaluar.component.html',
  styleUrls: ['./evaluar.component.css']
})
export class EvaluarComponent implements OnInit {

  tutores: Usuario[] = [];

  constructor(private _empleadoService: EmpleadoService) { }

  ngOnInit() {
    this._empleadoService.getTutoresPendientes()
      .subscribe((data: any) => {
        
        this.tutores = data;
        console.log(this.tutores);
      }, (errorServicio) => {
        console.log("error");
        console.log(errorServicio.error.error.message);
      });
  }

}
