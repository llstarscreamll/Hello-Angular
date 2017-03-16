import { Action } from '@ngrx/store';
import { type } from './../../core/util';
import { DocumentType } from './../models/documentType';
import { DocumentTypePagination } from './../models/documentTypePagination';

export const ActionTypes = {
	LOAD_DOCUMENT_TYPES: type('[DocumentType] Load DocumentTypes'),
	LOAD_DOCUMENT_TYPES_SUCCESS: type('[DocumentType] Load DocumentTypes Success'),
	GET_DOCUMENT_TYPE_FORM_DATA: type('[DocumentType] Get DocumentType Form Data'),
	GET_DOCUMENT_TYPE_FORM_DATA_SUCCESS: type('[DocumentType] Get DocumentType Form Data Success'),
	GET_DOCUMENT_TYPE_FORM_MODEL: type('[DocumentType] Get DocumentType Form Model'),
	GET_DOCUMENT_TYPE_FORM_MODEL_SUCCESS: type('[DocumentType] Get DocumentType Form Model Success'),
	GET_DOCUMENT_TYPE: type('[DocumentType] Get DocumentType'),
	GET_DOCUMENT_TYPE_SUCCESS: type('[DocumentType] Get DocumentType Success'),
	CREATE_DOCUMENT_TYPE: type('[DocumentType] Create DocumentType'),
	CREATE_DOCUMENT_TYPE_SUCCESS: type('[DocumentType] Create DocumentType Success'),
	UPDATE_DOCUMENT_TYPE: type('[DocumentType] Update DocumentType'),
	UPDATE_DOCUMENT_TYPE_SUCCESS: type('[DocumentType] Update DocumentType Success'),
	DELETE_DOCUMENT_TYPE: type('[DocumentType] Delete DocumentType'),
	DELETE_DOCUMENT_TYPE_SUCCESS: type('[DocumentType] Delete DocumentType Success'),
	RESTORE_DOCUMENT_TYPE: type('[DocumentType] Restore DocumentType'),
	RESTORE_DOCUMENT_TYPE_SUCCESS: type('[DocumentType] Restore DocumentType Success'),
}

export class LoadAction implements Action {
	type = ActionTypes.LOAD_DOCUMENT_TYPES;
	public constructor(public payload: any) { }
}

export class LoadSuccessAction implements Action {
	type = ActionTypes.LOAD_DOCUMENT_TYPES_SUCCESS;
	public constructor(public payload: DocumentTypePagination ) { }
}

export class GetFormModelAction implements Action {
	type = ActionTypes.GET_DOCUMENT_TYPE_FORM_MODEL;
	public constructor(public payload: null) { }
}

export class GetFormModelSuccessAction implements Action {
	type = ActionTypes.GET_DOCUMENT_TYPE_FORM_MODEL_SUCCESS;
	public constructor(public payload: Object) { }
}

export class GetFormDataAction implements Action {
	type = ActionTypes.GET_DOCUMENT_TYPE_FORM_DATA;
	public constructor(public payload: null) { }
}

export class GetFormDataSuccessAction implements Action {
	type = ActionTypes.GET_DOCUMENT_TYPE_FORM_DATA_SUCCESS;
	public constructor(public payload: Object) { }
}

export class GetAction implements Action {
	type = ActionTypes.GET_DOCUMENT_TYPE;
	public constructor(public payload: string) { }
}

export class GetSuccessAction implements Action {
	type = ActionTypes.GET_DOCUMENT_TYPE_SUCCESS;
	public constructor(public payload: Object) { }
}

export class CreateAction implements Action {
	type = ActionTypes.CREATE_DOCUMENT_TYPE;
	public constructor(public payload: Object) { }
}

export class CreateSuccessAction implements Action {
	type = ActionTypes.CREATE_DOCUMENT_TYPE_SUCCESS;
	public constructor(public payload: Object) { }
}

export class UpdateAction implements Action {
	type = ActionTypes.UPDATE_DOCUMENT_TYPE;
	public constructor(public payload: null) { }
}

export class UpdateSuccessAction implements Action {
	type = ActionTypes.UPDATE_DOCUMENT_TYPE_SUCCESS;
	public constructor(public payload: null) { }
}

export class DeleteAction implements Action {
	type = ActionTypes.DELETE_DOCUMENT_TYPE;
	public constructor(public payload: null) { }
}

export class DeleteSuccessAction implements Action {
	type = ActionTypes.DELETE_DOCUMENT_TYPE_SUCCESS;
	public constructor(public payload: null) { }
}

export class RestoreAction implements Action {
	type = ActionTypes.RESTORE_DOCUMENT_TYPE;
	public constructor(public payload: null) { }
}

export class RestoreSuccessAction implements Action {
	type = ActionTypes.RESTORE_DOCUMENT_TYPE_SUCCESS;
	public constructor(public payload: null) { }
}

export type Actions
	= LoadAction
	| LoadSuccessAction
	| GetFormModelAction
	| GetFormModelSuccessAction
	| GetFormDataAction
	| GetFormDataSuccessAction
	| GetAction
	| GetSuccessAction
	| CreateAction
	| CreateSuccessAction
	| UpdateAction
	| UpdateSuccessAction
	| DeleteAction
	| DeleteSuccessAction
	| RestoreAction
	| RestoreSuccessAction;
