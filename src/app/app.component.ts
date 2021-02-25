import { Component, OnInit } from "@angular/core";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";
import { Angulartics2GoogleAnalytics } from "angulartics2/ga";
import { ImageService } from "./services/image.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  subscription: Subscription;
  added = false;
  title = "app";

  constructor(
    private router: Router,
    private imgSrv: ImageService,
    private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics
  ) {
    this.angulartics2GoogleAnalytics.startTracking();
    this.subscription = this.imgSrv.checkIfPwAdded().subscribe((pwAdded) => {
      this.added = pwAdded;
    });
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.imgSrv.sendForm(false);
      }
    });
  }
}
