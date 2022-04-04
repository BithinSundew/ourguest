import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionModule} from "ngx-accordion";
import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';


@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    AccordionModule
  ]
})
export class FaqModule { }
