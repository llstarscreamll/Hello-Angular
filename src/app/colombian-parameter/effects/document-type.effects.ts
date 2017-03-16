import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { go } from '@ngrx/router-store';

import { FormModelParser } from './../../core/services/formModelParser';
import * as appMsgActions from './../../core/actions/appMessage';
import { DocumentTypePagination } from './../models/documentTypePagination';
import { DocumentTypeService } from './../services/document-type.service';
import * as documentType from './../actions/document-type.actions';
import { DocumentType } from './../models/documentType';

@Injectable()
export class DocumentTypeEffects {

	public constructor(
    private actions$: Actions,
    private documentTypeService: DocumentTypeService,
    private formModelParser: FormModelParser
  ) { }

  @Effect() loadDocumentTypes$: Observable<Action> = this.actions$
    .ofType(documentType.ActionTypes.LOAD_DOCUMENT_TYPES)
    .map((action: Action) => action.payload)
    .switchMap((searchData) => {
      return this.documentTypeService.load(searchData)
        .map((data: DocumentTypePagination) => { return new documentType.LoadSuccessAction(data)})
        .catch((error) => {
          error.type = 'danger';
          return of(new appMsgActions.Flash(error))
        });
    });

  @Effect() getdocumentTypePaginationFormModel$: Observable<Action> = this.actions$
    .ofType(documentType.ActionTypes.GET_DOCUMENT_TYPE_FORM_MODEL)
    .switchMap(() => {
      return this.documentTypeService.getDocumentTypeFormModel()
        .map((data) => this.formModelParser.parse(data, this.documentTypeService.fieldsLangNamespace))
        .map((data) => { return new documentType.GetFormModelSuccessAction(data)})
        .catch((error) => {
          error.type = 'danger';
          return of(new appMsgActions.Flash(error))
        });
    });

    @Effect() getdocumentTypePaginationFormData$: Observable<Action> = this.actions$
    .ofType(documentType.ActionTypes.GET_DOCUMENT_TYPE_FORM_DATA)
    .switchMap(() => {
      return this.documentTypeService.getDocumentTypeFormData()
        .map((data) => { return new documentType.GetFormDataSuccessAction(data)})
        .catch((error) => {
          error.type = 'danger';
          return of(new appMsgActions.Flash(error))
        });
    });

    @Effect() createAction$: Observable<Action> = this.actions$
    .ofType(documentType.ActionTypes.CREATE_DOCUMENT_TYPE)
    .map((action: Action) => action.payload)
    .switchMap((data) => {
      return this.documentTypeService.create(data)
        .map((data) => { return new documentType.CreateSuccessAction(data)})
        .catch((error) => {
          error.type = 'danger';
          return of(new appMsgActions.Flash(error))
        });
    });

    @Effect() createSuccessAction$: Observable<Action> = this.actions$
    .ofType(documentType.ActionTypes.CREATE_DOCUMENT_TYPE_SUCCESS)
    .map((action: Action) => action.payload)
    .mergeMap((data) => {
      return [
        new appMsgActions.Flash(this.documentTypeService.getSuccessCreationMessage()),
        go(['document-type', data.id])
      ];
    });

    @Effect() getAction$: Observable<Action> = this.actions$
    .ofType(documentType.ActionTypes.GET_DOCUMENT_TYPE)
    .map((action: Action) => action.payload)
    .switchMap((id) => {
      return this.documentTypeService.getDocumentType(id)
        .map((data) => { return new documentType.GetSuccessAction(data)})
        .catch((error) => {
          error.type = 'danger';
          return of(new appMsgActions.Flash(error))
        });
    });
}
