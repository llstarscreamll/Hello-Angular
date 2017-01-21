import { Action } from '@ngrx/store';
import { type } from '../../core/util';
import { AuthUser } from './../models/authUser';
import { LoginCredentials } from './../models/loginCredentials';

export const ActionTypes = {
  LOGIN: type('[Auth] Login'),
  LOGIN_FROM_LOCALSTORAGE: type('[Auth] Login from localStorage'),
  LOGIN_SUCCESS: type('[Auth] Login Success'),
  LOGOUT: type('[Auth] Logout'),
  LOGOUT_SUCCESS: type('[Auth] Logout Success'),
  UNSET_USER_FROM_LOCALSTORAGE: type('[Auth] Unset user from localStorage'),
  TOGGLE_LOADING: type('[Auth] Toggle loading'),
  FLASH_ERROR: type('[Auth] Flash error'),
}

export interface ApiErrors {
  debug: Object | null,
  errors: Object | null,
  message: string,
  status_code: number
}

export class LoginAction implements Action {
  type = ActionTypes.LOGIN;
  constructor(public payload: LoginCredentials) {}
}

export class LoginFromLocalStorageAction implements Action {
  type = ActionTypes.LOGIN_FROM_LOCALSTORAGE;
  constructor(public payload: null) {}
}

export class LoginSuccessAction implements Action {
  type = ActionTypes.LOGIN_SUCCESS;
  constructor(public payload: AuthUser) {}
}

export class UnsetUserFromLocalStorageAction implements Action {
  type = ActionTypes.UNSET_USER_FROM_LOCALSTORAGE;
  constructor(public payload: null) {}
}

export class LogoutAction implements Action {
  type = ActionTypes.LOGOUT;
  constructor(public payload: AuthUser | null) {}
}

export class LogoutSuccessAction implements Action {
  type = ActionTypes.LOGOUT_SUCCESS;
  constructor(public payload: AuthUser | null) {}
}

export class ToggleLoadingAction implements Action {
  type = ActionTypes.TOGGLE_LOADING;
  constructor(public payload: boolean = true) {}
}

export class FlashErrors implements Action {
  type = ActionTypes.FLASH_ERROR;
  constructor(public payload: ApiErrors) {}
}

export type Actions
  = LoginAction
  | LoginSuccessAction
  | LogoutAction
  | LogoutSuccessAction
  | ToggleLoadingAction
  |UnsetUserFromLocalStorageAction
  | FlashErrors;
