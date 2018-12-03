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
    this.router.events.subscribe((event) => {
      // if (event instanceof NavigationEnd) {
      //   const slug = event.url.substr(event.url.lastIndexOf('/') + 1);
      //   this.images = this.http.get('http://localhost:4200/assets/' + slug + '.json').pipe(map(data => {
      //     this.images = data;
      //   }));
      // }
    });
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.images = data.entry.images;
    });
  }

}
