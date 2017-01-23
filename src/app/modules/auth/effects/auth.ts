import { Injectable } from '@angular/core';
import { go } from '@ngrx/router-store';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { of } from 'rxjs/observable/of';

import { LocalStorageService } from './../.././core/services/localStorage';
import { AuthService } from './../services/auth.service';
import { LoginCredentials } from './../models/loginCredentials';
import { AuthUser } from './../models/authUser';
import * as auth from './../actions/auth';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) { }
  
  /**
   * LOGIN Effect, calls the Auth API and triggers success or error actions
   * based on the API response.
   */
  @Effect() logIn$: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.LOGIN)
    .map((action: Action) => action.payload as LoginCredentials)
    .switchMap((credentials: LoginCredentials) => this.authService.login(credentials.email, credentials.password))
    .do((user: AuthUser) => this.localStorageService.setUser(user))
    .map((user: AuthUser) => new auth.LoginSuccessAction(user))
    .catch((error) => of(new auth.FlashErrors(error)));
  
  /**
   * LOGIN_FROM_LOCALSTORAGE Effect, tries to setup the user session based on
   * the token saved on localStorage, if the token is invalid, performs the
   * LOGOUT_SUCCESS Action/@Effect.
   */
  @Effect() loginFromLocalStorage$: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.LOGIN_FROM_LOCALSTORAGE)
    .startWith(new auth.ToggleLoadingAction(true))
    .map(() => {
        return this.authService.loggedIn()
          ? new auth.LoginSuccessAction(this.localStorageService.getItem('user') as AuthUser)
          : new auth.LogoutSuccessAction(null);
      });
  
  /**
   * LOGOUT Effect, logs out the user from the app and the API.
   */
  @Effect() logout$: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.LOGOUT)
    .switchMap(() => this.authService.logout())
    .map(() => console.info('bye user!!'))
    .map(() => new auth.LogoutSuccessAction(null));
  
  /**
   * LOGOUT_SUCCESS Effect, remove the user data from localStorage and
   * redirects to login page.
   */
  @Effect() logoutSuccess$: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.LOGOUT_SUCCESS)
    .map(() => this.localStorageService.removeUser())
    .map(() => new auth.ToggleLoadingAction(false))
    .map(() => go(['/auth/login']));
  
  /**
   * LOGIN_SUCCESS Effect, redirect to back office when the login process is
   * success.
   */
  @Effect() loginSuccess$: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.LOGIN_SUCCESS)
    .map((action) => action.payload as AuthUser)
    .map((user: AuthUser) => console.info('welcome ' + user.name))
    .map(() => go(['/welcome']));

}
