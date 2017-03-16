import { FormGroup } from '@angular/forms';
import * as documentType from '../actions/document-type.actions';
import { DocumentType } from './../models/documentType';
import { DocumentTypePagination } from './../models/documentTypePagination';

export interface State {
  documentTypeFormModel: Object;
  documentTypeFormData: Object;
  documentTypesPagination: DocumentTypePagination | null;
  selectedDocumentType: DocumentType | null;
  loading: boolean;
  errors: Object;
}

const initialState: State = {
  documentTypeFormModel: {},
  documentTypeFormData: {},
  documentTypesPagination: null,
  selectedDocumentType: null,
  loading: true,
  errors: {}
};

export function reducer(state = initialState, action: documentType.Actions): State {
  switch (action.type) {
    case documentType.ActionTypes.LOAD_DOCUMENT_TYPES: {
      return { ...state, loading: true };
    }

    case documentType.ActionTypes.LOAD_DOCUMENT_TYPES_SUCCESS: {
      return { ...state, documentTypesPagination: action.payload, loading: false };
    }
    
    case documentType.ActionTypes.GET_DOCUMENT_TYPE_FORM_MODEL: {
      return { ...state, loading: true };
    }

    case documentType.ActionTypes.GET_DOCUMENT_TYPE_FORM_MODEL_SUCCESS: {
      return { ...state, documentTypeFormModel: action.payload, loading: false };
    }
    
    case documentType.ActionTypes.GET_DOCUMENT_TYPE_FORM_DATA: {
      return { ...state, loading: true };
    }

    case documentType.ActionTypes.GET_DOCUMENT_TYPE_FORM_DATA_SUCCESS: {
      return { ...state, documentTypeFormData: action.payload, loading: false };
    }

    case documentType.ActionTypes.CREATE_DOCUMENT_TYPE: {
      return { ...state, loading: true };
    }

    case documentType.ActionTypes.CREATE_DOCUMENT_TYPE_SUCCESS: {
      return {...state, selectedDocumentType: action.payload, loading: false };
    }

    case documentType.ActionTypes.GET_DOCUMENT_TYPE: {
      return { ...state, loading: true };
    }

    case documentType.ActionTypes.GET_DOCUMENT_TYPE_SUCCESS: {
      return { ...state, selectedDocumentType: action.payload, loading: false };
    }

/*
    case documentType.ActionTypes.UPDATE_DOCUMENT_TYPE: {
      return {};
    }

    case documentType.ActionTypes.UPDATE_DOCUMENT_TYPE_SUCCESS: {
      return {};
    }

    case documentType.ActionTypes.DELETE_DOCUMENT_TYPE: {
      return {};
    }

    case documentType.ActionTypes.DELETE_DOCUMENT_TYPE_SUCCESS: {
      return {};
    }

    case documentType.ActionTypes.RESTORE_DOCUMENT_TYPE: {
      return {};
    }

    case documentType.ActionTypes.RESTORE_DOCUMENT_TYPE_SUCCESS: {
      return {};
    }*/

    default: {
      return state;
    }
  }
 }

  export const getDocumentTypeFormModel = (state: State) => state.documentTypeFormModel;
  export const getSelectedDocumentType = (state: State) => state.selectedDocumentType;

/* -----------------------------------------------------------------------------
Don't forget to import these reducer on the main app reducer!!

import * as fromDocumentType from './../../colombian-parameter/reducers/document-type.reducer';

export interface State {
  documentType: fromDocumentType.State;
}

const reducers = {
  documentType: fromDocumentType.reducer,
};

  
// DocumentType selectors
export const getDocumentTypeState = (state: State) => state.documentType;
export const getDocumentTypeFormModel = createSelector(getDocumentTypeState, fromDocumentType.getDocumentTypeFormModel);
export const getSelectedDocumentType = createSelector(getDocumentTypeState, fromDocumentType.getSelectedDocumentType);

----------------------------------------------------------------------------- */
