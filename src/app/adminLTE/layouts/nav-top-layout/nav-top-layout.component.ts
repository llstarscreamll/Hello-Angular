import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { State as AuthState }  from './../../../auth/reducers/auth';
import { State as AppState } from './../../../core/reducers/app';
import * as fromRoot from './../../../core/reducers';

@Component({
  selector: 'app-nav-top-layout',
  templateUrl: './nav-top-layout.component.html',
  styleUrls: [
    '~admin-lte/dist/css/AdminLTE.min.css',
    '~admin-lte/dist/css/skins/_all-skins.min.css'
    ],
  encapsulation: ViewEncapsulation.None,
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
