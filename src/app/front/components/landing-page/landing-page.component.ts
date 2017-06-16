import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import * as fromRoot from 'app/reducers';
import * as authActions from 'app/auth/actions/auth.actions';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {

  public loggedIn: Observable<boolean>;

  public constructor(private store: Store<fromRoot.State>) { }

  public ngOnInit() {
    this.loggedIn = this.store.select(fromRoot.getAuthIsLoggedIn);
  }

  public logout() {
    this.store.dispatch(new authActions.LogoutAction);
  }
}
