/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService = null;
  let backend: MockBackend = null;

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
          deps: [ MockBackend, BaseRequestOptions ]
        },
        AuthService,
      ]
    });
  });

  beforeEach(inject([AuthService, MockBackend], (authService: AuthService, mockBackend: MockBackend) => {
    service = authService;
    backend = mockBackend;
  }));

  let userData = {
    name: 'John Doe',
    email: 'john@doe.com',
  };
/*
  it('should call the api to log in the user', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify(userData)
      });
      connection.mockRespond(new Response(options));
      expect(connection.request.method).toEqual(RequestMethod.Get);
    });

    service
      .login('john@doe.com', '123456')
      .subscribe((res) => {
        expect(res).toEqual(userData);
        done();
      });
  });*/
});
