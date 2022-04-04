import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { PlacesComponent } from './list/places.component';

const routes: Routes = [

  {
    path: '',
    component: PlacesComponent,
    data: {
      title: 'Place List | Our Guest',

    },
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    data: {
      title: 'Place Details | Our Guest',

    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule { }
