import 'rxjs/add/observable/throw';
import { Headers, Response, URLSearchParams } from '@angular/http';

import { ENV } from './../../../../environments/env';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

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
    console.log(error);
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

  protected parseGetParams(data: Object = {}) {
    let urlParams: URLSearchParams = new URLSearchParams;
    let tmpArray = new Array();

    _.forOwn(data, function (value, key) {
      // parse search, sortedBy and page param
      if (key == "search" || key == "sortedBy" || key == 'page') {
        urlParams.set(key, value);
      }

      // parse orderBy param
      if (key == "orderBy") {
        if (_.has(data, 'orderByRelationsMap.'+value)) {
          //console.warn(_.get(data, 'orderByRelationsMap.'+value) as String);
          urlParams.set(key, _.get(data, 'orderByRelationsMap.'+value) as string);
        } else {
          urlParams.set(key, value);
        }
      }

      // parse columns param
      if (key == "filter") {
        urlParams.set(key, _.join(value, ';'));
      }

      // parse include columns
      if (key == "include") {
        tmpArray = [];
        // iterate over the include object
        _.forOwn(value, (includeValue, includeKey) => {
          // if the include key exist on the columns array, then collect the include value
          if (_.includes(_.get(data, 'filter', []), includeKey)) {
            tmpArray.push(includeValue);
          }
        });
        // join the array with "," and set the url param
        urlParams.set(key, _.join(tmpArray, ','));
      }
    });
    console.warn(urlParams);

    return urlParams;
  }
}