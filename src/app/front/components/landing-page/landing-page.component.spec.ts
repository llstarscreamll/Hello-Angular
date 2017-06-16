/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import * as fromRoot from 'app/reducers';
import * as authActions from 'app/auth/actions/auth.actions';

import { IMPORTS } from './../../../core/tests/util';
import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let store: Store<fromRoot.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ],
      imports: [ IMPORTS ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    store = getTestBed().get(Store);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should (hidde login and signup buttons) and (show logout btn) if user IS logged in', () => {
    spyOn(store, 'select').and.returnValue(Observable.from([true]));
    fixture.detectChanges();

    let html = fixture.nativeElement;

    expect(html.querySelector('.login-or-register-btns')).toBeFalsy();
    expect(html.querySelector('.logout-btn')).toBeTruthy();
  });

  it('should (SHOW login and signup buttons) and (hidde logout btn) if user IS NOT logged in', () => {
    spyOn(store, 'select').and.returnValue(Observable.from([false]));
    fixture.detectChanges();

    let html = fixture.nativeElement;

    expect(html.querySelector('.login-or-register-btns')).toBeTruthy();
    expect(html.querySelector('.logout-btn')).toBeFalsy();
  });

  it('should dispath LOGOUT action on logout-btn click', () => {
    spyOn(store, 'select').and.returnValue(Observable.from([true]));
    fixture.detectChanges();

    let html = fixture.nativeElement;
    spyOn(store, 'dispatch');
    html.querySelector('.logout-btn a.btn').click();

    fixture.detectChanges();

    expect(store.dispatch).toHaveBeenCalledWith(new authActions.LogoutAction);
  });
});
