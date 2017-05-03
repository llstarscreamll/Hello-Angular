import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/from';

import * as appMsgActions from './../../core/actions/app-message.actions';
import * as auth from './../actions/auth.actions';

import { Actions, Effect } from '@ngrx/effects';

import { Action } from '@ngrx/store';
import { AuthService } from './../services/auth.service';
import { AuthUser } from './../models/authUser';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './../.././core/services/local-storage.service';
import { LoginCredentials } from './../models/loginCredentials';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { go } from '@ngrx/router-store';
import { of } from 'rxjs/observable/of';

import { AccessToken } from './../interfaces/accessToken';

@Injectable()
export class AuthEffects {

  public constructor(
    private actions$: Actions,
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) { }

  /**
   * LOGIN Effect, calls the Auth API and triggers success or error actions
   * based on the API response.
   */
  @Effect()
  logIn$: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.LOGIN)
    .map((action: Action) => action.payload as LoginCredentials)
    .switchMap((credentials: LoginCredentials) => {
      return this.authService.login(credentials.email, credentials.password)
        // set on session storage the access token data
        .do((accessToken: AccessToken) => sessionStorage.setItem('token', accessToken.access_token))
        .do((accessToken: AccessToken) => sessionStorage.setItem('token_type', accessToken.token_type))
        // now get the authenticated user info
        .switchMap(() => this.authService.getUser())
        .map((user: AuthUser) => { return new auth.LoginSuccessAction(user) })
        .catch((error) => {
          error.type = 'danger';
          return of(new appMsgActions.Flash(error))
        })
    });

  @Effect()
  flashMsg$: Observable<Action> = this.actions$
    .ofType(appMsgActions.ActionTypes.FLASH)
    .map(() => new auth.ToggleLoadingAction(false));

  /**
   * LOGIN_FROM_LOCALSTORAGE Effect, tries to setup the user session based on
   * the token saved on localStorage, if the token is invalid, performs the
   * LOGOUT_SUCCESS Action/@Effect.
   */
  @Effect()
  loginFromLocalStorage$: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.LOGIN_FROM_LOCALSTORAGE)
    .startWith(new auth.LoginFromLocalStorageAction(null))
    .switchMap(() => {
      return this.authService.getUser()
      .map((user: AuthUser) => { this.authService.loginFromLocalStorage = true; return new auth.LoginSuccessAction(user)})
      .catch(error => { return of(new auth.LogoutSuccessAction(false))});
    });

  /**
   * LOGOUT Effect, logs out the user from the app and the API.
   */
  @Effect()
  logout$: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.LOGOUT)
    .switchMap(() => {
      return this.authService.logout()
        .map(() => new auth.LogoutSuccessAction(true))
        .catch((error) => of(new auth.LogoutSuccessAction(true))); // true = redirect the user
    });

  /**
   * LOGOUT_SUCCESS Effect, remove the user data from localStorage and
   * redirects to login page.
   */
  @Effect()
  logoutSuccess$: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.LOGOUT_SUCCESS)
    .do(() => localStorage.clear())
    .do(() => sessionStorage.clear())
    .map((action: Action) => action.payload)
    .map((redirect: boolean) => {
      return redirect
        ? go(['/auth/login'])
        : new auth.ToggleLoadingAction(false);
    });

  /**
   * LOGIN_SUCCESS Effect, redirect to back office when the login process is
   * success.
   */
  @Effect()
  loginSuccess$: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.LOGIN_SUCCESS)
    .map((action) => action.payload as AuthUser)
    .do((user: AuthUser) => this.localStorageService.setUser(user))
    .map(() => {
      return this.authService.loginFromLocalStorage
        ? new auth.ToggleLoadingAction(false)
        : go(['/welcome']);
    });

}
