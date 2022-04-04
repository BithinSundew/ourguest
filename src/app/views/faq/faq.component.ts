import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  accordionList:any=[];
  constructor() { }

  ngOnInit(): void {
    this.accordionList=[
      {
        heading:'I want to make changes in my booking done on OurGuest.in, how do I do it?',
        bodyText:'Write to us at <a href="mailto:contact@ourguest.in">contact@ourguest.in</a> or call our support number (<a href="tel:+919734813101">+91 9734813101</a>, <a href="tel:+917031272572">+91 7031272572</a>) between 9 am to 8 pm on all days. We will make changes accordingly if it is possible.'
      },
      {
        heading:'What are the prices for different group size (3, 5,6, and higher)?',
        bodyText:'Please select the tour package of your choice and mention the number of guests travelling in the send enquiry form. We will get back to you with the prices accordingly. In every tour package mentioned on OurGuest’s website, the prices reduce as the number of people increases.'
      }
    ]
  }

}
