import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AppService {
  // requests options
  private headers: Headers;
  private API_ENDPOINT: string = "/api/company-info";

  public constructor(
    private http: Http
  ) {
    this.headers = new Headers({ 'Accept': 'application/json' });
  }

  /**
   * Retrieve the app data from the API.
   */
  public getData() {
    return this.http
      .get(this.API_ENDPOINT, this.headers)
      .map(res => res.json().data)
      .catch(this.handleError);
  }

  /**
   * Handle the error responses.
   */
  private handleError(error: Response | any) {
    let errorMsg: string;
    let body: string | any;

    if (error instanceof Response) {
      body = error.json() || '';
      const err = body.message || JSON.stringify(body);
      errorMsg = `${error.statusText || ''}, ${err}`;
    } else {
      errorMsg = error.statusText ? error.statusText : error.toString();
    }

    console.error(`${error.status} - ` + errorMsg);

    return Observable.throw(body);
  }
}
