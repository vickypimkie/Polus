import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  public carouselOne: NgxCarousel;
   ngOnInit() {
     this.carouselOne = {
       grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
       slide: 1,
       speed: 400,
       interval: 4000,
       point: {
         visible: true
       },
       load: 2,
       touch: true,
       loop: true,
       custom: 'banner',
     };
  }

}
