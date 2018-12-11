import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class ImageService {
  private apiPath: string;

  constructor(private http: HttpClient) {
    this.apiPath = environment.api;
  }

  public getImages(slug: string) {
    return this.http.get(`${this.apiPath}/assets/` + slug + '.json').pipe(map(response => response));
  }
}
