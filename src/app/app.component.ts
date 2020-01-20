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
    {
      title: 'Rates',
      icon: 'credit-card',
      link: '/rates'
    },
    {
      title: 'Continents',
      icon: 'globe-2',
      link: '/continents'
    }
  ];

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit() {
  }

  toggle() {
    this.sidebarService.toggle(true, 'mainMenu');
  }
}
