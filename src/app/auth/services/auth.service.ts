import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthUser } from '../models/authUser';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './../../core/services/local-storage.service';
import { Observable } from 'rxjs/Observable';
import { Service } from './../../core/services/abstract.service';
import { tokenNotExpired } from 'angular2-jwt';

import { AccessToken } from './../interfaces/accessToken';

@Injectable()
export class AuthService extends Service {

  protected API_ENDPOINT: string = 'v1/user';
  public loginRoute: string = 'v1/clients/web/admin/login';
  public loginFromLocalStorage: boolean = false;

  public constructor(
    private http: Http,
    private localStorageService: LocalStorageService
  ) {
    super();
  }

  /**
   * Process the login request to the API.
   */
  public login(email: string, password: string): Observable<AccessToken> {
    this.loginFromLocalStorage = false;
    let endPoint = this.domain + this.loginRoute;

    return this.http
      .post(endPoint, { 'email': email, 'password': password }, this.headers)
      .map(res => {
        let accessToken: AccessToken = res.json();
        return accessToken;
      })
      .catch(this.handleError);
  }

  /**
   * Make an API call to retrive the authenticated user.
   */
  public getUser(): Observable<AuthUser> {
    this.setAuthorizationHeader();

    return this.http
      .get(this.domain + 'v1/userinfo', { headers: this.headers })
      .map(res => res.json().data)
      .catch(this.handleError);
  }

  /**
   * Checks if there is a valid token.
   */
  public loggedIn(): boolean {
    // are there a token and is a valid token?
    return tokenNotExpired('token', this.localStorageService.getToken());
  }

  /**
   * Logs out the user from the API.
   */
  public logout(): Observable<any> {
    this.setAuthorizationHeader();
    
    return this.http
      .post(this.domain + 'v1/logout', {}, { headers: this.headers })
      .map(res => res.json().message)
      .catch(this.handleError);
  }

}
