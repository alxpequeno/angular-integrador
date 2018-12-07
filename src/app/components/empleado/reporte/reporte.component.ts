import { Component, OnInit } from '@angular/core';
import { Ranking } from 'src/app/interfaces/ranking.interface';
import { TutoriaService } from 'src/app/services/tutoria.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  rankings: Ranking[];

  constructor(private tutoriaService: TutoriaService) {
    this.tutoriaService.reporteTutorias().subscribe(
      (data: any) => {
        this.rankings = data;
      }
    )
  }

  ngOnInit() {
  }



}
