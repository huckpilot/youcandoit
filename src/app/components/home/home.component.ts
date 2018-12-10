import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  landing: string;

  constructor() { }

  ngOnInit() {
    this.landing = `${window.location.origin}/assets/images/splash.jpg`;
  }

}
