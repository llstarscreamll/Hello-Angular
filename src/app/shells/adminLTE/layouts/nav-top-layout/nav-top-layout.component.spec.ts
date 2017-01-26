/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Store } from '@ngrx/store';

import { NavTopLayoutComponent } from './nav-top-layout.component';
import { UserAccountMenuComponent } from './../../components/user-account-menu/user-account-menu.component';
import { IMPORTS } from './../../utils';
import { TEST_USER } from './../../../../modules/core/tests/util';
import * as fromRoot from './../../../../modules/core/reducers';
import * as authActions from './../../../../modules/auth/actions/auth';

describe('NavTopLayoutComponent', () => {
  let component: NavTopLayoutComponent;
  let fixture: ComponentFixture<NavTopLayoutComponent>;
  let store: Store<fromRoot.State>;
  let user = TEST_USER;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavTopLayoutComponent, UserAccountMenuComponent],
      imports: [IMPORTS]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTopLayoutComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);

    fixture.detectChanges();
  });

  it('should hide/show user menu', async(() => {
    // let's begin with the TEST_USER logged in
    store.dispatch(new authActions.LoginSuccessAction(user));
    let userMenuSelector = 'ul[app-admin-lte-user-account-menu]';
    let userMenu;

    component.authState$.subscribe((res) => {
      component.ngOnInit();
      fixture.detectChanges();

      userMenu = fixture.debugElement.query(By.css(userMenuSelector));
      expect(userMenu).not.toBeNull();
    });

    // now the TEST_USER should be logged out, the user drop down should be
    // hide and the login and register links should appear
    store.dispatch(new authActions.LogoutSuccessAction(null));
    component.authState$.subscribe((res) => {
      component.ngOnInit();
      fixture.detectChanges();

      userMenu = fixture.debugElement.query(By.css(userMenuSelector));
      expect(userMenu).toBeNull();

      let loginLink = fixture.debugElement.query(By.css('a.login-link'));
      let signUpLink = fixture.debugElement.query(By.css('a.sign-up-link'));

      expect(loginLink).not.toBeNull();
      expect(signUpLink).not.toBeNull();
    });

  }));

});
