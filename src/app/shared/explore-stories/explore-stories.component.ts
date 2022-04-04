import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-explore-stories',
  templateUrl: './explore-stories.component.html',
  styleUrls: ['./explore-stories.component.scss']
})
export class ExploreStoriesComponent implements OnInit {
  public apiData: any = [];
  limit: number = 10; // <==== Edit this number to limit API results
  customOptions: OwlOptions = {
    loop: true,
    items:2,
    margin: 30,
    autoplay: true,
    nav: false,
    center: false,
    dots: false,
    autoHeight: true,
    autoWidth: true
  };
  constructor() { }


  ngOnInit(): void {
    this.apiData = [
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      }
    ]
  }

  title = 'ng-swiper-demo';

  slideData = [
    {
      id: 382,
      name: "Metal bluetooth cyan",
    }, {
      id: 822,
      name: "Avon",
    },{
      id: 382,
      name: "Metal bluetooth cyan",
    }
  ]



}
