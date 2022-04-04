import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgHelmetModule } from "ng-helmet";
@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgHelmetModule.forRoot({
      baseTitle: "Our Guest | Website",
    }),
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
