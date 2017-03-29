import { type } from '../util';
import { Company } from './../models/company';

export const ActionTypes = {
  GET_APP_DATA: type('[APP] Get app data from server'),
  GET_APP_DATA_SUCCESS: type('[APP] Get app data from server success'),
};

export class GetAppDataAction {
  type = ActionTypes.GET_APP_DATA;
  constructor(public payload = null){ }
}

export class GetAppDataSuccessAction {
  type = ActionTypes.GET_APP_DATA_SUCCESS;
  constructor(public payload: Company){ }
}

export type Actions
  = GetAppDataAction
  | GetAppDataSuccessAction;
