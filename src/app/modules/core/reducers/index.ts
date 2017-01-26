import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

/**
 * Importing reducers from other modules.
 */ 
import * as fromLayout from './layout';
import * as fromAuth from './../../auth/reducers/auth';

/**
 * The app state interface.
 */
export interface State {
  layout: fromLayout.State;
  auth: fromAuth.State;
  router: fromRouter.RouterState;
}

/**
 * Declares the router and modules reducers.
 */
const reducers = {
  layout: fromLayout.reducer,
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
 * Layout Selectors
 */
export const getLayoutState = (state: State) => state.layout;

export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);
export const getShowControlSidebar = createSelector(getLayoutState, fromLayout.getShowControlSidebar);

/**
 * Auth Selectors
 */
export const getAuthState = (state: State) => state.auth;

export const getAuthLoading = createSelector(getAuthState, fromAuth.getAuthLoading);
export const getAuthApiMsg = createSelector(getAuthState, fromAuth.getAuthApiMsg);
export const getAuthApiErrors = createSelector(getAuthState, fromAuth.getAuthApiErrors);
export const getAuthUser = createSelector(getAuthState, fromAuth.getAuthUser);
