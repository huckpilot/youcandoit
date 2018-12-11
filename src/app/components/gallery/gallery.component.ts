import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { mergeMap, shareReplay, map } from 'rxjs/operators';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: any;
  galExpanded: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
    ) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.images = data.entry.images;
    });
  }

  expandGallery() {
    this.galExpanded = !this.galExpanded;
  }

}
