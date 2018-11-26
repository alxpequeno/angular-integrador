import { Component, OnInit, Input } from '@angular/core';
import { Tutor } from 'src/app/interfaces/tutor.interface';

@Component({
  selector: 'app-tutor-tarjeta',
  templateUrl: './tutor-tarjeta.component.html',
  styleUrls: ['./tutor-tarjeta.component.css']
})
export class TutorTarjetaComponent implements OnInit {

  @Input() items: Tutor[];
 

  constructor() { 
    
  }

  ngOnInit() {
  }

}
