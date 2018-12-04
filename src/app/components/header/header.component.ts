import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggleType: boolean;
  toggleItems: boolean;

  constructor() { }

  toggleSub() {
    this.toggleType = !this.toggleType;
  }

  toggleItemsGroup() {
    this.toggleItems = !this.toggleItems;
  }

  ngOnInit() {
  }

}
