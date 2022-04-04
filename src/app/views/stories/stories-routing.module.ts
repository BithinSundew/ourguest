import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { StoriesComponent } from './list/stories.component';

const routes: Routes = [
  {
    path: '',
    component: StoriesComponent,
    data: {
      title: 'Stories | Our Guest'
    },
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    data: {
      title: 'Story Details | Our Guest'
    },
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoriesRoutingModule { }
