import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppModule} from './app.module'
import { SeriesModule } from "./series/series.module";
import { ListarSeriesModule } from "./series/listar-series/listar-series.module";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SeriesModule, AppModule, ListarSeriesModule]
})
export class AppComponent {
  title = 'Netflix';
}