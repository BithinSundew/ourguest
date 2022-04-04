import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from '../app/default-layout/default-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./views/home/home.module").then(
            (m) => m.HomeModule
          ),
      },
      {
        path: "places",
        loadChildren: () =>
          import("./views/places/places.module").then(
            (m) => m.PlacesModule
          ),
      },
      {
        path: "destinations",
        loadChildren: () =>
          import("./views/destinations/destinations.module").then(
            (m) => m.DestinationsModule
          ),
      },
      {
        path: "stories",
        loadChildren: () =>
          import("./views/stories/stories.module").then(
            (m) => m.StoriesModule
          ),
      },
      {
        path: "contact",
        loadChildren: () =>
          import("./views/contact/contact.module").then(
            (m) => m.ContactModule
          ),
      },
      {
        path: "about",
        loadChildren: () =>
          import("./views/about/about.module").then(
            (m) => m.AboutModule
          ),
      },
      {
        path: "faq",
        loadChildren: () =>
          import("./views/faq/faq.module").then(
            (m) => m.FaqModule
          ),
      },
      {
        path: "careers",
        loadChildren: () =>
          import("./views/careers/careers.module").then(
            (m) => m.CareersModule
          ),
      },
      {
        path: "privacy-policy",
        loadChildren: () =>
          import("./views/privacy-policy/privacy-policy.module").then(
            (m) => m.PrivacyPolicyModule
          ),
      }

    ]
  },
 // { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
