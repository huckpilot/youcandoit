import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ImageService {

  constructor(private http: HttpClient) {
  }

  public getImages(slug: string) {
    return this.http.get('http://localhost:4200/assets/' + slug + '.json').pipe(map(response => response));
  }
}
