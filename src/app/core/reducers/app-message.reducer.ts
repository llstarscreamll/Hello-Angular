import * as error from './../actions/app-message.actions';
import { AppMessage } from './../models/appMessage';

export class State extends AppMessage { }

const initialState: AppMessage = {
  message: '',
  errors: {},
  status_code: null,
  type: '',
  date: new Date(),
}

export function reducer(state = initialState, action: error.Actions): State {

  switch (action.type) {

    case error.ActionTypes.REMOVE: {
      return { ...action.payload, date: new Date() };
    }

    case error.ActionTypes.FLASH: {
      return { ...action.payload, date: new Date() };
    }

    default: {
      return state;
    }

  }

}
