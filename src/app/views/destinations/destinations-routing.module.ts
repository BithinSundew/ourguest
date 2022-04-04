import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { DestinationsComponent } from './list/destinations.component';

const routes: Routes = [

  {
    path: '',
    component: DestinationsComponent,
    data: {
      title: 'Destination List | Our Guest'
    }
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    data: {
      title: 'Destination List | Our Guest'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationsRoutingModule { }
