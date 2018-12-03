import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { mergeMap, shareReplay, map } from 'rxjs/operators';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
    ) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data.entry.images);
      this.images = data.entry.images;
    });
  }

}
