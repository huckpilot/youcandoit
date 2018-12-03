import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ImageService } from '../services/image.service';

@Injectable()
export class GalleryGuard implements Resolve<any> {
  constructor(
    private imageServ: ImageService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.imageServ.getImages(route.params['slug']);
  }
}
