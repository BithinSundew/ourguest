import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq.component';
const routes: Routes = [
{
  path: '',
  component: FaqComponent,
  data: {
    title: 'FAQ | Our Guest',

  },
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule { }
