import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // templateUrl: ``,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'test-app';

  items = [
    { title: 'Rates', icon: 'credit-card', link: '/rates' },
    { title: 'Continents', icon: 'globe-2', link: '/continents' },
    {
      title: 'Orders',
      icon: 'cube',
      children: [
        { title: 'Categories', icon: 'list', link: '/categories' },
        { title: 'Products', icon: 'archive', link: '/products' }
      ]
    }
  ];

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit() {
  }
  
  toggle() {
    this.sidebarService.toggle(true, 'mainMenu');
  }
}
