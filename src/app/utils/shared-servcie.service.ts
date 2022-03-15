import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class SharedService {
  public videPlayerSource = new Subject<any>();

  videoPlayCalled$ = this.videPlayerSource.asObservable();

  videoPlay() {
    this.videPlayerSource.next(null);
  }
}
