import { createSelector } from 'reselect';
import * as auth from '../actions/auth';
import { AuthUser } from './../models/authUser';

/**
 * Los reducers no puede ser importados desde módulos hijos, sólo desde el
 * módulo principal:
 * https://github.com/ngrx/store/issues/211
 * 
 * Esta caracteristica ha sido muy peidia en la comunidad pero aun no ha sido
 * implementada, al parecer se implementará en la versión 3 de @ngrx/store:
 * https://gist.github.com/MikeRyan52/5d361681ed0c81e38775dd2db15ae202
 */

export interface State {
  loggedIn: boolean;
  loading: boolean;
  user: AuthUser | null;
  errors: Object
  APImsg: string
}

const initialState: State = {
  loggedIn: false,
  loading: false,
  user: null,
  errors: {},
  APImsg: ''
};

export function reducer(state = initialState, action: auth.Actions): State {
  switch (action.type) {

    /**
     * This is for set loading = true, the LOGIN action is handled on @Effects
     */
    case auth.ActionTypes.LOGIN: {
      return {
        loggedIn: state.loggedIn,
        loading: true,
        user: state.user,
        errors: {},
        APImsg: ''
      };
    }

    case auth.ActionTypes.LOGIN_SUCCESS: {
      let user = action.payload as AuthUser;
      return {
        loggedIn: true,
        loading: false,
        user: user,
        errors: {},
        APImsg: ''
      }
    };

    case auth.ActionTypes.LOGOUT_SUCCESS: {
      return {
        loggedIn: false,
        loading: false,
        user: null,
        errors: {},
        APImsg: ''
      };
    }

    case auth.ActionTypes.TOGGLE_LOADING: {
      let loading = (action.payload === true);
      return {
        loggedIn: state.loggedIn,
        loading: loading,
        user: state.user,
        errors: state.errors,
        APImsg: ''
      };
    }

    case auth.ActionTypes.FLASH_ERROR: {
      let apiErros = action.payload as auth.ApiErrors;

      return {
        loggedIn: state.loggedIn,
        loading: false,
        user: state.user,
        errors: apiErros.errors || {},
        APImsg: apiErros.message || ''
      };
    }

    default: {
      return state;
    };

  }
}

export const getAuthLoading = (state: State) => state.loading;
export const getAuthApiMsg = (state: State) => state.APImsg;
export const getAuthApiErrors = (state: State) => state.errors;
