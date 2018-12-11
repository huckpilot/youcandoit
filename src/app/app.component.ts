import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
      this.angulartics2GoogleAnalytics.startTracking();
    }
  title = 'app';
}
