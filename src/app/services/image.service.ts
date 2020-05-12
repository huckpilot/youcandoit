import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Observable, Subject } from "rxjs";

@Injectable()
export class ImageService {
  private apiPath: string;
  private needPassword = new Subject<any>();
  private added = new Subject<any>();

  constructor(private http: HttpClient) {
    this.apiPath = environment.api;
  }

  pwAdded(added?: boolean) {
    this.added.next(added);
  }

  checkIfPwAdded(): Observable<any> {
    return this.added.asObservable();
  }

  sendForm(needPassword?: boolean) {
    this.needPassword.next(needPassword);
  }

  getForm(): Observable<any> {
    return this.needPassword.asObservable();
  }

  public getImages(slug: string) {
    if (slug) {
      return this.http
        .get(`${this.apiPath}/assets/` + slug + ".json")
        .pipe(map((response) => response));
    } else {
      return this.http
        .get(`${this.apiPath}/assets/home.json`)
        .pipe(map((response) => response));
    }
  }
}
