import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesComponent } from './list/places.component';
import { PlacesRoutingModule } from './places-routing.module';
import { SwiperModule } from "swiper/angular";
import { NgHelmetModule } from "ng-helmet";
import { DetailsComponent } from './details/details.component';
@NgModule({
  declarations: [PlacesComponent, DetailsComponent],
  imports: [
    CommonModule,
    PlacesRoutingModule,
    SwiperModule,
    NgHelmetModule.forRoot({
      baseTitle: "| Replay Value",
    }),
  ]
})
export class PlacesModule { }
