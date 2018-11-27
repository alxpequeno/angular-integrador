import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Tutor } from 'src/app/interfaces/tutor.interface';

@Component({
  selector: 'app-evaluar-tutor',
  templateUrl: './evaluar-tutor.component.html',
  styleUrls: ['./evaluar-tutor.component.css']
})
export class EvaluarTutorComponent implements OnInit {

  tutor: Tutor = null;

  constructor(private activatedRoute: ActivatedRoute, private empleadoService: EmpleadoService, private router: Router) {

    this.activatedRoute.params.subscribe(params => {

      let id: number = params['id'];

      this.getTutor(id);


    })
  }

  ngOnInit() {
  }

  getTutor(id: number) {

    this.empleadoService.getTutor(id)
      .subscribe((tutor: Tutor) => {
        this.tutor = tutor;
        console.log(this.tutor);
      });
  }

  aceptarTutor() {
    this.empleadoService.aceptarTutor(this.tutor)
      .subscribe(data => {

        alert(data);
        this.router.navigate(['/empleado', 'evaluar']);

      });
  }

  rechazarTutor() {
    this.router.navigate(['/empleado', 'evaluar']);
  }

}
