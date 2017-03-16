/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Store } from '@ngrx/store';

import { UserAccountMenuComponent } from './user-account-menu.component';
import { IMPORTS } from './../../utils';
import * as fromRoot from './../../../reducers';
import { TEST_USER } from './../../../../modules/core/tests/util';

describe('UserAccountMenuComponent', () => {
  let component: UserAccountMenuComponent;
  let fixture: ComponentFixture<UserAccountMenuComponent>;
  let store: Store<fromRoot.State>;
  let user = TEST_USER;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccountMenuComponent ],
      imports: [ IMPORTS ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountMenuComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
    component.user = user;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch LOGOUT_ACTION on click button', () => {
    spyOn(store, 'dispatch');
    fixture.debugElement.query(By.css('a.logout-btn')).nativeElement.click();

    fixture.detectChanges();

    expect(store.dispatch).toHaveBeenCalled();
  });

  it('should show the user name', () => {
    // user name locations
    let userNameElem1 = fixture.debugElement.query(By.css('.user-menu a span.username')).nativeElement;
    let userNameElem2 = fixture.debugElement.query(By.css('.dropdown-menu span.username')).nativeElement;

    expect(userNameElem1.textContent).toEqual(user.name);
    expect(userNameElem2.textContent).toEqual(user.name);
  });

});
