/* tslint:disable:no-unused-variable */

import { TestBed, getTestBed, async, inject } from '@angular/core/testing';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { HttpModule } from '@angular/http';
import * as routerActions from '@ngrx/router-store/src/actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { Company } from './../models/company';
import { AppService } from './../services/app';
import { AppEffects } from './app';
import * as appActions from './../actions/app';
import { COMPANY } from './../../core/tests/util';

describe('App Effects', () => {
  let testbed: TestBed;
  let runner: EffectsRunner;
  let appService: AppService;
  let appEffects: AppEffects;
  let company: Company = COMPANY;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EffectsTestingModule, HttpModule],
      providers: [
        AppEffects,
        AppService,
      ]
    });

    testbed = getTestBed();
    runner = testbed.get(EffectsRunner);
    appService = testbed.get(AppService);
    appEffects = testbed.get(AppEffects);
  }));

  it('should return GET_APP_DATA_SUCCESS action on success API call', () => {
    let response = {
      body: { data: company },
      status: 200
    };

    spyOn(appService, 'getData').and.returnValue(Observable.of(response));

    runner.queue(new appActions.GetAppDataAction());

    appEffects.getAppData$.subscribe(res => {
      expect(appService.getData).toHaveBeenCalled();
      expect(res.type).toEqual(appActions.ActionTypes.GET_APP_DATA_SUCCESS);
    });
  });

});