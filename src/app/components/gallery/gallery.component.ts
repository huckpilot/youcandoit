import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"]
})
export class GalleryComponent implements OnInit {
  subscription: Subscription;
  images: any;
  galExpanded: boolean;
  protect = false;
  values = "";
  regex: any;
  pw: string;
  result: any;
  stored: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.images = data.entry.images;
    });
  }

  expandGallery() {
    this.galExpanded = !this.galExpanded;
  }
}
