import { Action } from '@ngrx/store';
import { type } from '../util';
import { AppMessage } from './../models/appMessage';

export const ActionTypes = {
  FLASH: type('[App Messages] flash'),
  REMOVE: type('[App Messages] remove'),
};

export class Flash implements Action {
  type = ActionTypes.FLASH;
  constructor(public payload: AppMessage) {}
}

export class Remove implements Action {
  type = ActionTypes.REMOVE;
  constructor(public payload: AppMessage = {
    message: '',
    errors: {},
    status_code: null,
    type: '',
    date: new Date()
  }) {}
}

export type Actions
= Flash
| Remove;
