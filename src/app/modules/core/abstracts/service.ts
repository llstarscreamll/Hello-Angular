import { Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { ENV } from './../../../../environments/env';

/**
 * Abstract Class Service.
 */
export abstract class Service {

  protected headers: Headers;
  private domain: string = ENV.API_URL;
  protected abstract API_ENDPOINT: string;

  public constructor() {
    this.headers = new Headers({ 'Accept': 'application/json' });
  }

  /**
   * Returns full API endpoint.
   */
  protected apiEndpoint(path: string = ''): string {
    return this.domain + '/' + this.API_ENDPOINT + '/' + path;
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

    console.error(`${error.status} - ` + errorMsg);

    return Observable.throw(body);
  }

}