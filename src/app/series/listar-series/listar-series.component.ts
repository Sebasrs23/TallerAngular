import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie.model';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-listar-series',
  templateUrl: './listar-series.component.html',
  styleUrls: ['./listar-series.component.css']
})
export class ListarSeriesComponent implements OnInit {

  series: Serie[] = [];
  numTemporadas: number = 0;
  promSeries: number = 0;

  constructor(private seriesService: SeriesService) { } //Inyectamos SeriesService en el constructor

  ngOnInit(): void {    
    this.seriesService.getSeries().subscribe(series => {//Llamamos al servicio para obtener los datos
      this.series = series;
      this.promedioSeries();
    });
  }
  promedioSeries(): void {                              //Creamos el método para calcular el promedio de las temporadas
    if (this.series.length > 0) {
      this.numTemporadas = this.series.reduce((total, serie) => total + serie.seasons, 0);
      this.promSeries = this.numTemporadas / this.series.length;
    }
  }
}