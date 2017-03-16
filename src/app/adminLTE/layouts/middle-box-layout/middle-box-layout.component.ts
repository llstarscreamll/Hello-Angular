import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from './../../../core/reducers';
import { State as AppState } from './../../../core/reducers/app';

@Component({
  selector: 'app-middle-box-layout',
  template: `
    <div class="login-box">
      <div class="login-logo">
        <a routerLink="/front/landing"><b>{{ (appState$ | async)?.companyInfo.big_name }}</b> {{ (appState$ | async)?.companyInfo.small_name }}</a>
      </div>
      <div class="login-box-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: [
    './middle-box-layout.component.css',
    '~admin-lte/dist/css/AdminLTE.min.css',
    '~admin-lte/dist/css/skins/_all-skins.min.css',
  ],
  encapsulation: ViewEncapsulation.None
})
export class MiddleBoxLayoutComponent implements OnInit {

  @HostBinding('class.login-page') loginStyle: boolean = true;
  public appState$: Observable<AppState>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.appState$ = this.store.select(fromRoot.getAppState);
  }

}
