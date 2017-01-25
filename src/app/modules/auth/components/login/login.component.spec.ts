/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Store } from '@ngrx/store';

import { LoginComponent } from './login.component';

import { IMPORTS } from './../../../../modules/core/tests/util';
import * as authActions from './../../actions/auth';
import * as fromRoot from './../../../../modules/core/reducers';

let RouterMock = {
  navigate: true,
  root: ''
};

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        ...IMPORTS
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have form fields', () => {
    let emailField = fixture.debugElement.query(By.css('input[name=email]')).nativeElement;
    let passwordField = fixture.debugElement.query(By.css('input[name=password]')).nativeElement;

    expect(emailField).toBeDefined();
    expect(passwordField).toBeDefined();
  });

  it('should login success', async(() => {
    // setup the spies
    spyOn(store, 'select');
    spyOn(store, 'dispatch');

    // form builder and store selects are executed on ngOnInit() method
    component.ngOnInit();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(store.select).toHaveBeenCalledWith(fromRoot.getAuthLoading);
      expect(store.select).toHaveBeenCalledWith(fromRoot.getAuthApiMsg);
      expect(store.select).toHaveBeenCalledWith(fromRoot.getAuthApiErrors);
    });

    let email = component.loginForm.get('email').value;
    let password = component.loginForm.get('password').value;
    let btn = fixture.debugElement.query(By.css('button[type=submit]')).nativeElement;

    // fields should be empty and button disabled, the form is invalid
    expect(email).toBe('');
    expect(password).toBe('');
    expect(btn.disabled).toBe(true, 'button is disabled');
    expect(component.loginForm.valid).toBe(false, 'the form is invalid');

    // fill the form fields
    component.loginForm.get('email').setValue('admin@admin.com');
    component.loginForm.get('password').setValue('admin');

    fixture.detectChanges();

    // the form is now valid
    expect(btn.disabled).toBe(false, 'button is now enabled');
    expect(component.loginForm.valid).toBe(true, 'the form is now valid');

    component.onSubmit();

    // the LOGIN action should be dispatched
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      email = component.loginForm.get('email').value;
      password = component.loginForm.get('password').value;
      expect(store.dispatch).toHaveBeenCalledWith(new authActions.LoginAction({email: email, password: password}));
    });

  }));
});
