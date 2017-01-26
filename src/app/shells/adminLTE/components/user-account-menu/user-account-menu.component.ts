import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './../../../../modules/core/reducers';
import * as authActions from './../../../../modules/auth/actions/auth';
import { AuthUser } from './../../../../modules/auth/models/authUser';

@Component({
  selector: '[app-admin-lte-user-account-menu]',
  templateUrl: './user-account-menu.component.html',
  styleUrls: ['./user-account-menu.component.css']
})
export class UserAccountMenuComponent implements OnInit {

  @Input() user: AuthUser;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() { }

  public logout() {
    this.store.dispatch(new authActions.LogoutAction(null));
  }
}