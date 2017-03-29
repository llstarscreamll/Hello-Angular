/* tslint:disable:no-unused-variable */

import { TestBed, getTestBed, async, inject } from '@angular/core/testing';
import { Http, HttpModule, BaseRequestOptions, Headers, Response, ResponseOptions, RequestMethod, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { AppService } from './app.service';
import { Company } from './../models/company';
import { TEST_USER, COMPANY, setupConnections } from './../../core/tests/util';

describe('App Service', () => {
  let testBed: TestBed;
  let appService: AppService;
  let backend: MockBackend;
  let user = TEST_USER;
  let company: Company = COMPANY;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        { provide: XHRBackend, useClass: MockBackend },
        AppService
      ]
    });

    testBed = getTestBed();
    backend = testBed.get(MockBackend);
    appService = testBed.get(AppService);
  });

  it('should call API to retrieve app data', () => {
    let response = {
      body: { data: company },
      statusText: 200
    };

    setupConnections(backend, response);

    appService.getData().subscribe(res => {
      expect(res).toEqual(company);
    });
  });

});
