import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  protected itens = [
    {
      label: 'Primary',
    },
    {
      label: 'Dashboard',
      link: '/dashboard',
      icon: 'dashboard',
      hidden: false,
    },
    {
      label: 'Components',
      link: '/components',
      icon: 'pages',
      items: [
        {
          label: 'Item 2.1',
          link: '/item-2-1',
          icon: 'favorite'
        },
        {
          label: 'Item 2.2',
          link: '/item-2-2',
          icon: 'favorite_border'
        }
      ]
    },
    {
      label: 'Layouts',
      link: '/',
      icon: 'filter_tilt_shift'
    },
    {
      label: 'Documentation',
      link: '/item-4',
      icon: 'help',
    },
    {
      label: 'Secondary',
    },
    {
      label: 'UI Elements',
      link: '/',
      icon: 'bookmark'
    },
    {
      label: 'Graphs',
      link: '/',
      icon: 'bar_chart'
    },
    {
      label: 'Forms',
      link: '/',
      icon: 'check_circle_outline'
    },
    {
      label: 'Tables',
      link: '/',
      icon: 'table_chart'
    },
    {
      label: 'Icons',
      link: '/',
      icon: 'star'
    },
    {
      label: 'Maps',
      link: '/',
      icon: 'location_on'
    },
    {
      label: 'Settings',
      link: '/',
      icon: 'settings'
    },
    {
      label: 'Login',
      link: '/',
      icon: 'verified_user'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
