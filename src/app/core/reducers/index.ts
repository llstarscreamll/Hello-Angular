import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import * as fromDocumentType from './../../colombian-parameter/reducers/document-type.reducer';

/**
 * Importing reducers from other modules.
 */ 
import * as fromLayout from './layout';
import * as fromApp from './app';
import * as fromAppMessages from './appMessage';
import * as fromAuth from './../../auth/reducers/auth';
import * as fromCompany from './../../company/reducers/company.reducer';

/**
 * The app state interface.
 */
export interface State {
  app: fromApp.State;
  appMessages: fromAppMessages.State;
  layout: fromLayout.State;
  auth: fromAuth.State;
  router: fromRouter.RouterState;
  company: fromCompany.State;
  documentType: fromDocumentType.State;
}

/**
 * Declares the router and modules reducers.
 */
const reducers = {
  app: fromApp.reducer,
  appMessages: fromAppMessages.reducer,
  layout: fromLayout.reducer,
  auth: fromAuth.reducer,
  router: fromRouter.routerReducer,
  company: fromCompany.reducer,
  documentType: fromDocumentType.reducer,
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

/**
 * App Selectors
 */
export const getAppState = (state: State) => state.app;

/**
 * App Messages Selector
 */
export const getAppMessagesState = (state: State) => state.appMessages;

/**
 * Company Selector
 */
export const getCompanyState = (state: State) => state.company;

/**
 * 
 * DocumentType selectors
 */
export const getDocumentTypeState = (state: State) => state.documentType;
export const getDocumentTypeFormModel = createSelector(getDocumentTypeState, fromDocumentType.getDocumentTypeFormModel);
export const getSelectedDocumentType = createSelector(getDocumentTypeState, fromDocumentType.getSelectedDocumentType);
