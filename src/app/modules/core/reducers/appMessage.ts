import * as error from './../actions/appMessage';
import { AppMessage } from './../models/appMessage';

export class State extends AppMessage { }

const initialState: AppMessage = {
  message: '',
  errors: {},
  status_code: null,
  type: ''
}

export function reducer(state = initialState, action: error.Actions): State {

  switch (action.type) {

    case error.ActionTypes.REMOVE:
    case error.ActionTypes.FLASH: {
      return action.payload;
    }

    default: {
      return state;
    }

  }

}
