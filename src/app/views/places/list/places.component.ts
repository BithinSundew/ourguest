import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { Title,Meta } from '@angular/platform-browser';
// import Swiper core and required modules
import SwiperCore from 'swiper';
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PlacesComponent implements OnInit {
  public stateList: any = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Lakshadweep',
    'Puducherry',
  ];
  public placeList: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  config: SwiperOptions = {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 50,
    breakpoints: {
      0: {
        spaceBetween: 30,
      },
      575: {
        spaceBetween: 50,
      },
    },
    navigation: {
      nextEl: '.swiper_9--next',
      prevEl: '.swiper_9--prev',
    },
  };

  placeConfig: SwiperOptions = {
    slidesPerView: 'auto',
		slideToClickedSlide: true,
    navigation: {
      nextEl: '.swiper_1--next',
			prevEl: '.swiper_1--prev',
    },
  };
  constructor( private titleService: Title,private meta: Meta) {

  }

  ngOnInit(): void {}
}
