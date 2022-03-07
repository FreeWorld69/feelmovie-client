import { Injectable } from "@angular/core";
import { Configs } from "../../configs/config";
import { HttpClient } from "@angular/common/http";
import { Observable, timeout } from "rxjs";

@Injectable({providedIn: 'root'})
export class NetworkProvider {
  public readonly BASE_URL: string = `${Configs.constants.apiUrl}/api/movies`;

  constructor(
    private readonly http: HttpClient
  ) {}

  public get<T>(urlParam: string): Observable<T> {
    // correct url
    const url = urlParam.startsWith('/') ? urlParam : '/' + urlParam;

    // cookie accepting and timeout of 5 sec
    return this.http
      .get<T>(this.BASE_URL + url, {withCredentials: true})
      .pipe(timeout(5000));
  }
}


// for test reasons
// public test(): Observable<unknown> {
//   const x = new HttpContext()
//   const params = new HttpParams();
//   params.set('userId', 1);
//
//   const headers = new HttpHeaders();
//   headers.set('Authorization', 'auth-token');
//
//   return this.http.post<unknown>('/xxx', {something: 123}, {
//     params,
//     headers,
//     responseType: 'json'
//   });
// }
