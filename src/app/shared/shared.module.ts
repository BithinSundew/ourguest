import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ExploreStoriesComponent } from './explore-stories/explore-stories.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { InstaFeedComponent } from './insta-feed/insta-feed.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SwiperModule } from 'swiper/angular';
import { PopularPlacesComponent } from './popular-places/popular-places.component';
@NgModule({
  declarations: [TestimonialsComponent, ExploreStoriesComponent, NewsletterComponent, InstaFeedComponent, PopularPlacesComponent],
  imports: [
    CommonModule,
    CarouselModule,
    NgxUsefulSwiperModule
  ],
  exports: [TestimonialsComponent,ExploreStoriesComponent,NewsletterComponent,InstaFeedComponent,PopularPlacesComponent]

})
export class SharedModule { }
