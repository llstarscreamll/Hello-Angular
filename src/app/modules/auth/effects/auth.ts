import { Injectable } from '@angular/core';
import { go } from '@ngrx/router-store';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { of } from 'rxjs/observable/of';

import { AuthService } from './../services/auth.service';
import { LoginCredentials } from './../models/loginCredentials';
import { AuthUser } from './../models/authUser';
import * as auth from './../actions/auth';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) { }
  
  /**
   * LOGIN Effect, calls the Auth API and triggers success or error actions
   * based on the API response.
   */
  @Effect() logIn$: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.LOGIN)
    .map(action => action.payload as LoginCredentials)
    .switchMap((credentials: LoginCredentials) => this.authService.login(credentials.email, credentials.password))
    .do(user => localStorage.setItem('user', JSON.stringify(user)))
    .map((user: AuthUser) => new auth.LoginSuccessAction(user))
    .catch((error) => of(new auth.FlasErrors(error)));
  
  /**
   * LOGIN_SUCCESS Effect, redirect to backoffice when the login process is succes.
   */
  @Effect() loginSuccess$: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.LOGIN_SUCCESS)
    .map(() => go(['/welcome']));

    }