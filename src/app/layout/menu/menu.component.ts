import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  menus: Model.Menu[];
  items: Model.Product[];

  constructor() {
    this.menus = [
      {
      id: 1,
      name: 'Мороженое',
      items: [
        {
          id: 1,
          name: 'Ванильное',
          note: 'sl.png'
        },
        {
          id: 2,
          name: 'Шоколадное',
          note: 'mt.png'
        },
        {
          id: 3,
          name: 'Фисташковое',
          note: 'fis.png'
        },
        {
          id: 4,
          name: 'Ежевика-лаванда',
          note: 'lav.png'
        },
        {
          id: 5,
          name: 'Шоколадно-мятное',
          note: 'mt.png'
        },
        {
          id: 6,
          name: 'Свежие фрукты',
          note: 'fr.png'
        },
        {
          id: 7,
          name: 'Клубничное',
          note: 'kl.png'
        },
        {
          id: 8,
          name: 'Лайм',
          note: 'lime.png'
        },
        {
          id: 9,
          name: 'Ореховое',
          note: 'or.png'
        },
        {
          id: 10,
          name: 'Фитнес сорбеты',
          note: 'sorb.png'
        },
        {
          id: 11,
          name: 'Мармеладные мишки гамми',
          note: 'gam.png'
        },
        {
          id: 12,
          name: 'Мороженое фондю',
          note: 'fon.png'
        }
      ]

      },
      {
        id: 2,
        name: 'Топинги',
        items: [
          {
            id: 1,
            name: 'Шоколад',
            note: 't2.png'
          },
          {
            id: 2,
            name: 'Вишня',
            note: 't4.png'
          },
          {
            id: 3,
            name: 'Карамель',
            note: 't1.png'
          },
          {
            id: 4,
            name: 'Миндаль',
            note: 't3.png'
          },
          {
            id: 5,
            name: 'Кокос',
            note: 't1.png'
          },
          {
            id: 6,
            name: 'Малина',
            note: 't3.png'
          },
          {
            id: 7,
            name: 'Банан-киви',
            note: 't2.png'
          },
          {
            id: 8,
            name: 'Манго',
            note: 't1.png'
          }
        ]

      },
      {
        id: 3,
        name: 'Замороженный йогурт',
        items: [
          {
            id: 1,
            name: 'Шоколадный',
            note: 'no'
          },
          {
            id: 2,
            name: 'Ванильный',
            note: 'no'
          },
          {
            id: 3,
            name: 'Клубничный',
            note: 'no'
          },
          {
            id: 4,
            name: 'С малиной и киви',
            note: 'no'
          }
        ]
      },
      {
        id: 4,
        name: 'Гонконгские вафли',
        items: [
          {
            id: 1,
            name: 'С бананом и киви',
            note: 'no'
          },
          {
            id: 2,
            name: 'С вишней',
            note: 'no'
          },
          {
            id: 3,
            name: 'С клубникой',
            note: 'no'
          },
          {
            id: 4,
            name: 'С шоколадом и орехами',
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
            name: 'Соки',
            note: 'no'
          },
          {
            id: 2,
            name: 'Молочный коктейль',
            note: 'no'
          },
          {
            id: 3,
            name: 'Гляссе',
            note: 'no'
          },
          {
            id: 4,
            name: 'Лимонад',
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
            name: 'Чай фруктовый',
            note: 'no'
          },
          {
            id: 2,
            name: 'Чай зеленый',
            note: 'no'
          },
          {
            id: 3,
            name: 'Чай черный',
            note: 'no'
          },
          {
            id: 4,
            name: 'Американо',
            note: 'no'
          },
          {
            id: 5,
            name: 'Эспрессо',
            note: 'no'
          },
          {
            id: 6,
            name: 'Капуччино',
            note: 'no'
          },
          {
            id: 7,
            name: 'Латте',
            note: 'no'
          },
          {
            id: 8,
            name: 'Мокко',
            note: 'no'
          }
        ]

      },
    ];
    this.showPart(this.menus[0]);
  }

  showPart(menu) {
    this.items = menu.items;
  }

  ngOnInit() {
  }
}
