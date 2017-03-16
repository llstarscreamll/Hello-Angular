/* tslint:disable:no-unused-variable */

import { Component } from '@angular/core';
import { TestBed, getTestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Location } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';

import { AuthGuard } from './auth';
import { AuthService } from './../services/auth.service';
import { LocalStorageService } from './../../core/services/localStorage';
import * as fromRoot from './../../core/reducers';

/**
 * Dummy components
 */
@Component({
  template: `<router-outlet></router-outlet>`
})
class RoutingComponent { }

@Component({
  template: `Private Component`
})
class PrivateComponent { }

describe('AuthGuard', () => {
  let testBed: TestBed;
  let router: Router;
  let authGuard: AuthGuard;
  let location: Location;
  let authService: AuthService;
  let store: Store<fromRoot.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        StoreModule.provideStore(fromRoot.reducer),
        RouterTestingModule.withRoutes([
          { path: 'private', component: PrivateComponent, canActivate: [AuthGuard] }
        ]),
      ],
      providers: [
        AuthGuard, AuthService, LocalStorageService
      ],
      declarations: [
        PrivateComponent, RoutingComponent
      ]
    });

    testBed = getTestBed();
    location = testBed.get(Location);
    authGuard = testBed.get(AuthGuard);
    authService = testBed.get(AuthService);
    router = testBed.get(Router);
    store = testBed.get(Store);

    testBed.createComponent(RoutingComponent);
  }));

  it('should activate private route is user is logged in', async(() => {
    spyOn(authService, 'loggedIn').and.returnValue(true);

    router.navigate(['private']).then(() => {
      expect(location.path()).toBe('/private');
    });

  }));

  it('should not activate private route on user not logged in', async(() => {
    spyOn(authService, 'loggedIn').and.returnValue(false);
    spyOn(store, 'dispatch');

    router.navigate(['private']).then(() => {
      expect(store.dispatch).toHaveBeenCalledWith(go(['/auth/login']));
    });
  }));

});