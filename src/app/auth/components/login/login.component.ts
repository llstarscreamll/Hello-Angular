import 'rxjs/add/operator/catch';

import * as appMessage from './../../../core/reducers/app-message.reducer';
import * as authActions from './../../actions/auth.actions';
import * as fromRoot from './../../../reducers';

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AuthUser } from './../../models/authUser';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  public loading$: Observable<boolean>;
  public appMessage$: Observable<appMessage.State>;
  public serverErrors$: Observable<any>;

  public constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromRoot.State>
  ) { }

  public ngOnInit() {
    this.buildForm();
    this.loading$ = this.store.select(fromRoot.getAuthLoading);
    this.appMessage$ = this.store.select(fromRoot.getAppMessagesState);
    this.serverErrors$ = this.store.select(fromRoot.getAuthApiErrors);
  }

  /**
   * Builds the login form.
   */
  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * Submits the login form.
   */
  public onSubmit() {
    this.store.dispatch(
      new authActions.LoginAction({
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value
      }));
  }
}
