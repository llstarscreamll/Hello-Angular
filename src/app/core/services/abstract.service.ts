import { Headers, Response, URLSearchParams } from '@angular/http';
import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { environment } from './../../../environments/environment';
import * as fromRoot from './../../reducers';

/**
 * Abstract Class Service.
 */
export abstract class AbstractService {

  protected headers: Headers;
  protected domain: string = environment.api_url;
  protected abstract API_ENDPOINT: string;
  protected required_columns: Array<string> = [];

  public constructor(
    protected store: Store<fromRoot.State> | null = null,
  ) {
    this.headers = new Headers({ 'Accept': 'application/json' });
  }

  protected setAuthorizationHeader() {
    const authToken = localStorage.getItem('token_type') + ' ' + localStorage.getItem('token');
    this.headers.set('authorization', authToken);
  }

  /**
   * Returns full API endpoint.
   */
  protected apiEndpoint(path: string | number = ''): string {
    let url = this.domain;
    url += (this.API_ENDPOINT !== '') ? this.API_ENDPOINT + '/' : '';

    return url + path;
  }

  /**
   * Handle response errors.
   */
  public handleError(error: Response | any): Observable<any> {
    let errorMsg: string;
    let body: string | any;

    if (error instanceof Response) {
      body = error.json() || '';
      const err = body.message || JSON.stringify(body.errors) + ', ' + body.exception;
      errorMsg = `${error.statusText || ''}, ${err}`;
    } else {
      errorMsg = error.statusText ? error.statusText : error.toString();
    }

    console.error(`${error.status} - ` + errorMsg);

    return Observable.throw(body);
  }

  /**
   * Parse a query object to url params, which will be sent in http.get method.
   * This method try to convert the given query object to url params that the
   * Laravel PHP l5-repository package understands, for more info read the
   * package docs:
   * https://github.com/andersao/l5-repository#using-the-requestcriteria
   */
  protected parseGetParams(query: Object = {}): URLSearchParams {
    const urlParams: URLSearchParams = new URLSearchParams;

    // parse for advanced search cases
    if (_.get(query, 'advanced_search', false)) {
      _.forOwn(query, (value, key) => {
        // parse object
        if (_.isPlainObject(value)) {
          _.forOwn(value, (subValue) => {
            subValue != ''
              ? urlParams.append(key + '[]', subValue)
              : null;
          });

          // parse array
        } else if (_.isArray(value)) {
          _.forOwn(value, (subValue => {
            urlParams.append(key + '[]', subValue);
          }));

          // parse flat key => value
        } else {
          urlParams.set(key, value);
        }
      });
    }

    // parse other query options
    _.forOwn(query, (value, key) => {
      // parse search, sortedBy and page param
      if (key == 'search' || key == 'sortedBy' || key == 'page' || key == 'trashed' || key == 'orderBy') {
        urlParams.set(key, value);
      }

      // parse filter param, whick means the columns or model attrs to retrieve.
      // From this:
      // { filter: ['id', 'name', 'author_id', 'published_at', 'user_id'] }
      //
      // to this:
      // { filter: "id;name;author_id;published_at;user_id" }
      if (key == 'filter') {
        // concat the required_columns with the filter columns given query object
        urlParams.set('filter', _.join(this.required_columns.concat(value), ';'));
      }

      // parse include model relations. The required attrs relations should
      // given on a key(the filed needed to retrieve the relation) and value
      // (the model relation name) object map:
      // include: {
      //   'book.author_id': 'author',
      //   'book.user_id': 'createdBy',
      // }
      //
      // so, if the query object has { filter: ['book.author_id', 'book.user_id'] },
      // then the respective relation will be append to the url param, like this:
      // { include: "author,createdBy" }
      //
      // and the required fields will be appened to the filter url param:
      // { filter: "id;name;published_at;author_id;user_id" }
      //
      // NOTE: the word "model" is from the backend side, e.g. the Book model, which
      // has relations with User and Author models:
      // Book::first()->author;
      // Book::first()->createdBy;
      if (key == 'include') {
        const relations: string[] = []; // here we collect the model relations to include
        const attrsToFilter = _.get(query, 'filter', []); // the inclues

        // iterate over the include object
        _.forOwn(value, (relationName, requiredAttr) => {
          // if the include key exist on the columns array, then collect the include value
          if (_.includes(attrsToFilter, requiredAttr)) {
            relations.push(relationName);
          }
        });

        // join the array with "," and set the "include" url param
        urlParams.set(key, _.join(relations, ','));
      }
    });

    return urlParams;
  }
}
