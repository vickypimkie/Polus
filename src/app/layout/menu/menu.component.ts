import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  menus: Model.Menu[];
  items: Model.Product[];

  icecreams: Model.Icecream[];

  constructor() {
    this.menus = [
      {
      id: 1,
      name: 'Все',
      items: [
        {
          id: 1,
          name: 'Леша',
          note: 'no'
        }
      ]

      },
      {
        id: 2,
        name: 'Мороженое',
        items: [
          {
            id: 1,
            name: 'Дима',
            note: 'no'
          }
        ]

      },
      {
        id: 3,
        name: 'Замороженный йогурт',
        items: [
          {
            id: 1,
            name: 'Леша',
            note: 'no'
          }
        ]
      },
      {
        id: 4,
        name: 'Топинги',
        items: [
          {
            id: 1,
            name: 'Леша',
            note: 'no'
          }
        ]

      },
      {
        id: 5,
        name: 'Холодные напитки',
        items: [
          {
            id: 1,
            name: 'Леша',
            note: 'no'
          }
        ]

      },
      {
        id: 6,
        name: 'Горячие напитки',
        items: [
          {
            id: 1,
            name: 'Леша',
            note: 'no'
          }
        ]

      },
    ];
    this.showPart(this.menus[0]);
  }

  showPart(menu){
    this.items = menu.items;
  }

  ngOnInit() {
  }
}
