/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed, getTestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './../../../reducers';

import { AlertsComponent } from './alerts.component';
import { IMPORTS } from './../../utils';

describe('AdminLTE AlertsComponent', () => {
  let component: AlertsComponent;
  let fixture: ComponentFixture<AlertsComponent>;
  let store: Store<fromRoot.State>;
  let defaultMsg = {
    type: '',
    errors: {},
    message: '',
    date: new Date(),
    status_code: null
  };
  let emailError = 'bad email!!';
  let passwordError = 'weak password!!';
  let message = 'Invalid input.';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlertsComponent],
      imports: [IMPORTS]
    }).compileComponents();

    fixture = getTestBed().createComponent(AlertsComponent);
    component = fixture.componentInstance;
    store = getTestBed().get(Store);
  }));

  it('should create', () => {
    component.appMessage = defaultMsg;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should be hiden on empty message errors given', () => {
    component.appMessage = defaultMsg;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('alert')).toBeNull();
  });

  it('should be displayed on message error given', () => {
    defaultMsg.errors = {
      'email': 'bad email!!'
    };
    defaultMsg.message = 'Invalid input.';
    defaultMsg.type = 'error';
    component.appMessage = defaultMsg;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('alert')).not.toBeNull();
  });

  it('should transform object errors to array', () => {
    defaultMsg.errors = {
      email: emailError,
      password: passwordError,
    };
    defaultMsg.message = 'Warning.';
    component.appMessage = defaultMsg;
    defaultMsg.type = 'warning';
    fixture.detectChanges();

    expect(component.getErrorsArray(defaultMsg.errors)).toEqual([emailError, passwordError]);;
  });

  it('should display errors on ul list', () => {
    defaultMsg.errors = {
      email: emailError,
      password: passwordError,
    };
    defaultMsg.message = message;
    component.appMessage = defaultMsg;
    defaultMsg.type = 'info';
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('alert').textContent).toContain(message);
    expect(fixture.nativeElement.querySelector('ul li:first-child').textContent).toContain(emailError);
    expect(fixture.nativeElement.querySelector('ul li:last-child').textContent).toContain(passwordError);
  });

  it('should display default alert icon', () => {
    defaultMsg.errors = {
      email: emailError,
      password: passwordError,
    };
    defaultMsg.message = message;
    defaultMsg.type = '';
    component.appMessage = defaultMsg;
    fixture.detectChanges();

    // the default icon on empty string given
    expect(component.getIconAndMsgStyle(defaultMsg.type)).toContain('fa fa-ban');
  });
});
