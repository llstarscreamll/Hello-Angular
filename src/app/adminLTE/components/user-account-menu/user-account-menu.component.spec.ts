/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Store } from '@ngrx/store';

import { UserAccountMenuComponent } from './user-account-menu.component';
import { IMPORTS } from './../../utils';
import * as fromRoot from './../../../reducers';
import { TEST_USER } from './../../../core/tests/util';

describe('AdminLTE UserAccountMenuComponent', () => {
  let component: UserAccountMenuComponent;
  let fixture: ComponentFixture<UserAccountMenuComponent>;
  let store: Store<fromRoot.State>;
  let user = TEST_USER;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserAccountMenuComponent],
      imports: [IMPORTS]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserAccountMenuComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
    component.user = user;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch LOGOUT_ACTION on click logout button', () => {
    spyOn(store, 'dispatch');
    fixture.detectChanges();
    fixture.debugElement.query(By.css('a.logout-btn')).nativeElement.click();

    fixture.detectChanges();

    expect(store.dispatch).toHaveBeenCalled();
  });

  it('should show the user name', () => {
    fixture.detectChanges();
    let element = fixture.debugElement.nativeElement;
    expect(element.querySelector('ul li.user-header span.username').textContent).toContain('Super Admin');
    expect(element.querySelector('li.dropdown.user-menu span.username').textContent).toContain('Super Admin');
  });

});
