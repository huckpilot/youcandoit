import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Subscription} from 'rxjs';
import { ImageService } from 'src/app/services/image.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  subscription: Subscription;
  images: any;
  galExpanded: boolean;
  protect = false;
  values = '';
  regex: any;
  pw: string;
  result: any;
  stored: string;

  onKey(event: any) { // without type info
    this.regex = /^2019$/;
    this.result = this.regex.test(event.target.value);
    this.values = event.target.value;
    if (this.result) {
      localStorage.setItem('passwordAdded', 'true');
      this.stored = localStorage.getItem('passwordAdded');
      this.imgSrv.pwAdded(true);
      this.protect = false;
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private imgSrv: ImageService,
  ) {
    this.subscription = this.imgSrv.getForm().subscribe(showForm => {
      this.protect = showForm;
    });
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
