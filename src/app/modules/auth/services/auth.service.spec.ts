/* tslint:disable:no-unused-variable */

import { TestBed, getTestBed, async, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions, Headers, Response, ResponseOptions, RequestMethod, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { AuthService } from './auth.service';
import { LocalStorageService } from './../../core/services/localStorage';

describe('Auth Service', () => {
  let testbet: TestBed;
  let service: AuthService;
  let backend: MockBackend;
  let userData;
  let http: Http;

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
        AuthService,
        LocalStorageService,
      ]
    });

    testbet = getTestBed();
    service = testbet.get(AuthService);
    backend = testbet.get(MockBackend);
    http = testbet.get(Http);
    userData = {
      name: 'John Doe',
      email: 'john@doe.com',
    };
  });

  // helper function to MockBackend responses
  function setupConnections(backend: MockBackend, options: any, mockError: boolean = false) {
    backend.connections.subscribe((connection: MockConnection) => {
      let responseOptions = new ResponseOptions(options);
      if (mockError === true) {
        let response = new Error('foo server error');
        connection.mockError(response);
      } else {
        let response = new Response(responseOptions);
        connection.mockRespond(response);
      }
    });
  }

  it('should call the API to log in the user on server', () => {
    let response = {
      body: { data: userData },
      status: 200
    };
    setupConnections(backend, response);

    service
      .login('john@doe.com', '123456')
      .subscribe((res) => {
        expect(res).toEqual(userData);
      });
  });

  it('should handle errors from API', () => {
    let response = {
      message: 'Credentials Incorrect.',
      status_code: 401
    };

    spyOn(service, 'login').and.returnValue(Observable.throw(response));
    spyOn(service, 'handleError').and.returnValue(Observable.throw(response));

    service.login('john@doe.com', '123456')
      .subscribe(
      res => { },
      error => {
        expect(error.status_code).toEqual(401);
        expect(error.message).toEqual(response.message);
      });
  });

});
