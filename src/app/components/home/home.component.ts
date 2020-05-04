import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ImageService } from "src/app/services/image.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  landing: string;
  images: any;
  galExpanded: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private imgSrv: ImageService
  ) {}

  ngOnInit() {
    this.landing = `${window.location.origin}/assets/images/benice.gif`;
    this.route.data.subscribe((data) => {
      if (data.entry.images) {
        this.images = data.entry.images;
      }
    });
  }

  expandGallery() {
    this.galExpanded = !this.galExpanded;
  }
}
