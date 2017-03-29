import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './../../../reducers';
import * as authActions from './../../../auth/actions/auth.actions';
import { AuthUser } from './../../../auth/models/authUser';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-account-menu.component.html',
})
export class UserAccountMenuComponent implements OnInit {

  @Input()
  public user: AuthUser;

  public constructor(private store: Store<fromRoot.State>) { }

  public ngOnInit() { }

  public logout() {
    this.store.dispatch(new authActions.LogoutAction(null));
  }
}
