import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationsRoutingModule } from './destinations-routing.module';
import { DestinationsComponent } from './list/destinations.component';
import { SwiperModule } from "swiper/angular";
import { DetailsComponent } from './details/details.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    DestinationsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DestinationsRoutingModule,
    SwiperModule,
    SharedModule
  ]
})
export class DestinationsModule { }
