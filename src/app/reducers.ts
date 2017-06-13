import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as authActions from './auth/actions/auth.actions';

/**
 * Here you should import reducers from other modules
 */
import * as fromAuth from './auth/reducers/auth.reducer';

/**
 * The app state interface
 */
export interface State {
  auth: fromAuth.State;
  router: fromRouter.RouterState;
}

/**
 * Declares the router and modules reducers
 */
const reducers = {
  auth: fromAuth.reducer,
  router: fromRouter.routerReducer,
};

export function rootReducer(state: any, action: any) {
  if (action.type === authActions.LOGOUT_SUCCESS) {
    state = undefined;
  }

  return reducer(state, action);
}

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

// Auth Selectors
export const getAuthState = (state: State) => state.auth;
export const getAuthUser = createSelector(getAuthState, fromAuth.user);
export const getAuthIsLoggedIn = createSelector(getAuthState, fromAuth.isLoggedIn);
export const getAuthMessages = createSelector(getAuthState, fromAuth.messages);
export const getAuthLoading = createSelector(getAuthState, fromAuth.loading);
