import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Company } from './../models/company';

import * as app from './../actions/app';
import { AppService } from './../services/app';

@Injectable()
export class AppEffects {

  constructor(
    private actions$: Actions,
    private appService: AppService
    ) { }

  @Effect() getAppData$: Observable<Action> = this.actions$
    .ofType(app.ActionTypes.GET_APP_DATA)
    .startWith(new app.GetAppDataAction())
    .switchMap(() => this.appService.getData()
      .map((data: Company) => new app.GetAppDataSuccessAction(data))
    );
}
