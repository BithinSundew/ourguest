import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-places',
  templateUrl: './popular-places.component.html',
  styleUrls: ['./popular-places.component.scss']
})
export class PopularPlacesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  test(){
    this.router.navigate(['destinations']);
  }

}
