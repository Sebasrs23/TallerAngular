import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SeriesService } from './series/series.service';

import { SeriesModule } from './series/series.module';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
    SeriesModule
  ],
  providers: [SeriesService],
  bootstrap: [],
  exports: []
})
export class AppModule { }