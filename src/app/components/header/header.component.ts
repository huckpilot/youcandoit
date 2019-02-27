import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggleType: boolean;
  sketchbookOpen: boolean;
  csItems: boolean;
  bgItems: boolean;

  constructor() {
    this.toggleType = true;
    this.bgItems = true;
    this.csItems = true;
  }

  toggleSub() {
    this.toggleType = !this.toggleType;
  }

  toggleColor() {
    this.csItems = !this.csItems;
  }

  toggleBg() {
    this.bgItems = !this.bgItems;
  }

  ngOnInit() {
  }

}
