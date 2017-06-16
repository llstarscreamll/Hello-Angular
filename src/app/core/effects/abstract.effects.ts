import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { go } from '@ngrx/router-store';

import { AppMessage } from './../../core/models/appMessage';

export abstract class Effects {

  protected abstract setMessages(error: AppMessage): Action;

  protected handleError(error: AppMessage): Observable<Action> {
    const actions: Action[] = [];
    error.type = 'danger';
    error.date = new Date();

    switch (error.status_code) {
      case 401:
        actions.push(go(['/auth', 'login']));
        break;

      case 422:
        actions.push(this.setMessages(error));
        break;

      case 400:
      case 405:
      case 500:
        console.error(error);
        break;

      default:
        break;
    }

    return Observable.from(actions);
  }
}
