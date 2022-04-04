import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DestinationsComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
