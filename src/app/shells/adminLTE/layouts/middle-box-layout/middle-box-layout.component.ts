import { Component, HostBinding, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from './../../../../modules/core/reducers';
import { State as AppState } from './../../../../modules/core/reducers/app';

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
  styles: [':host { display: block; }']
})
export class MiddleBoxLayoutComponent implements OnInit {

  @HostBinding('class.login-page') loginStyle: boolean = true;
  public appState$: Observable<AppState>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.appState$ = this.store.select(fromRoot.getAppState);
  }

}
