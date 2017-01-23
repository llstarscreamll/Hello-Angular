import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import 'rxjs/add/operator/catch';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../../services/auth.service';
import { AuthUser } from './../../models/authUser';

// import * as fromAuth from './../../reducers/auth';
import * as authActions from './../../actions/auth';
import * as fromRoot from './../../../core/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  
  public loading$: Observable<boolean>;
  public serverMsg$: Observable<string>;
  public serverErrors$: Observable<any>;

  public constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private store: Store<fromRoot.State>
  ) { }

  public ngOnInit() {
    this.buildForm();

    this.loading$ = this.store.select(fromRoot.getAuthLoading);
    this.serverMsg$ = this.store.select(fromRoot.getAuthApiMsg);
    this.serverErrors$ = this.store.select(fromRoot.getAuthApiErrors);
  }

  /**
   * Builds the login form.
   */
  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['admin@admin.com', Validators.required],
      password: ['admin', Validators.required]
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
