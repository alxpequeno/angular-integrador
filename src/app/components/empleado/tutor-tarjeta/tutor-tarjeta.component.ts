import { Component, OnInit, Input } from '@angular/core';
import { Tutor } from 'src/app/interfaces/tutor.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-tarjeta',
  templateUrl: './tutor-tarjeta.component.html',
  styleUrls: ['./tutor-tarjeta.component.css']
})
export class TutorTarjetaComponent implements OnInit {

  @Input() items: Tutor[];


  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  verTutor(item: Tutor) {

    let tutorID = item.id;

    this.router.navigate(['empleado', 'evaluar', 'tutor', tutorID]);

  }

}
