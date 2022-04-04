import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser} from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'our guest';
  isBrowser:boolean=false;
  constructor(
    private router: Router, @Inject(PLATFORM_ID) platformId: string ) {
      this.isBrowser = isPlatformBrowser(platformId);

  }

    /* ===============================================================
  JavaScript Load
  =============================================================== */
  public loadScript() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../../../assets/js/frontend.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  ngOnInit() {
    if(this.isBrowser){
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        this.loadScript();
        window.scrollTo(0, 0);
      });
    }

  }

}
