import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesComponent } from './list/stories.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    StoriesComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    StoriesRoutingModule
  ]
})
export class StoriesModule { }
