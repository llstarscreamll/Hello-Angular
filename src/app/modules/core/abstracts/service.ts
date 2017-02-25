import 'rxjs/add/observable/throw';

import { Headers, Response } from '@angular/http';

import { ENV } from './../../../../environments/env';
import { Observable } from 'rxjs/Observable';

/**
 * Abstract Class Service.
 */
export abstract class Service {

  protected headers: Headers;
  protected domain: string = ENV.API_URL;
  protected abstract API_ENDPOINT: string;

  public constructor() {
    this.headers = new Headers({ 'Accept': 'application/json' });
  }

  /**
   * Returns full API endpoint.
   */
  protected apiEndpoint(path: string = ''): string {
    let url = this.domain + '/';
    url += (this.API_ENDPOINT !== '') ? this.API_ENDPOINT + '/' : '';

    return url + path;
  }

  /**
   * Handle response errors.
   */
  protected handleError(error: Response | any): Observable<any> {
    let errorMsg: string;
    let body: string | any;

    if (error instanceof Response) {
      body = error.json() || '';
      const err = body.message || JSON.stringify(body);
      errorMsg = `${error.statusText || ''}, ${err}`;
    } else {
      errorMsg = error.statusText ? error.statusText : error.toString();
    }
    
    console.log(body);
    console.error(`${error.status} - ` + errorMsg);

    return Observable.throw(body);
  }

}