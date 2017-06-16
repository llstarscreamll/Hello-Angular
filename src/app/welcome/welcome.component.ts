import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import * as fromRoot from 'app/reducers';
import { AuthUser } from "app/auth/models/authUser";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {

  public user$: Observable<AuthUser>;

  public constructor(private store: Store<fromRoot.State>) { }

  public ngOnInit() {
    this.user$ = this.store.select(fromRoot.getAuthUser);
  }
}
