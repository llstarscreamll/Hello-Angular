import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { State as AuthState }  from './../../../../modules/auth/reducers/auth';
import { State as AppState } from './../../../../modules/core/reducers/app';
import * as fromRoot from './../../../../modules/core/reducers';

@Component({
  selector: 'app-nav-top-layout',
  templateUrl: './nav-top-layout.component.html',
  styleUrls: ['./nav-top-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavTopLayoutComponent implements OnInit {

  private viewPortHeight: number = window.innerHeight;
  public authState$: Observable<AuthState>;
  public appState$: Observable<AppState>;
  public collapseNavBar: boolean = true;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.authState$ = this.store.select(fromRoot.getAuthState);
    this.appState$ = this.store.select(fromRoot.getAppState);
  }

}
