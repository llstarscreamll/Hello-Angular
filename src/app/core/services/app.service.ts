import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Service } from './abstract.service';

@Injectable()
export class AppService extends Service {

  protected API_ENDPOINT: string = "v1/company-info";

  public constructor(private http: Http) {
    super();
  }

  /**
   * Retrieve the app data from the API.
   */
  public getData() {
    return this.http
      .get(this.apiEndpoint(), this.headers)
      .map(res => {return res.json().data})
      .catch(this.handleError);
  }

}
