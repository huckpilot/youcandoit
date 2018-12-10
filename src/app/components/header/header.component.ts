import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggleType: boolean;
  sketchbookOpen: boolean;
  sketchbookItems: boolean;
  comicItems: boolean;

  constructor() {
    this.toggleType = true;
    this.comicItems = true;
  }

  toggleSub() {
    this.toggleType = !this.toggleType;
  }

  toggleSketchbook() {
    this.sketchbookItems = !this.sketchbookItems;
  }

  toggleComic() {
    this.comicItems = !this.comicItems;
  }

  ngOnInit() {
  }

}
