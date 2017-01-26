import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Service } from './../abstracts/service';

@Injectable()
export class AppService extends Service {

  protected API_ENDPOINT: string = "company-info";

  public constructor(private http: Http) {
    super();
  }

  /**
   * Retrieve the app data from the API.
   */
  public getData() {
    return this.http
      .get(this.apiEndpoint(), this.headers)
      .map(res => res.json().data)
      .catch(this.handleError);
  }

}
