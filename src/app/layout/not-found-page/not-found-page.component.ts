import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  template: '<h2>Помилка 404. Сторінка не знайдена</h2>',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
