import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

/**
 * Here you can import reducers from other modules
 */ 
import * as fromApp from './core/reducers/app.reducer';
import * as fromAppMessages from './core/reducers/app-message.reducer';
import * as fromAuth from './auth/reducers/auth.reducer';

/**
 * The app state interface
 */
export interface State {
  app: fromApp.State;
  appMessages: fromAppMessages.State;
  auth: fromAuth.State;
  router: fromRouter.RouterState;
}

/**
 * Declares the router and modules reducers
 */
const reducers = {
  app: fromApp.reducer,
  appMessages: fromAppMessages.reducer,
  auth: fromAuth.reducer,
  router: fromRouter.routerReducer,
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

/**
 * Auth Selectors
 */
export const getAuthState = (state: State) => state.auth;

export const getAuthLoading = createSelector(getAuthState, fromAuth.getAuthLoading);
export const getAuthApiMsg = createSelector(getAuthState, fromAuth.getAuthApiMsg);
export const getAuthApiErrors = createSelector(getAuthState, fromAuth.getAuthApiErrors);
export const getAuthUser = createSelector(getAuthState, fromAuth.getAuthUser);

/**
 * App Selectors
 */
export const getAppState = (state: State) => state.app;

/**
 * App Messages Selector
 */
export const getAppMessagesState = (state: State) => state.appMessages;
