import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { go } from '@ngrx/router-store';

import { AppMessage } from './../../core/models/appMessage';
import * as appMsgActions from './../../core/actions/app-message.actions';

export abstract class Effects {

  protected abstract setErrors(error: AppMessage): Action;

  protected handleError(error: AppMessage): Observable<Action> {
    let actions: Action[] = [];
    error.type = 'danger';

    switch (error.status_code) {
      case 401:
        actions.push(go(['/auth', 'login']));
        break;

      case 422:
        actions.push(this.setErrors(error));
        break;
      
      case 400:
      case 500:
        actions.push(go(['/error']));
        break;
      
      default:
        break;
    }

    // flash msg
    actions.push(new appMsgActions.Flash(error));

    return Observable.from(actions);
  }
}